"use client"

import React from 'react'
import {TableCell, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {deleteStudent} from "@/actions/student.action";
import UpdateStudentModal from "@/components/updateStudentModal.component";

const StudentRow = ({key ,student}: {key: number, student: {
        id: number,
        username: string,
        role: string,
        updated_at: string
    }}) => {
    return (
        <TableRow key={key}>
            <TableCell>
                <div className="font-medium" dir="rtl">
                    {student.username}
                </div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                    مسجل
                </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                {student.updated_at.slice(0, 10)}
            </TableCell>
            <TableCell className="hidden md:table-cell">
                <Button
                    onClick={async () => {
                        await deleteStudent(student.id)
                    }}
                    className="h-9 w-8"
                    variant="destructive">
                    <Trash />
                </Button>
            </TableCell >
            <TableCell className="hidden md:table-cell">
                <UpdateStudentModal studentId={student.id}/>
            </TableCell>
        </TableRow>
    )
}
export default StudentRow
