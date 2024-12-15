import React, {useState} from 'react'
import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {SquarePen} from "lucide-react";
import UpdateGroupForm from "@/components/updateGroupForm.component";

const UpdateGroupModal = ({groupId}: {groupId: number}) => {
    const [name, setName] = useState<string>("");

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
                <UpdateGroupForm name={name} setName={setName} groupId={groupId} />
            </DialogContent>
        </Dialog>
    )
}

export default UpdateGroupModal
