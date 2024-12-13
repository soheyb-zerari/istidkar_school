"use client"

import React from 'react'
import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddStudentForm from "@/components/addStudentForm.component";

const AddStudentModal = () => {
    const [username, setUsername] = useState<string>("")

    return (
        <Dialog>
            <DialogTrigger className="flex justify-end items-center bg-black text-white px-5 py-1 rounded-md">
                    أدخل طالب جديد
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <AddStudentForm username={username} setUsername={setUsername} />
            </DialogContent>
        </Dialog>
    )
}

export default AddStudentModal
