import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody, TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { getStudents } from "@/actions/student.action";
import {Badge} from "@/components/ui/badge";
import React from "react";

const StudentsList = async () => {
    const students = await getStudents();

    // TODO: handle the error condition here
    // FIXME - handle the error condition here

    // FIXME - handle the error by displaying something to the user when students and teachers are setted
    if (!students || students.length === 0) return null;


    return (
                <Tabs defaultValue="students">
                    <TabsContent value="students">
                        <Card x-chunk="dashboard-05-chunk-3" className="" dir="rtl">
                            <CardHeader className="px-7">
                                <CardTitle>الطلاب</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-right">الاسم</TableHead>
                                            <TableHead className="text-right">الحالة</TableHead>
                                            <TableHead className="text-right">التاريخ</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {students?.map((student) =>
                                            <TableRow key={student.id}>
                                                <TableCell>
                                                    <div className="font-medium text-md" dir="rtl">
                                                        {student.username}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        مسجل
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="md:table-cell">
                                                    {student.updated_at.slice(0, 10)}
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
    );
};

export default StudentsList;
