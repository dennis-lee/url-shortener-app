# url-shortener-app

Frontend Next.js app for url-shortener-api. Current production setup is a Vercel deployment on

```
https://url-shortener-app-seven.vercel.app/
```

NOTE: To test, mixed/insecure content has to be allowed for the domain above as the app currently points to a non-HTTPS API server.

Steps to allow insecure content for Chrome:

1. Click the lock icon in the left side of the address bar.
2. Select "Site Settings."
3. Under "Insecure content", choose "Allow".

## Local development

1. Rename `.env.example` to `.env`
2. npm ci
3. npm run dev
