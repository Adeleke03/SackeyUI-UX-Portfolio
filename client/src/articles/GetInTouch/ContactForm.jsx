import React, { useState } from "react";
import { Toaster, toast } from 'sonner';
import MyButton from "../../components/common/MyButton.jsx";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      project: formData.get("project"),
      message: formData.get("message"),
    };
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/sackeydavid063@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
      } else {
        toast.error(`Failed: ${result.message || "Please try again."}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 border-bottom lg:w-[561px]">
      {/* Add Toaster component for sonner notifications */}
      <Toaster 
        position="top-center"
        richColors
        closeButton
        duration={4000}
      />
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-[23.99px]">
        <div className="lg:flex lg:gap-4">
          {/* form name */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="name"
              className="text-[#99A1AF] text-[14px] leading-[16px] tracking-normal font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              className="w-full h-[58.3px] rounded-[14px] border-[1.18px] py-[16px] px-[20px] bg-[#FFFFFF0D] border-white/10"
            />
          </div>
          
          {/* form email */}
          <div className="flex w-full flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="text-[#99A1AF] text-[14px] leading-[16px] tracking-normal font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@example.com"
              required
              className="w-full h-[58.3px] rounded-[14px] border-[1.18px] py-[16px] px-[20px] bg-[#FFFFFF0D] border-white/10"
            />
          </div>
        </div>
        
        {/* Form Project Type */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="project"
            className="text-[#99A1AF] text-[14px] leading-[16px] tracking-normal font-medium"
          >
            Project Type
          </label>
          <input
            type="text"
            name="project"
            id="project"
            placeholder="e.g., Website, Mobile App, Branding"
            className="w-full h-[58.3px] rounded-[14px] border-[1.18px] py-[16px] px-[20px] bg-[#FFFFFF0D] border-white/10"
          />
        </div>
        
        {/* form for message */}
        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="message"
            className="text-[#99A1AF] text-[14px] leading-[16px] tracking-normal font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
            className="w-full h-[178px] rounded-[14px] border-[1.18px] py-[16px] px-[20px] bg-[#FFFFFF0D] border-white/10"
          />
        </div>
        
        {/* form submission */}
        <MyButton 
          text="formsubmitbutton" 
          size="largexl" 
          variant="primary" 
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default ContactForm;