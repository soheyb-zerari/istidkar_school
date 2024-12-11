import React from 'react'

import {getTeachers} from "@/actions/teacher.action";
import TeacherList from "@/components/teacherList.component";

const TeachersPage = async() => {
    const teachers = await getTeachers();

    // FIXME - handle the error by displaying something to the user when students and teachers are setted
    if (!teachers) {
        return null
    }

    return (
        <main
            className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2"
            dir="rtl"
        >
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <TeacherList />
            </div>
        </main>
    )
}
export default TeachersPage
