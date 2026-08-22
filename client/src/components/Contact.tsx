import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@shared/contactFormSchema';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TEXT, CONTACT_DETAILS, FORM_ENDPOINTS } from '@shared/constants';
import { EMAIL_ADDRESS_REGEX } from '@shared/contactFormSchema';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Icon } from '@/components/ui/icon';

const contactIconMap: Record<string, { name: string; brand?: boolean }> = {
  email: { name: 'envelope' },
  linkedin: { name: 'linkedin', brand: true },
  location: { name: 'location-dot' },
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useScrollAnimation();

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleFieldBlur = async (field: keyof ContactFormData) => {
    const value = getValues(field);

    if (!value || value.trim() === '') {
      clearErrors(field);
      return;
    }

    try {
      await trigger(field);
    } catch {
      // react-hook-form/zod can reject the validation promise for invalid touched fields;
      // we intentionally keep the error in the form state and avoid crashing the console.
    }
  };

  const FORMSPREE_ENDPOINT = FORM_ENDPOINTS.FORMSPREE;

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: 'Message Sent Successfully!',
          description: "Thank you for your message. I'll get back to you soon.",
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
    } catch {
      toast({
        title: 'Failed to Send Message',
        description: 'Please try again later or contact me directly.',
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="section-transition relative py-10 text-white sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.11),transparent_22%),radial-gradient(circle_at_bottom,_rgba(96,165,250,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center stagger-child">
          <SectionHeading
            id="contact-heading"
            eyebrow="Reach Out"
            title={TEXT.contact.sectionHeading}
            description={TEXT.contact.intro}
            tone="rose"
            titleClassName="text-4xl sm:text-5xl lg:text-6xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="scroll-animate">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-bold text-white">
                {TEXT.contact.formHeading}
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {}
                <div>
                  <Label htmlFor="name" className="text-slate-200">
                    {TEXT.contact.nameLabel} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register('name')}
                    onBlur={() => {
                      void handleFieldBlur('name');
                    }}
                    className={`mt-2 rounded-2xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-500 ${errors.name ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {}
                <div>
                  <Label htmlFor="email" className="text-slate-200">
                    {TEXT.contact.emailLabel} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    inputMode="email"
                    pattern={EMAIL_ADDRESS_REGEX.source}
                    {...register('email')}
                    onBlur={() => {
                      void handleFieldBlur('email');
                    }}
                    className={`mt-2 rounded-2xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-500 ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {}
                <div>
                  <Label htmlFor="message" className="text-slate-200">
                    {TEXT.contact.messageLabel} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    {...register('message')}
                    onBlur={() => {
                      void handleFieldBlur('message');
                    }}
                    className={`mt-2 resize-none rounded-2xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-500 ${errors.message ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {}
                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-95" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Icon name="spinner" className="-ml-1 mr-3 h-5 w-5 animate-spin" />
                      {TEXT.contact.submit.sending}
                    </>
                  ) : (
                    <>
                      {TEXT.contact.submit.send}
                      <Icon name="paper-plane" className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="scroll-animate">
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/65 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {CONTACT_DETAILS.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 rounded-2xl border border-white/5 bg-white/5 p-3">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                        <Icon
                          {...(contactIconMap[item.id] ?? { name: 'circle-question' })}
                          className="h-6 w-6"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-300">{item.label}</p>
                        {'href' in item ? (
                          (() => {
                            const href = (item as any).href as string;
                            const isExternal =
                              typeof href === 'string' && /^https?:\/\//.test(href);
                            return (
                              <a
                                href={href}
                                className="text-base text-white transition-colors duration-200 hover:text-cyan-300"
                                {...(isExternal
                                  ? { target: '_blank', rel: 'noopener noreferrer' }
                                  : {})}
                              >
                                {item.value}
                              </a>
                            );
                          })()
                        ) : (
                          <p className="text-base text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center text-cyan-300">
                    <Icon name="circle-info" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">
                      {TEXT.contact.quickResponseTitle}
                    </h4>
                    <p className="text-sm text-slate-300">{TEXT.contact.quickResponseText}</p>
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
