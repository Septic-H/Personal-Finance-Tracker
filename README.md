# Personal Finance Tracker

A personal finance tracker application built with NestJS, GraphQL, and MongoDB.

## Project Structure
.
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── README.md
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── transactions/
│   │   ├── dto/
│   │   │   └── create-transaction.input.ts
│   │   ├── entities/
│   │   │   └── transaction.entity.ts
│   │   ├── transactions.module.ts
│   │   ├── transactions.resolver.spec.ts
│   │   ├── transactions.resolver.ts
│   │   ├── transactions.service.spec.ts
│   │   └── transactions.service.ts
│   └── users/
│       ├── dto/
│       │   └── create-user.input.ts
│       ├── entities/
│       │   └── user.entity.ts
│       ├── users.module.ts
│       ├── users.resolver.spec.ts
│       ├── users.resolver.ts
│       ├── users.service.spec.ts
│       └── users.service.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/personal-finance-tracker.git
cd personal-finance-tracker
```

2. Install the dependencies:
```bash
yarn install
```

## Running the Application

### Development Mode
```bash
yarn run start
```

### Watch Mode
```bash
yarn run start:dev
```
