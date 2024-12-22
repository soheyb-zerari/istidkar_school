"use client"

import React, {useState} from 'react'
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";
import AddStudentToGroupForm from "@/components/addStudentToGroupForm.component";

const AddStudentToGroupModal = ({groupId}: {groupId: number}) => {
    const [name, setName] = useState<string>("");

    return (
        <Dialog>
            <DialogTrigger className="flex justify-center items-center" asChild>
                <Button
                    className="h-9 w-8 bg-yellow-400 text-white"
                    variant="default">
                    <CirclePlus />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <AddStudentToGroupForm name={name} setName={setName} groupId={groupId} />
            </DialogContent>
        </Dialog>
    )
}
export default AddStudentToGroupModal
