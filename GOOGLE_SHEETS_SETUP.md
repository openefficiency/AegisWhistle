# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the Aegis AI Pilot Waitlist form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Aegis AI Pilot Waitlist"
4. Set up the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Work Email`
   - E1: `Company`
   - F1: `Role`
   - G1: `Team Size`
   - H1: `Objectives`
   - I1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),
      data.firstName,
      data.lastName,
      data.workEmail,
      data.company,
      data.role,
      data.teamSize,
      data.objectives,
      data.source
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Aegis AI Pilot Waitlist API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project "Aegis AI Waitlist API"

## Step 3: Deploy the Script

1. Click the `Deploy` button (top right)
2. Choose `New deployment`
3. Click the gear icon next to "Type" and select `Web app`
4. Configure the deployment:
   - **Description**: "Aegis AI Pilot Waitlist Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click `Deploy`
6. **Important**: Copy the Web app URL that appears
7. Click `Done`

## Step 4: Update Your React Component

1. Open `src/components/PilotWaitlistModal.tsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with the actual URL you copied from step 3

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If it doesn't work, check the Apps Script logs:
   - Go back to Apps Script
   - Click `Executions` in the left sidebar
   - Look for any error messages

## Alternative: Simple Form Services

If Google Apps Script seems too complex, here are simpler alternatives:

### Option 1: Formspree (Recommended)
1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Replace the `GOOGLE_SCRIPT_URL` with your Formspree endpoint
5. Formspree will email you submissions and can integrate with Google Sheets

### Option 2: Netlify Forms
1. Add `data-netlify="true"` to your form element
2. Netlify will automatically capture form submissions
3. View submissions in your Netlify dashboard

### Option 3: Airtable
1. Create an Airtable base
2. Use Airtable's API to submit form data
3. More user-friendly interface than Google Sheets

## Security Considerations

- The Google Apps Script method uses CORS mode 'no-cors' for security
- Consider adding email validation and spam protection
- For production, implement rate limiting
- Store sensitive data securely

## Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Verify the Google Apps Script URL is correct
- Make sure the script is deployed with "Anyone" access

**Data not appearing in sheets?**
- Check Apps Script execution logs
- Verify column headers match exactly
- Test the script URL directly in browser

**CORS errors?**
- Make sure you're using `mode: 'no-cors'` in the fetch request
- Google Apps Script requires this setting

## Next Steps

Once set up, you can:
- Add email notifications when new submissions arrive
- Create automated responses to applicants
- Set up data validation and filtering
- Export data for further analysis

Need help? Check the Google Apps Script documentation or reach out for support.