# reporte.me - AI

## ChatPanel

### Description

ChatPanel is a Next.js application that serves as a panel for creating and managing profiles of individuals, whether they be celebrities or ordinary people. The application allows users to input information such as name, description, category, instructions, and an example conversation for each profile. The data is captured and stored in a Prismajs database hosted on Planetscale.

### Features

- Create profiles with name, description, category, instructions, and example conversation.
- Store profile data in a Prismajs database on Planetscale.
- Implement a chat feature using Pinecone, Langchain, Replicate, and ChatGPT to simulate conversations with the created profiles.
- Utilize Redis on Upstash for additional data storage.
- Authenticate users with Clerk.

### Technologies Used

- Next.js
- Prismajs
- Pinecone
- Langchain
- Replicate
- ChatGPT
- Redis (Upstash)
- Clerk
- Cloudinary (Upload)
- Stripe (Payment Gateway)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/JonatasMSantos/ai.reporte.me.git
   ```
2. Install dependencies:
    ```bash
    cd ai.reporte.me
    npm install
   ```
3. Configure environment variables:
    ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

    OPENAI_API_KEY=
    REPLICATE_API_TOKEN=

    PINECONE_API_KEY=
    PINECONE_ENVIRONMENT=
    PINECONE_INDEX=

    UPSTASH_REDIS_REST_URL=
    UPSTASH_REDIS_REST_TOKEN=

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

    DATABASE_URL=

    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=

    NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```
4. Run the application:
   ```bash
   npm run dev
   ```
### Usage

1. Visit the application in your web browser.
2. Create a new profile by filling in the required fields.
3. Explore the chat feature that simulates conversations based on the profile information.
4. Manage and edit profiles as needed.
5. Contributions

### License
This project is licensed under the MIT License.

### Acknowledgments
The developers of Next.js, Prismajs, Pinecone, Langchain, Replicate, ChatGPT, Redis, and Clerk for providing the tools and services used in this project.
The open-source community for their valuable contributions.