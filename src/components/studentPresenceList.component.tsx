import React from 'react'
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import StudentPresenceRow from "@/components/studentPresenceRow.component";

const StudentPresenceList = ({sessionId, students}: {sessionId: number, students: {
        id: number,
        username: string,
        role: string,
        updated_at: string,
    } []}) => {
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
                                    <TableHead className="text-right">حاضر</TableHead>
                                    <TableHead className="text-right">غائب</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students?.map((student) =>
                                    <StudentPresenceRow key={student.id} student={student} sessionId={sessionId} />
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
export default StudentPresenceList
