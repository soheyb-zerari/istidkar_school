import { createClient } from "@/app/utils/supabase/client";
import {redirect} from "next/navigation";

const getStudents = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.from("student").select("*");

    if (error) throw error;

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

export { getStudents, addStudent, updateStudent, deleteStudent }