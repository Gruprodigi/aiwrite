# Express + React Full-Stack Application

## Overview
This is a full-stack web application built with Express.js backend and React frontend using Vite. It uses PostgreSQL for data storage with Drizzle ORM.

## Project Structure
```
/
├── client/           # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # UI components (Radix UI, shadcn/ui)
│   │   ├── pages/       # Application pages (admin, auth, payment, user)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   └── App.tsx      # Main application component
│   └── public/       # Static assets
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API routes
│   ├── storage.ts    # Data storage layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle ORM schema
└── script/           # Build scripts
```

## Tech Stack
- **Frontend**: React 19, Vite, TailwindCSS 4, Radix UI, Tanstack React Query
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with passport-local
- **Styling**: TailwindCSS, shadcn/ui components

## Development
The development server runs both frontend and backend on port 5000:
```bash
npm run dev
```

## Database
Push schema changes to the database:
```bash
npm run db:push
```

## Build & Production
Build the application:
```bash
npm run build
```

Start in production mode:
```bash
npm run start
```

## Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (auto-configured by Replit)
- `NODE_ENV`: Environment mode (development/production)

## Admin Features
### 🖼️ Media Library (/admin/media)
- Grid view of uploaded media files
- Upload new images/documents
- Filter by file type (image, video, document) and date
- View, edit, and delete media files

### 📋 Email Templates (/admin/templates)
- Create, edit, and manage email templates
- Rich HTML editor with dynamic variable support
- Variables like {{name}}, {{email}} for dynamic content
- Duplicate templates for reuse
- Template versioning

### 🗣️ Languages (/admin/languages)
- Manage supported languages (pt-BR, en-US, es-ES, etc)
- Enable/disable languages
- Set default language
- Manage translation strings by context (UI, Email, Error)
- Language configuration with native names

## Database Schema
- **media**: Stores uploaded files metadata
- **email_templates**: Email templates with HTML content and variables
- **languages**: Supported languages configuration
- **language_strings**: Translation strings with context and language references

## Settings Pages (/admin/settings)
- **Geral**: Nome do site, logo, descrição, informações de contato
- **SEO**: Title padrão, meta description, configuração de robots.txt
- **Email**: SMTP config, testes de email
- **Pagamentos**: Stripe, PayPal, PIX, limites de transação
- **IA**: Config de IA, seleção de modelo, limites de tokens
- **Aparência**: Cores, fontes, temas (claro/escuro/sistema)
- **Avançado**: Cache, modo manutenção, debug, rate limiting, ferramentas de sistema

## User Pages
- **Documents** (`/user/documents`): View, manage, and organize all created documents with search and filters
- **Subscription** (`/user/subscription`): 
  - Visão Geral: Current plan details, features, billing info, and payment method
  - Realizar Pagamento: Choose payment method (Stripe, PIX, PayPal) and process transactions
  - Histórico: Track all payment history with search and download receipts

## Admin Payment Configuration
- **Payment Gateways** (`/admin/settings/payment`): Configure Stripe, PayPal, and PIX for the SaaS platform
  - Stripe: Card payments with API keys configuration
  - PayPal: PayPal account integration
  - PIX: Brazilian instant transfer system
- **Payment History** (`/admin/settings/payment-history`): View all platform transactions and revenue

## Recent Changes
- December 25, 2025: Initial import and setup for Replit environment
- December 25, 2025: Added Media Library, Email Templates, and Languages management sections
- December 25, 2025: Added 7 comprehensive Settings pages (General, SEO, Email, Payments, AI, Appearance, Advanced)
- December 25, 2025: Reorganized payment pages - moved /user/payment and /user/payment-history to user section
- December 25, 2025: Created /admin/settings/payment as Payment Gateways configuration for SaaS platform
- December 25, 2025: Created /user/documents page with full document management
- December 25, 2025: Created /user/subscription page with 3 tabs (Overview, Payment, History) and complete sidebar navigation
