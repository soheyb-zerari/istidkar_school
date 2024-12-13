"use client"

import React, {useState} from 'react'
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import AddGroupForm from "@/components/addGroupForm.component";

const AddGroupModal = () => {
    const [name, setName] = useState<string>("")

    return (
        <Dialog>
            <DialogTrigger className="flex justify-end items-center bg-black text-white px-5 py-1 rounded-md">
                أدخل مجموعة جديدة
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <AddGroupForm name={name} setName={setName} />
            </DialogContent>
        </Dialog>
    )
}
export default AddGroupModal
