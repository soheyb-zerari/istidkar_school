"use server"

import { createClient } from "@/app/utils/supabase/client";
import { createClient as createServerClient } from "@/app/utils/supabase/server";
import {redirect} from "next/navigation";
import {getTeacherByUserId} from "@/actions/teacher.action";
import {SupabaseClient} from "@supabase/supabase-js";
import {getStudentById} from "@/actions/student.action";

const addGroup = async (formData: FormData) => {
    const supabase = await createServerClient();

    const extractedData = {
        name: formData.get("name") as string,
    }

    const { data } = await supabase.auth.getUser();

    if (!data.user?.id) {
        redirect("/error")
    }

    const teacherDb = await getTeacherByUserId(data.user?.id);

    if (teacherDb.error || !extractedData.name) {
        redirect("/error");
    }

    const { error } = await supabase.from("groupe").insert([{
        name: extractedData.name,
        teacher: teacherDb.data.id
    }])

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/group')
}

const addStudentToGroup = async (studentId: number, groupId: number) => {
    const supabase = await createServerClient();

    const isGroupExist = await getGroupById(groupId);
    if (!isGroupExist) return;

    const isStudentExist = await getStudentById(studentId);
    if (!isStudentExist) return;

    const {error} = await supabase.from("groupe_student").insert([{
        groupe_id: groupId,
        student_id: studentId,
    }])

    if (error) return;

    redirect(`/dashboard/group/${groupId}`);
}

const deleteStudentFromGroup = async (studentId: number, groupId: number) => {
    const supabase = await createServerClient();

    const isGroupExist = await getGroupById(groupId);
    if (!isGroupExist) return;

    const isStudentExist = await getStudentById(studentId);
    if (!isStudentExist) return;

    const {error} = await supabase.from("groupe_student").delete()
        .eq("groupe_id", groupId)
        .eq("student_id", studentId);

    if (error) return;

    redirect(`/dashboard/group/${groupId}`);
}

const getGroupByTeacherId = async (authId: string)=> {
    const supabase = await createClient();

    const teacherDb = await getTeacherByUserId(authId);

    if (teacherDb.error) {
        redirect("/error");
    }

    const { data, error} = await supabase.from("groupe").select("*").eq("teacher", teacherDb.data.id)

    if (error) {
        redirect("/error")
    }

    return data;
}

const getGroupById = async (groupId: number) => {
    const supabase = await createServerClient();

    const { error, data} = await supabase.from("groupe").select("*").eq("id", groupId).single();

    if (error) {
        return null;
    }

    return data;
}

const deleteGroup = async (id: number) => {
    const supabase = await createServerClient();

    await handleIsUserAuthorized(supabase);

    const {error} = await supabase.from("groupe").delete().eq("id", id);

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/group')
}

const updateGroup = async (formData: FormData) => {
    const supabase = await createServerClient();

    const extractedData = {
        name: formData.get("name") as string,
        groupId: formData.get("groupId") as string,
    }

    if (!extractedData.name || !extractedData.groupId) redirect("/error")

    await handleIsUserAuthorized(supabase);

    const {error} = await supabase.from("groupe")
        .update({name: extractedData.name})
        .eq("id", extractedData.groupId);

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/group')
}

const handleIsUserAuthorized = async (supabase: SupabaseClient<any, "public" extends keyof any ? "public" : (string & keyof any), any>) => {
    const authCredential = await supabase.auth.getUser();
    if (authCredential.error) redirect("/error");

    const userId = authCredential.data.user.id;
    const teacherDb = await getTeacherByUserId(userId);
    if (teacherDb.error) redirect("/error")

    const isOwner = await teacherIsGroupOwner(teacherDb.data.id);
    if (!isOwner) redirect("/error")
}

const teacherIsGroupOwner = async (teacherId: number) => {
    const supabase = await createServerClient();

    const authUser = await supabase.auth.getUser();

    const authUserId = authUser.data.user?.id;
    if (!authUserId) return false;


    const {data, error} = await getTeacherByUserId(authUserId);
    if (error) return false;

    return teacherId === data.id;
}

export { addGroup, addStudentToGroup, getGroupByTeacherId, getGroupById, deleteGroup, deleteStudentFromGroup, updateGroup }