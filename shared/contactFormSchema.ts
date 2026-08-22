import { z } from 'zod';

// Common email pattern for contact form validation.
// This rejects escaped-at inputs like `aa\@dd` while still allowing normal
// addresses such as `name+tag@example.com`.
export const EMAIL_ADDRESS_REGEX =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .regex(EMAIL_ADDRESS_REGEX, 'Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
