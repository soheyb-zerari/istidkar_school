import React from 'react'

import AddSessionModal from "@/components/addSessionModal.component"
import {createClient} from "@/app/utils/supabase/server";
import SessionList from "@/components/sessionList.component";
import {redirect} from "next/navigation";

const SessionPage = async () => {
    const supabase = await createClient();
    const {data, error} = await supabase.auth.getUser();
    if (error) redirect("/error");
    const userId = data.user.id as string;


    return (
        <main
            className="grid p-4 pt-4 mx-0 sm:px-6 md:gap-y-6 grid-cols-1"
            dir="rtl"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">قائمة الحصص</h1>
                <AddSessionModal />
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <SessionList userId={userId}/>
            </div>
        </main>
    )
}
export default SessionPage
