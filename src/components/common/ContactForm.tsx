import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../../types';

interface ContactFormProps {
  isContactPage?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isContactPage = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // In a real app, you would send this data to a server
    console.log(data);
    setIsSubmitted(true);
    reset();
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={`${isContactPage ? 'max-w-2xl mx-auto' : ''}`}>
      {!isContactPage && (
        <h3 className="text-2xl font-semibold mb-6 text-purple">Send Us a Message</h3>
      )}
      
      {isSubmitted ? (
        <div className="bg-success/10 border border-success text-success rounded-lg p-4 mb-6 animate-fade-in">
          <p className="font-medium">Thank you for contacting us!</p>
          <p>We've received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                First Name <span className="text-error">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple ${
                  errors.firstName ? 'border-error' : 'border-gray-300'
                }`}
                placeholder="Your first name"
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && (
                <p className="mt-1 text-error text-sm">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-2">
                Last Name <span className="text-error">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple ${
                  errors.lastName ? 'border-error' : 'border-gray-300'
                }`}
                placeholder="Your last name"
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && (
                <p className="mt-1 text-error text-sm">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email <span className="text-error">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple ${
                errors.email ? 'border-error' : 'border-gray-300'
              }`}
              placeholder="Your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-error text-sm">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple/50 focus:border-purple ${
                errors.message ? 'border-error' : 'border-gray-300'
              }`}
              placeholder="How can we help you?"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-error text-sm">{errors.message.message}</p>
            )}
          </div>
          
          <div>
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;