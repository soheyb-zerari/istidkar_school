import React from 'react'
import {redirect} from "next/navigation";
import {getGroupById} from "@/actions/group.action";
import GroupStudentList from "@/components/groupStudentList.component";
import UpdateGroupModal from "@/components/updateGroupModal.component";

const GroupIdPage = async ({params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id
    const groupId = Number(id);

    if (isNaN(groupId)) {
        redirect("/dashboard/group")
    }

    const group = await getGroupById(groupId);

    if (group === null) redirect("/dashboard/group")

    return (
        <main
            className="grid p-4 pt-4 mx-0 sm:px-6 md:gap-y-6 grid-cols-1"
            dir="rtl"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{group.name}</h1>
                <UpdateGroupModal groupId={groupId}/>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <GroupStudentList groupId={groupId} />
            </div>
        </main>
    )
}
export default GroupIdPage
