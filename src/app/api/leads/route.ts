import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const leadData = await request.json();
    const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'https://rais-fahad0032.app.n8n.cloud/webhook/webhook';

    try {
        console.log('Sending lead to n8n URL:', WEBHOOK_URL);
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        console.log('n8n Response Status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('n8n Error Response:', errorText);
            return NextResponse.json({ error: `n8n error: ${response.statusText}` }, { status: response.status });
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('CRITICAL: Error in leads API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
