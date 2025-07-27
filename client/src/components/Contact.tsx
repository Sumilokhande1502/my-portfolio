import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest('POST', '/api/contacts', data);
    },
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: 'Failed to send message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">Email</p>
                    <a 
                      href="mailto:alex@example.com" 
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-medium">Location</p>
                    <p className="text-slate-600 dark:text-slate-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/alexjohnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/alexjohnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/alexjohnson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...form.register('name')}
                    placeholder="Your full name"
                    className="bg-white dark:bg-slate-800"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="your.email@example.com"
                    className="bg-white dark:bg-slate-800"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  {...form.register('subject')}
                  placeholder="What's this about?"
                  className="bg-white dark:bg-slate-800"
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm">{form.formState.errors.subject.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  {...form.register('message')}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="bg-white dark:bg-slate-800 resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
