import React, { useState } from 'react';
import { X, CheckCircle, Users, Building, Mail, User } from 'lucide-react';

interface PilotWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotWaitlistModal: React.FC<PilotWaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    role: '',
    teamSize: '',
    objectives: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect to BackFeed.xyz after 2 seconds
    setTimeout(() => {
      window.open('https://backfeed.xyz/', '_blank');
      onClose();
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        workEmail: '',
        company: '',
        role: '',
        teamSize: '',
        objectives: ''
      });
    }, 2000);
  };

  const isFormValid = formData.firstName && formData.lastName && formData.workEmail && 
                     formData.company && formData.role && formData.teamSize && formData.objectives;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">Limited Spots Available</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Apply for Aegis AI Pilot Waitlist</h2>
            <p className="text-gray-300 mt-2">Be among the first to experience Aegis AI that truly listens. Help shape the future of customer conversations.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
            <p className="text-gray-300 mb-4">Thank you for your interest in the Aegis AI pilot program.</p>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-4">
              <p className="text-blue-300 font-medium">Redirecting to demo portal...</p>
              <p className="text-blue-400 text-sm mt-1">Watch Aegis in Action</p>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Work Email *
              </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                placeholder="your.email@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-white font-medium mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                placeholder="Your company name"
              />
            </div>

            {/* Role and Team Size */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">Your Role *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="CEO/Founder">CEO/Founder</option>
                  <option value="CTO">CTO</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Customer Success">Customer Success</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Team Size *
                </label>
                <select
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                >
                  <option value="">Select team size</option>
                  <option value="1-10 employees">1-10 employees</option>
                  <option value="11-50 employees">11-50 employees</option>
                  <option value="51-200 employees">51-200 employees</option>
                  <option value="201-1000 employees">201-1000 employees</option>
                  <option value="1000+ employees">1000+ employees</option>
                </select>
              </div>
            </div>

            {/* Objectives */}
            <div>
              <label className="block text-white font-medium mb-2">
                What are your objectives with Aegis AI? *
              </label>
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                placeholder="Tell us about your goals and how you plan to use Aegis AI..."
              />
            </div>

            {/* Benefits */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">What you'll get as a pilot participant:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Early access to advanced Aegis AI conversation platform</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Direct feedback channel to our product team</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Exclusive pilot pricing and extended pilot period</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Priority support and onboarding assistance</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Apply for Aegis AI Pilot Waitlist</span>
                  <span>→</span>
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-gray-400 text-sm text-center">
              By submitting this form, you agree to receive updates about the Aegis AI pilot program. 
              We respect your privacy and won't share your information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default PilotWaitlistModal;