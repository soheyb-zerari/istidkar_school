import React from 'react'
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {getGroupByTeacherId} from "@/actions/group.action";
import {createClient} from "@/app/utils/supabase/server";
import GroupRow from "@/components/groupRow.component";

const GroupList = async() => {

    const supabase = await createClient();
    const { data, error} = await supabase.auth.getUser();

    if (error) return null;

    const authId = data.user.id
    const groups = await getGroupByTeacherId(authId);

    if (!groups) {
        return null;
    }
    return (
        <Tabs defaultValue="groups">
            <TabsContent value="groups">
                <Card x-chunk="dashboard-05-chunk-3" className="rtl" dir="rtl">
                    <CardHeader className="px-7">
                        <CardTitle>المجموعات</CardTitle>
                        {/*<CardDescription>قائمة الطلاب المسجلين</CardDescription>*/}
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">اسم المجموعة</TableHead>
                                    <TableHead className="text-right">التاريخ</TableHead>
                                    <TableHead className="text-right">حذف</TableHead>
                                    <TableHead className="text-right">تغيير</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {groups?.map((group) =>
                                    <GroupRow key={group.id} group={group} />
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
export default GroupList
