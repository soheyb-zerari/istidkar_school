import React from 'react'
import {getStudentsWithGroupStatus} from "@/actions/student.action";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import GroupStudentRow from "@/components/groupStudentRow.component";

const GroupStudentList = async ({groupId}: {groupId: number}) => {
    const students = await getStudentsWithGroupStatus(groupId);

    // TODO: handle the error condition here
    // FIXME - handle the error condition here

    // FIXME - handle the error by displaying something to the user when students and teachers are setted
    if (!students || students.length === 0)  return null;

    return (
        <Tabs defaultValue="students">
            <TabsContent value="students">
                <Card x-chunk="dashboard-05-chunk-3" className="rtl" dir="rtl">
                    <CardHeader className="px-7">
                        <CardTitle>الطلاب</CardTitle>
                        {/*<CardDescription>قائمة الطلاب المسجلين</CardDescription>*/}
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">الاسم</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                    <TableHead className="text-right">التاريخ</TableHead>
                                    <TableHead className="text-right">تعديل</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students?.map((student) =>
                                    <GroupStudentRow key={student.id} student={student} groupId={groupId} />
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );

}
export default GroupStudentList
