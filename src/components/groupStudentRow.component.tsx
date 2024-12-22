"use client"

import React from 'react'
import {TableCell, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {CirclePlus, Trash} from "lucide-react";
import {addStudentToGroup, deleteStudentFromGroup} from "@/actions/group.action";

const GroupStudentRow = ({key ,student, groupId}: {key: number, groupId: number, student: {
        id: number,
        username: string,
        role: string,
        updated_at: string,
        isJoined: boolean
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
                {student.isJoined ? (
                    <Button
                        onClick={async () => {
                            await deleteStudentFromGroup(student.id, groupId);
                        }}
                        className="h-9 w-8"
                        variant="destructive">
                        <Trash />
                    </Button>
                ) : (
                    <Button
                        onClick={async () => {
                            // add student to group
                            await addStudentToGroup(student.id, groupId);
                        }}
                        className="h-9 w-8 bg-yellow-400"
                        variant="default">
                        <CirclePlus />
                    </Button>
                )}
            </TableCell >
        </TableRow>
    )
}
export default GroupStudentRow
