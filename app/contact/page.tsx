'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent. We will get back to you shortly.');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our products, shipping, or need assistance with your order? Our dedicated support team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone Support</h3>
                  <p className="text-slate-600 text-sm">+40 31 229 5555</p>
                  <p className="text-slate-500 text-xs mt-1">Mon-Fri, 9:00 AM - 5:00 PM EET</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 text-sm">support@europeptide.com</p>
                  <p className="text-slate-500 text-xs mt-1">We aim to reply within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                  <p className="text-slate-600 text-sm">Bucharest, Romania</p>
                  <p className="text-slate-500 text-xs mt-1">EU Distribution Center</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-slate-200 shadow-sm h-full">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="Please provide as much detail as possible..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
