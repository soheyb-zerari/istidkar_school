"use client"

import React from 'react'
import {TableCell, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {deleteGroup} from "@/actions/group.action";
import UpdateGroupModal from "@/components/updateGroupModal.component";


const GroupRow = ({key ,group}: {key: number, group: {
        id: number,
        teacher: number,
        name: string,
        updated_at: string
}}) => {
    return (
        <TableRow key={key}>
            <TableCell>
                <div className="font-medium text-md" dir="rtl">
                    {group.name}
                </div>
            </TableCell>
            <TableCell className="md:table-cell">
                {group.updated_at.slice(0, 10)}
            </TableCell>
            <TableCell className="md:table-cell">
                <Button
                    onClick={async () => {
                        await deleteGroup(group.id)
                    }}
                    className="h-9 w-8"
                    variant="destructive">
                    <Trash />
                </Button>
            </TableCell >
            <TableCell className="md:table-cell">
                <UpdateGroupModal groupId={group.id}/>
            </TableCell>
        </TableRow>
    )
}
export default GroupRow
