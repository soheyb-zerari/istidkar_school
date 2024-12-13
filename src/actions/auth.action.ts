'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import {SupabaseClient} from "@supabase/supabase-js";

export async function login(formData: FormData) {
    const supabase = await createClient()

    console.log(supabase.auth);
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    console.log(error)
    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const signUpData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data, error } = await supabase.auth.signUp(signUpData)
    const userId = data.user?.id;

    if (error || !userId) {
        redirect('/error')
    }

    await linkUserToDataBase(supabase, userId, signUpData);

    revalidatePath('/', 'layout')
    redirect('/')
}

const linkUserToDataBase = async(
    supabase: SupabaseClient<any, "public", any>,
    userId: string,
    signUpData: {email: string, password: string}
) => {
    const { error } = await supabase.from("teacher").insert({
        user_id: userId,
        email: signUpData.email,
        password: signUpData.password,
        role: 'أستاذ', // Default role, customize as needed
        username: signUpData.email.split('@')[0], // Derive a username
    });

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}