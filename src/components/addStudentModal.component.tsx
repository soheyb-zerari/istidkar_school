"use client"

import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
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
            <DialogTrigger className="flex justify-center items-center" asChild>
                <Button className="w-fit m-auto" variant="default">أدخل طالب جديد</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <AddStudentForm username={username} setUsername={setUsername} />
            </DialogContent>
        </Dialog>
    )
}

export default AddStudentModal
