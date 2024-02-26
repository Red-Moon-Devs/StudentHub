# INSTALL PACKAGES
## Install all
```
npm install
OR
npm i
```

### Install Clerk
Simple and secure user authentication, complete with everything you need out-of-the-box to provide a secure experience for your users.

`npm install @clerk/nextjs`

### Install Clerk themes
`npm install @clerk/themes`

### Install UploadThing
UploadThing is the easiest way to add file uploads to your full stack TypeScript application.
Many services have tried to build a "better S3", but in our opinion, none found the right compromise of ownership, flexibility and safety.

`npm install uploadthing @uploadthing/react`

### Install Svix
Webhooks as a Service. Build a secure, reliable, and scalable webhook platform in minutes using the Svix webhook service.
Webhooks require a lot more engineering time, resources and ongoing maintenance than you would first expect.
Building a secure, reliable, and scalable webhook service is hard and time consuming. We built it so you can focus on what matters most, your business.
Svix makes sending webhooks easy and reliable by offering webhook sending as a service. With Svix you can start sending webhooks in minutes, while ensuring robust deliverability, and a great developer experience for your users.

`npm install svix`

### Install tailwindcss-animate

`npm install tailwindcss-animate`

# AUTHENTICATION WITH CLERK
### Create your Clerk account
Follow the link below to create your clerk account :

https://clerk.com/

After creating your account, create an application in clerk which will be linked to this project.

### Edit the .env.example file
Add the keys of your clerk application in the .env.example file.

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= *Your key*

CLERK_SECRET_KEY= *Your key*

### Rename .env.example file into .env.local
Finally change the name of the .env.example file into .env.local.

# EVENTUAL BUGS
## The connected account logo is not showing up
If the logo of the connected account is not showing up in the topbar component, please make sure to enable organizations in your clerk application.
