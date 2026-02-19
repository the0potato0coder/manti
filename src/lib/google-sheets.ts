import { google } from 'googleapis';

interface SheetCredentials {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

export async function appendToGoogleSheet(values: string[][]): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '';
  const projectId = process.env.GOOGLE_PROJECT_ID || '';

  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEETS_SPREADSHEET_ID not configured');
  }

  if (!serviceAccountEmail) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL not configured');
  }

  if (!projectId) {
    throw new Error('GOOGLE_PROJECT_ID not configured');
  }

  if (!privateKey) {
    throw new Error('GOOGLE_PRIVATE_KEY not configured');
  }

  if (privateKey.startsWith('AIza')) {
    throw new Error('GOOGLE_PRIVATE_KEY looks like an API key, not a service account key');
  }

  if (!privateKey.includes('BEGIN PRIVATE KEY') || !privateKey.includes('END PRIVATE KEY')) {
    throw new Error('GOOGLE_PRIVATE_KEY is missing the expected PEM markers');
  }

  // Construct credentials from environment variables
  const credentials: SheetCredentials = {
    type: 'service_account',
    project_id: projectId,
    private_key_id: '',
    private_key: privateKey.replace(/\\n/g, '\n'),
    client_email: serviceAccountEmail,
    client_id: '',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: '',
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log(
      `Appended ${response.data.updates?.updatedRows} rows to Google Sheet`
    );
    return response.data as any;
  } catch (error) {
    const errorWithResponse = error as {
      message?: string;
      response?: { status?: number; data?: unknown };
    };
    const status = errorWithResponse.response?.status;
    const data = errorWithResponse.response?.data;
    const detail = status ? ` (status ${status})` : '';
    const dataMessage = data ? ` ${JSON.stringify(data)}` : '';

    if (error instanceof Error) {
      throw new Error(`Failed to append to Google Sheet${detail}: ${error.message}${dataMessage}`);
    }
    throw error;
  }
}
