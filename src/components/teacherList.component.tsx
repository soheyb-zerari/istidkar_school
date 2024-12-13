import React from 'react'
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {getTeachers} from "@/actions/teacher.action";

const TeacherList = async () => {
    const teachers = await getTeachers();

    if (!teachers) {
        return null;
    }

    return (
        <Tabs defaultValue="teachers">
            <TabsContent value="teachers">
                <Card x-chunk="dashboard-05-chunk-3" className="rtl" dir="rtl">
                    <CardHeader className="px-7">
                        <CardTitle>الأساتذة</CardTitle>
                        <CardDescription>قائمة الأساتذة</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">الاسم</TableHead>
                                    <TableHead className="text-right">النوع</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                    <TableHead className="text-right">التاريخ</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {teachers?.map((teacher) => {
                                    return (
                                        <TableRow key={teacher.id}>
                                            <TableCell>
                                                <div className="font-medium" dir="rtl">
                                                    {teacher.username}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell" dir="rtl">
                                                {teacher.role}
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="secondary">
                                                    مسجل
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                {teacher.updated_at.slice(0, 10)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default TeacherList
