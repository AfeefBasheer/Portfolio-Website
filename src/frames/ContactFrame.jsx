import React from 'react';
import Heading from '../ui/Heading.jsx';
import Card from '../ui/Card.jsx';
import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';

const ContactFrame = () => {
  return (
    <section id="contact" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <Heading>Get In Touch</Heading>
        <Card className="max-w-2xl mx-auto">
          <p className="text-center text-secondary mb-8">
            Have a question or want to work together? Feel free to reach out.
          </p>
          {/* This form uses the 'mailto' action, which opens the user's
            default email client. This is the simplest, no-backend solution.
          */}
          <form 
            action="mailto:afeefmb.4221@gmail.com" 
            method="post" 
            encType="text/plain"
            className="space-y-6"
          >
            <Input 
              name="name" 
              placeholder="Your Name" 
              required 
            />
            <Input 
              name="email" 
              type="email" 
              placeholder="Your Email" 
              required 
            />
            <Input 
              name="message" 
              as="textarea" 
              placeholder="Your Message" 
              required 
            />
            <div className="text-center">
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactFrame;