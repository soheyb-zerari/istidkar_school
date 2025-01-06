"use client"

import React from 'react'
import {TableCell, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Check, X} from "lucide-react";
import {markStudentPresence} from "@/actions/student.action";

const StudentPresenceRow = ({key, student, sessionId}: {key: number, student: {
        id: number,
        username: string,
        role: string,
        updated_at: string,
    }, sessionId: number}) => {
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
                            await markStudentPresence(sessionId, student.id, true);
                        }}
                        className="h-9 w-8 bg-yellow-400"
                        variant="default">
                        <Check />
                    </Button>
            </TableCell >
            <TableCell className="md:table-cell">
                <Button
                    onClick={async () => {
                        await markStudentPresence(sessionId, student.id, false);
                    }}
                    className="h-9 w-8"
                    variant="destructive">
                    <X />
                </Button>
            </TableCell >
        </TableRow>
    )
}
export default StudentPresenceRow
