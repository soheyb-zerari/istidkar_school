import React from 'react'
import {TableCell, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {deleteGroup, getGroupById} from "@/actions/group.action";
import {SquarePen, Trash} from "lucide-react";
import {redirect} from "next/navigation";
import SessionActivity from "@/components/sessionActivity.component";

const SessionRow = async ({key ,session}: {key: number, session: {
        id: number,
        teacher: number,
        groupe: number,
        date: string,
    }}) => {
    const groupData = await getGroupById(session.groupe);
    return (
        <TableRow key={key}>
            <TableCell>
                <div className="font-medium text-md" dir="rtl">
                    {groupData.name}
                </div>
            </TableCell>
            <TableCell className="md:table-cell">
                {session.date.slice(0, 10)}
            </TableCell>
            <SessionActivity sessionId={session.id}/>
        </TableRow>
    )
}
export default SessionRow
