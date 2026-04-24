export interface LeadPayload {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  area?: string;
  message: string;
}

export interface LeadResponse {
  ok: boolean;
  id: string;
  receivedAt: string;
}

/**
 * Mock API — substitua por fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })
 * quando houver backend (Vercel Serverless, etc.).
 */
export async function submitLead(data: LeadPayload): Promise<LeadResponse> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!data.email?.includes('@')) {
    throw new Error('Invalid email');
  }

  return {
    ok: true,
    id: `nx-${typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : Date.now().toString(36)}`,
    receivedAt: new Date().toISOString(),
  };
}
