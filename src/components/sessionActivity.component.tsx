"use client"

import React from 'react'
import {TableCell} from "@/components/ui/table";
import {SquarePen, Trash} from "lucide-react";
import { Button } from './ui/button';
import {deleteSession} from "@/actions/session.action";
import {redirect} from "next/navigation";

const SessionActivity = ({sessionId}: {sessionId: number}) => {
    return (
        <>
            <TableCell className="md:table-cell">
                <Button
                    onClick={async () => {
                        await deleteSession(sessionId);
                    }}
                    className="h-9 w-8"
                    variant="destructive">
                    <Trash />
                </Button>
            </TableCell >
            <TableCell className="md:table-cell">
                <Button
                    onClick={async () => {
                        redirect(`/dashboard/session/${sessionId}`)
                    }}
                    className="h-9 w-8"
                    variant="outline">
                    <SquarePen />
                </Button>
            </TableCell>
        </>
    )
}
export default SessionActivity
