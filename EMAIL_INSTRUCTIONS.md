Using Formspree (frontend-only) to send form emails

1) Quick option (no code change):
   - Sign up at https://formspree.io
   - Create a new form and get the form ID (looks like `mxknpkwr`)
   - In `script.js` replace `YOUR_FORMSPREE_FORM_ID` with that form id.
   - The form will POST to Formspree and emails will be forwarded to your inbox.

2) Fallback behavior:
   - The site no longer opens the user's mail client. Instead, the form requires a Formspree id to send messages directly.
   - If you leave the Formspree id unset, the form will show an instruction message and will not open an email client.

3) Testing locally:
   - You can test by replacing `FORM_ID` and submitting the form. Formspree shows test messages in their dashboard.

4) Privacy/security:
   - This method does not require a server, but emails are proxied through Formspree. For higher volume or advanced features consider a backend or transactional email provider (SendGrid, Mailgun).

5) Alternatives:
   - EmailJS (client-side SDK), or a small backend (Express + nodemailer) if you want more control.

If you want, I can configure the form for Formspree for you and test it (you'll need to paste the generated form id here).