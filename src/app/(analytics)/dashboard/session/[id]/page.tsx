import React from 'react'
import {redirect} from "next/navigation";
import {getSessionById} from "@/actions/session.action";
import UpdateGroupModal from "@/components/updateGroupModal.component";
import GroupStudentList from "@/components/groupStudentList.component";
import {getGroupById} from "@/actions/group.action";
import {getStudentByGroupId} from "@/actions/student.action";
import StudentPresenceList from "@/components/studentPresenceList.component";

const AbsencePage = async ({params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id
    const sessionId = Number(id);

    if (isNaN(sessionId)) {
        redirect("/dashboard/session")
    }

    const session = await getSessionById(sessionId);
    if (session === null) redirect("/dashboard/session");

    const groupData = await getGroupById(session.groupe);

    const students = await getStudentByGroupId(groupData.id);
    return (
        <main
            className="grid p-4 pt-4 mx-0 sm:px-6 md:gap-y-6 grid-cols-1"
            dir="rtl"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{groupData.name}</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <StudentPresenceList sessionId={session.id} students={students}/>
            </div>
        </main>
    )
}
export default AbsencePage
