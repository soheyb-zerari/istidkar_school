import React, {Dispatch, SetStateAction} from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {updateGroup} from "@/actions/group.action";

const UpdateGroupForm = ({name, setName, groupId}: {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    groupId: number
}) => {
    return (
        <form action={updateGroup}>
            <div className="py-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-right block">
                        اسم المجموعة
                    </Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-right"
                        name="name"
                        dir="rtl"
                        placeholder="أدخل اسم المجموعة الجديد هنا"
                    />
                </div>
            </div>
            <input
                type="hidden"
                name="groupId"
                value={groupId}
            />

            <DialogFooter>
                <Button type="submit" className="w-full">
                    حفظ
                </Button>
            </DialogFooter>
        </form>
    )

}
export default UpdateGroupForm
