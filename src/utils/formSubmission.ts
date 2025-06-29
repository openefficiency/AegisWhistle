// Alternative form submission utilities

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

// Google Sheets submission
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

// Formspree submission (alternative)
export const submitToFormspree = async (data: FormSubmissionData, formspreeUrl: string) => {
  try {
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Formspree submission failed');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Formspree submission error:', error);
    throw new Error('Failed to submit to Formspree');
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