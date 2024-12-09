import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4, "كلمة السر يجب أن تتكون من أربعة حروف أو أكثر"),
});
