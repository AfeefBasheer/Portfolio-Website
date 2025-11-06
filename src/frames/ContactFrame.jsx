import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Make sure you run: npm install @emailjs/browser

// --- UI Components ---
// I've moved all the UI components into this file for you.

const Heading = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3 text-center">
      {children}
    </h1>
  );
};

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`relative p-6 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};

const Input = ({ as = "input", ...props }) => {
  const commonClasses = `
    w-full p-3 bg-[#0f0f0f]/80 border border-white/10 rounded-lg 
    text-gray-200 placeholder-gray-500 
    focus:outline-none focus:ring-2 focus:ring-[#5eead4]/50 
    transition-all duration-300
  `;

  if (as === "textarea") {
    return (
      <textarea
        className={commonClasses}
        rows={props.rows || 4}
        {...props}
      />
    );
  }

  return <input className={commonClasses} {...props} />;
};

// --- THIS IS THE UPDATED BUTTON ---
// It now matches the style of your other teal button.
const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      className={`
        px-6 py-2 rounded-full font-semibold text-gray-900 
        bg-teal-500 hover:bg-teal-400
        transition-all duration-300 shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      {...props} // This correctly passes type="submit" and disabled={...}
    >
      {children}
    </motion.button>
  );
};

// --- Main Contact Frame Component ---

const ContactFrame = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null); // 'success', 'error', or null

  // IMPORTANT: Remember to create a .env file in your root folder
  // and add these 3 keys from your EmailJS account:
  // VITE_EMAILJS_SERVICE_ID=your_service_id
  // VITE_EMAILJS_TEMPLATE_ID=your_template_id
  // VITE_EMAILJS_PUBLIC_KEY=your_public_key
  
  const sendEmail = (e) => {
    e.preventDefault(); 
    setIsSending(true);
    setSendSuccess(null); 

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendSuccess("success");
          setIsSending(false);
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log(error.text);
          setSendSuccess("error");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center py-24 px-8 md:px-24 bg-[#0d0d0d] text-gray-200 overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0e0e0e]" />
      <div className="absolute inset-0 -z-10 bg-[url('/noise.svg')] opacity-[0.05]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <Heading>Lets Talk Tech</Heading>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-2xl"
      >
        <Card
          className="relative group p-8 bg-[#1a1a1a]/60 border border-white/10 rounded-2xl backdrop-blur-md 
                     transition-all duration-500 hover:border-[#5eead4]/40 
                     hover:shadow-[0_0_25px_-8px_rgba(94,234,212,0.3)]"
        >
          <p className="text-center text-gray-400 mb-8">
            Have a question or want to work together? Feel free to reach out.
          </p> 

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <Input name="name" placeholder="Your Name" required />
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
              rows={5}
              required
            />
            <div className="text-center pt-2">
              {/* This button now has the teal style */}
              <Button
                type="submit"
                className="w-full md:w-1/2"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {/* Success/error messages */}
            {sendSuccess === "success" && (
              <p className="text-center text-green-400 mt-4">
                Message sent successfully!
              </p>
            )}
            {sendSuccess === "error" && (
              <p className="text-center text-red-400 mt-4">
                Something went wrong. Please check your keys and try again.
              </p>
            )}
          </form>

          {/* Subtle Glow Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2-3 h-[2px] bg-[#5eead4] transition-all duration-500" />
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactFrame;