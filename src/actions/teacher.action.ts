"use server"

import { createClient } from "@/app/utils/supabase/client";

const getTeachers = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("teacher").select("*");

    if (error) throw error;

    return data;
}

const getTeacherByUserId = async(teacherId: string) => {
    const supabase = await createClient();

    const teacherDb = await supabase
        .from('teacher')
        .select('*')
        .eq('user_id', teacherId)
        .single();

    return teacherDb
}

export { getTeachers, getTeacherByUserId }