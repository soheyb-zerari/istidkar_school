import React from 'react'
import StudentsList from "@/components/studentList.component";
import AddStudentModal from "@/components/addStudentModal.component";

const StudentsPage = () => {
    return (
        <main
            className="grid gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 grid-cols-1"
            dir="rtl"
        >
            <AddStudentModal />
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <StudentsList/>
            </div>
        </main>
    )
}
export default StudentsPage
