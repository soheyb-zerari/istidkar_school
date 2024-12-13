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
                <div className="font-medium text-md" dir="rtl">
                    {student.username}
                </div>
            </TableCell>
            <TableCell className="sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                    مسجل
                </Badge>
            </TableCell>
            <TableCell className="md:table-cell">
                {student.updated_at.slice(0, 10)}
            </TableCell>
            <TableCell className="md:table-cell">
                <Button
                    onClick={async () => {
                        await deleteStudent(student.id)
                    }}
                    className="h-9 w-8"
                    variant="destructive">
                    <Trash />
                </Button>
            </TableCell >
            <TableCell className="md:table-cell">
                <UpdateStudentModal studentId={student.id}/>
            </TableCell>
        </TableRow>
    )
}
export default StudentRow
