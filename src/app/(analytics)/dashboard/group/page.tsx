import React from 'react'

import AddGroupModal from "@/components/addGroupModal.component";
import GroupList from "@/components/groupList.component";

const GroupPage = async () => {

    return (
        <main
            className="grid p-4 pt-4 mx-0 sm:px-6 md:gap-y-6 grid-cols-1"
            dir="rtl"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">قائمة المجموعات</h1>
                <AddGroupModal />
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <GroupList/>
            </div>
        </main>
    )
}
export default GroupPage
