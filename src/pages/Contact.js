import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { api, handleApiError } from '../services/api';
import './Contact.css';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectBudget: '',
    timeline: '',
    message: ''
  };

  const [formData, setFormData] = useState({
    ...initialFormData
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitInquiry = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');
    setIsSubmitting(true);

    try {
      await api.post('/api/inquiries', formData);
      setSubmitSuccess('Thank you for your inquiry. Our team will contact you shortly.');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitError(handleApiError(error, 'Unable to submit your inquiry right now. Please try again later.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-header"
          >
            <h1>Get In Touch</h1>
            <p>Ready to start your next project? Let's discuss how we can help you achieve your goals.</p>
          </motion.div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-info"
            >
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>hello@vistaarlabs.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="contact-form-container"
            >
              <form onSubmit={submitInquiry} className="contact-form">
                {submitSuccess && <p className="form-message success">{submitSuccess}</p>}
                {submitError && <p className="form-message error">{submitError}</p>}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="serviceType">Service Type *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="full-stack">Full Stack Solution</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="projectBudget">Project Budget *</label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-2lakh">₹50,000 - ₹2,00,000</option>
                      <option value="2lakh-5lakh">₹2,00,000 - ₹5,00,000</option>
                      <option value="5lakh-10lakh">₹5,00,000 - ₹10,00,000</option>
                      <option value="above-10lakh">Above ₹10,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent (ASAP)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;