import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import StudentsList from "@/components/studentList.component";
import {getStudents} from "@/actions/student.action";
import {getTeachers} from "@/actions/teacher.action";
import {createClient} from "@/app/utils/supabase/server";

const DashboardPage = async () => {

  const students = await getStudents()
  const teachers = await getTeachers()

  const supabase = await createClient();
  const {data: { user }} = await supabase.auth.getUser();

  console.log(user?.id);

  if (!students) {
    return null;
  }

  if (!teachers) {
    return null;
  }

  return (
    <main
      className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2"
      dir="rtl"
    >
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>الطلبة</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                نقدم لكم لوحة تحكم الخاصة بالإدارة لمتابعة .
              </CardDescription>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                تطور الطلبة والمعلمين والمواد الدراسية
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>الاحصائيات</Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>عدد الطلبة</CardDescription>
              <CardTitle className="text-4xl">{students.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>عدد الأساتذة</CardDescription>
              <CardTitle className="text-4xl">{teachers.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </div>
         <StudentsList />
      </div>
    </main>
  );
};

export default DashboardPage;
