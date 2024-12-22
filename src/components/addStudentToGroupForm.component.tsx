import React, {Dispatch, SetStateAction} from 'react'
// import {addStudentToGroup} from "@/actions/group.action";
// import {Label} from "@/components/ui/label";
// import {Input} from "@/components/ui/input";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {getStudents} from "@/actions/student.action";
import {Table, TableHead, TableHeader, TableRow, TableBody, TableCell} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"


const AddStudentToGroupForm = async({name, setName, groupId}: {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    groupId: number
}) => {
    const students = await getStudents();
    return (
        <div>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead className="text-right">Select</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell className="text-right">
                                    <Checkbox
                                        id={`student-${student.id}`}
                                        checked={selectedStudents.some(s => s.id === student.id)}
                                        onCheckedChange={() => toggleStudentSelection(student)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </ScrollArea>

            <DialogFooter>
                <Button type="submit" className="w-full">
                    حفظ
                </Button>
            </DialogFooter>
        </div>
    )

}
export default AddStudentToGroupForm
