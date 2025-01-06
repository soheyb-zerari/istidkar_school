"use server"

import { createClient } from "@/app/utils/supabase/client";
import { createClient as createServerClient } from "@/app/utils/supabase/server"
import {redirect} from "next/navigation";

const getStudents = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("student").select("*");

    if (error) throw error;

    return data;
}

const getStudentById = async (studentId: number) => {
    const supabase = await createServerClient();

    const { data, error } = await supabase.from("student").select("*").eq("id", studentId).single();

    if (error) return null;

    return data;
}

const addStudent = async (formData: FormData) => {
    const supabase = await createClient();

    const extractedData = {
        username: formData.get("username") as string,
    }

    const { error } = await supabase.from("student").insert([extractedData])

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/student')
}

const getStudentsWithGroupStatus = async (groupId: number) => {
    const supabase = await createServerClient();

    const { data, error } = await supabase
        .from('student')
        .select(`
      id,
      username,
      role,
      updated_at,
      groupe_student!left(groupe_id)
    `);

    if (error) {
        console.error('Error fetching students:', error.message);
        return null;
    }

    const studentsWithStatus = data.map((student) => {
        const isJoined = student.groupe_student.some(
            (group) => group.groupe_id === groupId
        );

        return {
            id: student.id,
            username: student.username,
            role: student.role,
            updated_at: student.updated_at,
            isJoined: isJoined,
        };
    });

    return studentsWithStatus;
}

const updateStudent = async (formData: FormData) => {
    const supabase = await createClient();

    const extractedData = {
        studentId: formData.get("studentId") as string,
        username: formData.get("username") as string,
    }

    const { error } = await supabase.from("student")
        .update({username: extractedData.username})
        .eq("id", Number(extractedData.studentId));

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/student')
}

const deleteStudent = async (id: number) => {
    const supabase = await createClient();

    const { error } = await supabase.from("student").delete().eq("id", id);

    if (error) {
        redirect("/error")
    }

    redirect('/dashboard/student')
}

const getStudentByGroupId = async (groupId: number) => {
    const supabase = await createServerClient();

    const studentsIds = await supabase.from("groupe_student").select("student_id").eq("groupe_id", groupId);
    if (studentsIds.error) redirect("/error");
    const ids: number[] = studentsIds.data.map((obj) => obj.student_id);

    const {data, error} = await supabase.from("student").select("*").in("id", ids);
    console.log(error);
    if (error) redirect("/error");

    return data;
}

const markStudentPresence = async (sessionId: number, studentId: number, presence: boolean)=> {
    if (
        typeof presence != "boolean" ||
        !sessionId ||
        !studentId
    ) redirect("/error")


    const supabase = await createServerClient();

    const presenceExist = await supabase.from("presence")
        .select("session,student")
        .eq("session", sessionId)
        .eq("student", studentId);

    if (presenceExist.error) redirect("/error")
    console.log(1);
    if (presenceExist.data.length != 0) return false;
    console.log(2);
    const { error, status } = await supabase.from("presence")
        .upsert([{
            session: sessionId,
            student: studentId,
            present: presence
        }])
    if (error) {
        console.log(error)
        redirect("/error")
    }

    return true;
}

export { getStudents, getStudentById, addStudent, updateStudent, deleteStudent, getStudentsWithGroupStatus, getStudentByGroupId, markStudentPresence }