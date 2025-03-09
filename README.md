# PawPals - Pet Sitter and Pet Owner Matching App

## Overview

PawPals is a web app built to connect pet owners with pet sitters. The application is inspired by Tinder and will allow both pet owners and pet sitters to swipe left or right on potential matches. This allows pet owners to browse through potential pet sitters and pet sitters to browse through potential pet-sitting listings.

PawPals is built using:

- **Turborepo**: For efficient monorepo management.
- **Next.js 14**: For the web application and marketing page.
- **React Native [Expo](https://expo.dev/)**: For the mobile/native application. (Currently not implemented)
- **[Convex](https://convex.dev)**: For backend services, database management, and server functions.
- **[Clerk](https://clerk.dev)**: For user authentication.

## Key Features

- **User Profiles**: Both pet owners and sitters can create and manage their profiles.
- **Browse and Match**: Both pet owners and sitters can browse through potential matches and click 'Like' to start a conversation.
- **In-App Messaging**: Both pet owners and sitters can send messages to potential matches to decide whether they want to proceed with a pet-sittingbooking.
- **Secure Authentication**: User authentication is handled securely through Clerk.

Future Features:

- **Verification Process**: Pet owners and sitters will be able to verify their identities to increase their trustworthiness.
- **Customized Browse and Match**: Pet owners and sitters will be able to customize their browse and match experience by filtering by location, pet type, and other criteria.
- **Booking Management**: Pet sitters can accept, decline, and manage bookings through the app.

## Setup Instructions

To get the PawPals project up and running, follow these steps:

### 1. Install Dependencies

Ensure you have `yarn` installed. If not, run:

```sh
npm install --global yarn
```

Then, install the project dependencies:

```sh
yarn
```

### 2. Configure Convex

Run the following command to set up Convex:

```sh
npm run setup --workspace packages/backend
```

This command will log you into Convex and prompt you to create a project. Follow these steps:

1. **Log into Convex**: After running the setup command, log into your Convex account or create a new account.
2. **Create a New Project**: Enter a name for your project and complete the setup.

### 3. Configure Clerk

To set up user authentication with Clerk:

1. **Create a Clerk Account**: Sign up at [Clerk's website](https://clerk.dev).
2. **Create a New Application**: Choose how you want your users to sign in.
3. **Create a JWT Template**: In the JWT Templates section of the Clerk dashboard tap on + New template and choose 'Convex'. Copy the Issuer URL from the Issuer input field. Hit Apply Changes.

### 4. Set Up Environment Variables

In your [Convex project dashboard > Settings > Environment Variables](https://dashboard.convex.dev/deployment/settings/environment-variables&var=CLERK_ISSUER_URL), add the following environment variable:

- `CLERK_ISSUER_URL`: The issuer URL from the [Clerk JWT Template](https://dashboard.clerk.com/last-active?path=jwt-templates).

### 5. Configure Both Apps

In each app directory (apps/web, apps/native) create a .env.local file using the .example.env as a template and fill out your Convex and Clerk environment variables.

- Use the CONVEX_URL from packages/backend/.env.local for {NEXT,EXPO}_PUBLIC_CONVEX_URL.
-The Clerk publishable & secret keys can be found [here](https://dashboard.clerk.com/last-active?path=api-keys).

### 6. Run Both Apps

To run both the web and mobile applications, execute in the root directory:

```sh
npm run dev
```

You can use the ⬆ and ⬇ keyboard keys to view logs for the Convex backend, web app, and mobile app separately.

## Notable Decisions

- I used this [base project](https://github.com/get-convex/turbo-expo-nextjs-clerk-convex-monorepo) as it was a good starting point for me to build a web app and possibly expand to a mobile app in the future.
- A lot of the frontend design was made on the go as I prioritized functionality for the POC, but I plan to design a consistent UI throughout the app.
- Currently, I plan to make the user experience different for pet owners and pet sitters. I prioritized completing the flow for pet sitters first as the frontend components should mostly be reusable for the pet owner flow.
- I deployed the web app using Vercel and here is the live link: [PawPals](https://pawpals-web.vercel.app/)