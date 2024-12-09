import { createClient } from "@/utils/supabase/client";

const getTeachers = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("teacher").select("*");

    if (error) throw error;

    return data;
}

export { getTeachers }