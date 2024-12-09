import { createClient } from "@/utils/supabase/client";

const getStudents = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("student").select("*");

    if (error) throw error;

    return data;
}

export { getStudents }