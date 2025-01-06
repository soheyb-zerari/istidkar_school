import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddSessionForm from "@/components/addSessionForm.component";
import {createClient} from "@/app/utils/supabase/server";
import {getGroupByTeacherId} from "@/actions/group.action";

const AddSessionModal = async () => {
    const supabase = await createClient();
    const {data} = await supabase.auth.getUser();

    const userId = data.user?.id as string;

    const groups = await getGroupByTeacherId(userId);
    console.log(groups);

    return (
        <Dialog>
            <DialogTrigger className="flex justify-end items-center bg-black text-white px-5 py-1 rounded-md">
                أنشأ حصة جديدة
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogTitle></DialogTitle>
                <AddSessionForm groups={groups}/>
            </DialogContent>
        </Dialog>
    )
}

export default AddSessionModal
