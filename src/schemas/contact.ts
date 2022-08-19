import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(1, { message: 'Name is required.' }),
    email: z
        .string({
            required_error: 'Email is required.',
        })
        .email({ message: 'Not a valid email.' }),
    phone: z.string().optional(),
    subject: z.string().min(1, { message: 'Subject is required.' }),
    message: z
        .string()
        .min(1, { message: 'Message is required.' })
        .max(500, { message: 'Message can not be more than 500 characters.' }),
});
