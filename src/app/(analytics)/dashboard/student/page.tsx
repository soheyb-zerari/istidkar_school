import React from 'react'
import StudentsList from "@/components/studentList.component";
import AddStudentModal from "@/components/addStudentModal.component";

const StudentsPage = () => {
    return (
        <main
            className="grid p-4 pt-4 mx-0 sm:px-6 md:gap-y-6 grid-cols-1"
            dir="rtl"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">قائمة الطلاب المسجلين</h1>
                <AddStudentModal />
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <StudentsList/>
            </div>
        </main>
    )
}
export default StudentsPage
