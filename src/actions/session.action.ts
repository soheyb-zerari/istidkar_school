"use server"

import {createClient as createServerClient} from "@/app/utils/supabase/server";
import {getTeacherByUserId} from "@/actions/teacher.action";
import {redirect} from "next/navigation";

const getSessionById = async (sessionId: number) => {
    const supabase = await createServerClient();

    const { error, data} = await supabase.from("session").select("*").eq("id", sessionId).single();
    if (error) redirect("/error");

    return data;
}

const getSessionByTeacherId = async (userId: string) => {
    const supabase = await createServerClient();

    const teacherIdDb = await getTeacherByUserId(userId);
    if (teacherIdDb.error) redirect("/error");
    const teacherId = teacherIdDb.data.id;

    const {data, error} = await supabase.from("session").select("*")
        .eq("teacher", teacherId);

    if (error) redirect("/error");

    return data;
}

const createSession = async (groupId: number) => {
    const supabase = await createServerClient();

    const user = await supabase.auth.getUser();
    if (user.error) redirect("/error");
    const userId = user.data.user?.id;

    const teacherIdDb = await getTeacherByUserId(userId);
    if (teacherIdDb.error) redirect("/error");
    const teacherId = teacherIdDb.data.id;

    const {error} = await supabase.from("session").insert([{
        teacher: teacherId,
        groupe: groupId,
        date: new Date(),
    }]);
    if (error) redirect("/error");

    redirect("/dashboard/session");
}

const deleteSession = async (sessionId: number) => {
    const supabase = await createServerClient();

    const {data, error} = await supabase.from("session").delete().eq("id", sessionId);
    if (error) redirect("/error")

    redirect("/dashboard/session");
}

export { getSessionById, createSession, getSessionByTeacherId, deleteSession }