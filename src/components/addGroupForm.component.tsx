import React, {Dispatch, SetStateAction} from 'react'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {addGroup} from "@/actions/group.action";

const AddGroupForm = ({name, setName}: {name: string, setName: Dispatch<SetStateAction<string>>}) => {
    return (
        <form action={addGroup}>
            <div className="py-4">
                <div className="space-y-2">
                    <Label htmlFor="username" className="text-right block">
                        اسم المجموعة
                    </Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-right"
                        name="name"
                        dir="rtl"
                        placeholder="أدخل اسم المجموعة هنا"
                    />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" className="w-full">
                    حفظ
                </Button>
            </DialogFooter>
        </form>
    )
}
export default AddGroupForm
