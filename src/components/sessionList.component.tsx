import React from 'react'
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {getSessionByTeacherId} from "@/actions/session.action";
import SessionRow from "@/components/sessionRow.component";

const SessionList = async ({userId}: { userId: string }) => {
    const sessions = await getSessionByTeacherId(userId);
    return (
        <Tabs defaultValue="groups">
            <TabsContent value="groups">
                <Card x-chunk="dashboard-05-chunk-3" className="rtl" dir="rtl">
                    <CardHeader className="px-7">
                        <CardTitle>الحصص</CardTitle>
                        {/*<CardDescription>قائمة الطلاب المسجلين</CardDescription>*/}
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">اسم المجموعة</TableHead>
                                    <TableHead className="text-right">تاريخ الانشاء</TableHead>
                                    <TableHead className="text-right">حذف</TableHead>
                                    <TableHead className="text-right">تغيير</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sessions?.map((session) =>
                                    <SessionRow key={session.id} session={session} />
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default SessionList
