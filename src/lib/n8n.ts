export async function sendLeadToN8N(leadData: any) {
    const API_URL = '/api/leads';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData),
        });

        if (!response.ok) {
            throw new Error(`Failed to send lead: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending lead to n8n:', error);
        throw error;
    }
}
