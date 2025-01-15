# Turborepo Shadcn, Prisma, and Recoil Starter

This repository is a monorepo setup using Turborepo, designed to streamline the development of modern web applications. It includes a Next.js application, a shared UI component library, and a database layer using Prisma. The project is configured with TypeScript, ESLint, Prettier, and Tailwind CSS for a robust development experience.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Utilities](#utilities)
- [Remote Caching](#remote-caching)
- [Useful Links](#useful-links)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/UmangDalvadi/turborepo-prisma-shadcn-starter
cd turborepo-prisma-shadcn-starter
yarn install
```

### Development

To start the development server for all apps and packages, run:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

To build all apps and packages, run:

```bash
yarn build
```

## Project Structure

This Turborepo includes the following packages/apps:

### Apps and Packages

- **`apps/web`**: A Next.js application.
- **`packages/ui`**: A shared React component library using Shadcn.
- **`packages/db`**: A Prisma-based database layer.
- **`packages/store`**: A state management library using Recoil.
- **`packages/eslint-config`**: Shared ESLint configurations.
- **`packages/typescript-config`**: Shared TypeScript configurations.

## Scripts

Each package/app has its own set of scripts defined in their respective `package.json` files. Here are some common scripts:

- **`yarn dev`**: Start the development server.
- **`yarn build`**: Build the application for production.
- **`yarn lint`**: Run ESLint to check for code quality issues.
- **`yarn format`**: Format code using Prettier.
- **`yarn db:migrate:deploy`**: Deploy database migrations using Prisma.

## Configuration

### TypeScript

The project uses a shared TypeScript configuration located in `packages/typescript-config`.

### ESLint

ESLint configurations are shared across the monorepo and can be found in `packages/eslint-config`.

### Tailwind CSS

Tailwind CSS is configured in `packages/ui` and is used across the project for styling.

## Utilities

This Turborepo setup includes:

- **TypeScript** for static type checking.
- **ESLint** for code linting.
- **Prettier** for code formatting.
- **Turborepo** for managing monorepo tasks and caching.

## Remote Caching

Turborepo supports remote caching to share build artifacts across machines. To enable remote caching, authenticate with Vercel:

```bash
npx turbo login
npx turbo link
```

## Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Recoil Documentation](https://recoiljs.org/docs/introduction/installation)
- [Shadcn Documentation](https://ui.shadcn.com/docs)

## License

This project is licensed under the MIT License.