"use client"

import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UpdateStudentForm from "@/components/updateStudentForm.component";
import {SquarePen} from "lucide-react";

const UpdateStudentModal = ({studentId}: {studentId: number}) => {
    const [username, setUsername] = useState<string>("");

    return (
        <Dialog>
            <DialogTrigger className="flex justify-center items-center" asChild>
                <Button
                    className="h-9 w-8"
                    variant="outline">
                    <SquarePen />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <UpdateStudentForm username={username} setUsername={setUsername} studentId={studentId} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateStudentModal
