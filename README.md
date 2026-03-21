# Shiv Shankar Mishra — Portfolio

Personal portfolio site: content in [`src/content/portfolio.json`](src/content/portfolio.json), UI under [`src/components/portfolio/`](src/components/portfolio/).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (email)

Submissions are handled by [`src/app/api/contact/route.js`](src/app/api/contact/route.js) using **Nodemailer** and your SMTP provider (e.g. Gmail with an [App Password](https://support.google.com/accounts/answer/185833), or a transactional SMTP service).

1. Copy [`.env.example`](.env.example) to `.env.local` and fill in `MAIL_*` values.
2. Optionally set `contact.form.emailSubject` in `portfolio.json` (used as the email subject prefix).

Without valid mail env vars, the API responds with `503` and the UI shows the configured error message.

## Resume

Place your PDF at [`public/resume.pdf`](public/resume.pdf) and set `hero.resumePath` in `portfolio.json` (default `/resume.pdf`).

## Deploy on Vercel

Import the repo in [Vercel](https://vercel.com). Add the same `MAIL_*` variables under **Project → Settings → Environment Variables**. No extra config file is required for a standard Next.js app.

## Build

```bash
npm run build
npm start
```
