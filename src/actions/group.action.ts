import { createClient } from "@/app/utils/supabase/client";
import {redirect} from "next/navigation";

const addGroup = async (formData: FormData) => {
    const supabase = await createClient();

    const extractedData = {
        name: formData.get("name") as string,
    }
    const teacher = await supabase.auth.getUser()

    const teacherDb = await supabase
        .from('teacher')
        .select('*')
        .eq('user_id', teacher.data.user?.id)
        .single();

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

export { addGroup }