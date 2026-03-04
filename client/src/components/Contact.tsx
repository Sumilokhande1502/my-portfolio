

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "@shared/contactFormSchema";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TEXT, CONTACT_DETAILS, FORM_ENDPOINTS } from "@shared/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiLinkedin } from "react-icons/si";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { FiLoader, FiSend } from "react-icons/fi";




const contactIconMap: Record<string, JSX.Element> = {
  email: <HiOutlineMail className="w-6 h-6" aria-hidden />,
  linkedin: <SiLinkedin className="w-6 h-6" aria-hidden />,
  location: <HiOutlineLocationMarker className="w-6 h-6" aria-hidden />,
};


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  
  useScrollAnimation();

  
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    trigger,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  
  
  const FORMSPREE_ENDPOINT = FORM_ENDPOINTS.FORMSPREE;

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        reset();
      } else {
        toast({
          title: "Failed to Send Message",
          description: "Please try again later or contact me directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  
  

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 section-transition"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-16 stagger-child">
          <h2 className="text-4xl text-heading-primary mb-4 section-heading-decoration contact">
            {TEXT.contact.sectionHeading}
          </h2>
          <div className="section-divider decorative"></div>
          <p className="text-xl text-body-secondary max-w-3xl mx-auto">
            {TEXT.contact.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {}
          <div className="scroll-animate">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-heading-primary mb-6">
                {TEXT.contact.formHeading}
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {}
                <div>
                  <Label htmlFor="name" className="text-body-primary">
                    {TEXT.contact.nameLabel}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    {...register("name", {
                      onChange: () => {
                        
                        clearErrors("name");
                        
                        void trigger("name");
                      },
                    })}
                    className={`mt-1 ${errors.name ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {}
                <div>
                  <Label htmlFor="email" className="text-body-primary">
                    {TEXT.contact.emailLabel}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email", {
                      onChange: () => {
                        clearErrors("email");
                        void trigger("email");
                      },
                    })}
                    className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {}
                <div>
                  <Label htmlFor="message" className="text-body-primary">
                    {TEXT.contact.messageLabel}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                    {...register("message", {
                      onChange: () => {
                        clearErrors("message");
                        void trigger("message");
                      },
                    })}
                    className={`mt-1 resize-none ${errors.message ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        aria-hidden
                      />
                      {TEXT.contact.submit.sending}
                    </>
                  ) : (
                    <>
                      {TEXT.contact.submit.send}
                      <FiSend className="ml-2 w-4 h-4" aria-hidden />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {}
          <div className="scroll-animate">
            <div className="space-y-8">
              {}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-heading-primary mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {CONTACT_DETAILS.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {contactIconMap[item.id] ?? null}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-heading-secondary">
                          {item.label}
                        </p>
                        {"href" in item ? (
                          (() => {
                            const href = (item as any).href as string;
                            const isExternal = typeof href === "string" && /^https?:\/\
                            
                            return (
                              <a
                                href={href}
                                className="text-body-primary hover:text-primary transition-colors duration-200"
                                {...(isExternal
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                              >
                                {item.value}
                              </a>
                            );
                          })()
                        ) : (
                          <p className="text-body-primary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 text-primary mt-0.5">
                    <HiOutlineInformationCircle
                      className="w-6 h-6"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading-primary mb-1">
                      {TEXT.contact.quickResponseTitle}
                    </h4>
                    <p className="text-sm text-body-secondary">
                      {TEXT.contact.quickResponseText}
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
