/**
 * Contact Component - Professional contact form with validation
 * 
 * Features:
 * - React Hook Form with Zod validation
 * - Professional email integration
 * - Real-time form validation with error feedback
 * - Success/error toast notifications
 * - Responsive design with accessibility features
 * - Contact information display
 * 
 * Layout:
 * - Left side: Contact form with validation
 * - Right side: Contact information and social links
 * - Mobile: Stacked layout for better usability
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@shared/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

/**
 * Contact form validation schema
 * Defines validation rules for all form fields
 */
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

/**
 * TypeScript type for form data
 */
type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact information data
 */
const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6C24 4.9 23.1 4 22 4zM22 8l-10 6L2 8V6l10 6 10-6V8z"/>
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    id: 'location',
    label: 'Location',
    value: PERSONAL_INFO.location,
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    )
  }
];


/**
 * Contact section component
 * @returns JSX element containing the contact form and information
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Enable scroll animations
  useScrollAnimation();

  /**
   * React Hook Form setup with Zod validation
   */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  /**
   * Submit contact form mutation
   */
  // Formspree endpoint for static form submission
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzpppnr'; // Replace with your Formspree form ID

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: 'Message Sent Successfully!',
          description: 'Thank you for your message. I\'ll get back to you soon.',
          variant: 'default',
        });
        reset();
      } else {
        toast({
          title: 'Failed to Send Message',
          description: 'Please try again later or contact me directly.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Failed to Send Message',
        description: 'Please try again later or contact me directly.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  /**
   * Handle form submission
   * @param data - Validated form data
   */
  // ...existing code...

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-purple-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration contact">
            Get In Touch
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Send me a message and I'll respond via email or LinkedIn as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="scroll-animate">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-heading-primary mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete="off">
                
                {/* Name field */}
                <div>
                  <Label htmlFor="name" className="text-body-primary">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register('name')}
                    className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="off"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <Label htmlFor="email" className="text-body-primary">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register('email')}
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="off"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>



                {/* Message field */}
                <div>
                  <Label htmlFor="message" className="text-body-primary">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    {...register('message')}
                    className={`mt-1 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                    autoComplete="off"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate">
            <div className="space-y-8">
              
              {/* Contact details */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-heading-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-heading-secondary">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-body-primary hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-body-primary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              {/* Quick response note */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-primary mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading-primary mb-1">Quick Response</h4>
                    <p className="text-sm text-body-secondary">
                      I typically respond to messages within 24 hours. For urgent inquiries, 
                      feel free to reach out via phone or LinkedIn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}