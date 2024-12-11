import React, {Dispatch, SetStateAction} from 'react'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {updateStudent} from "@/actions/student.action";

const UpdateStudentForm = ({username, setUsername, studentId}: {
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    studentId: number
}) => {

    return (
        <form action={updateStudent}>
            <div className="py-4">
                <div className="space-y-2">
                    <Label htmlFor="username" className="text-right block">
                        اسم المستخدم
                    </Label>
                    <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="text-right"
                        name="username"
                        dir="rtl"
                        placeholder="أدخل اسم المستخدم هنا"
                    />
                </div>
            </div>
            <input
                type="hidden"
                name="studentId"
                value={studentId}
            />

            <DialogFooter>
                <Button type="submit" className="w-full">
                    حفظ
                </Button>
            </DialogFooter>
        </form>
    )
}
export default UpdateStudentForm
