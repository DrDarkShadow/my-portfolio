// serverless function for contact form
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: process.env.CONTACT_EMAIL || 'drdarkshadows@gmail.com',
                subject: `New Message from ${name}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
                        ${message}
                    </blockquote>
                `
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Resend API Error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }

        const data = await response.json();
        return res.status(200).json({ success: true, id: data.id });
    } catch (error) {
        console.error('Handler Error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
}
