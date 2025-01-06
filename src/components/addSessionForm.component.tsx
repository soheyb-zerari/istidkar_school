"use client"

import React from 'react'
import {createSession} from "@/actions/session.action";

const AddSessionForm = ({groups}: {groups: any[]}) => {

    return (
        <form>
            <div className="py-4">
                <div className="space-y-2">
                    {
                        groups.map((group) => (
                            <div
                                key={group.id}
                                dir="rtl"
                                className="text-lg rounded-md font-semibold cursor-pointer hover:bg-gray-100 p-2"
                                onClick={async () => {
                                    await createSession(group.id)
                                }}
                            >{group.name}</div>
                        ))
                    }
                </div>
            </div>
        </form>
    )
}
export default AddSessionForm
