import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { getStudents } from "@/actions/student.action";
import StudentRow from "@/components/studentRow.component";

const StudentsList = async () => {
    const students = await getStudents();

    // TODO: handle the error condition here
    // FIXME - handle the error condition here

    // FIXME - handle the error by displaying something to the user when students and teachers are setted
    if (!students) {
        return null;
    }

    return (
                <Tabs defaultValue="students">
                    <TabsContent value="students">
                        <Card x-chunk="dashboard-05-chunk-3" className="rtl" dir="rtl">
                            <CardHeader className="px-7">
                                <CardTitle>الطلاب</CardTitle>
                                <CardDescription>قائمة الطلاب المسجلين حديثاً</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-right">الاسم</TableHead>
                                            <TableHead className="text-right">الحالة</TableHead>
                                            <TableHead className="text-right">التاريخ</TableHead>
                                            <TableHead className="text-right">حذف</TableHead>
                                            <TableHead className="text-right">تغيير</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {students?.map((student) =>
                                            <StudentRow key={student.id} student={student} />
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
