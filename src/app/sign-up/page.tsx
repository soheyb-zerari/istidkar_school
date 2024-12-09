import { signup } from "@/actions/auth.action";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const SignUpPage = () => {

    return (
        <div className="w-full grid lg:grid-cols-2 h-full">
            <div className="flex justify-center items-center h-full">
                <div className="grid w-[320px] sm:w-[360px] gap-6">
                    <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Create an Account</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to create an account
                        </p>
                    </div>
                    <form action={signup} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" type="password" name="password" placeholder="*********" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Create an Account
                        </Button>
                    </form>
                    <div className="text-center text-sm">
                        Already have an Account?{" "}
                        <Link href="/login" className="underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block h-full">
                <Image
                    src="/3417764.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
};

export default SignUpPage;
