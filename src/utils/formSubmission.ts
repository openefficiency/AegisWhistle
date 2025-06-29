// Form submission utilities for Aegis AI Pilot Waitlist

export interface FormSubmissionData {
  timestamp: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  role: string;
  teamSize: string;
  objectives: string;
  source: string;
}

// Formspree submission (primary method)
export const submitToFormspree = async (data: FormSubmissionData, formspreeUrl: string) => {
  try {
    const submissionData = {
      ...data,
      _subject: `New Aegis AI Pilot Application from ${data.firstName} ${data.lastName}`,
      _replyto: data.workEmail,
      _format: 'plain'
    };

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(submissionData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Formspree submission failed');
    }
    
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Formspree submission error:', error);
    throw error;
  }
};

// Google Sheets submission (alternative)
export const submitToGoogleSheets = async (data: FormSubmissionData, scriptUrl: string) => {
  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    return { success: true };
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    throw new Error('Failed to submit to Google Sheets');
  }
};

// Netlify Forms submission (alternative)
export const submitToNetlifyForms = async (data: FormSubmissionData) => {
  try {
    const formData = new FormData();
    formData.append('form-name', 'aegis-ai-pilot-waitlist');
    
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    });
    
    if (!response.ok) {
      throw new Error('Netlify Forms submission failed');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Netlify Forms submission error:', error);
    throw new Error('Failed to submit to Netlify Forms');
  }
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Form data validation
export const validateFormData = (data: Partial<FormSubmissionData>): string[] => {
  const errors: string[] = [];
  
  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.workEmail?.trim()) errors.push('Work email is required');
  else if (!validateEmail(data.workEmail)) errors.push('Please enter a valid email address');
  if (!data.company?.trim()) errors.push('Company name is required');
  if (!data.role?.trim()) errors.push('Role is required');
  if (!data.teamSize?.trim()) errors.push('Team size is required');
  if (!data.objectives?.trim()) errors.push('Objectives are required');
  
  return errors;
};

// Format data for different services
export const formatForFormspree = (data: FormSubmissionData) => ({
  ...data,
  _subject: `New Aegis AI Pilot Application from ${data.firstName} ${data.lastName}`,
  _replyto: data.workEmail,
  _format: 'plain'
});

export const formatForGoogleSheets = (data: FormSubmissionData) => ({
  timestamp: new Date(data.timestamp),
  firstName: data.firstName,
  lastName: data.lastName,
  workEmail: data.workEmail,
  company: data.company,
  role: data.role,
  teamSize: data.teamSize,
  objectives: data.objectives,
  source: data.source
});