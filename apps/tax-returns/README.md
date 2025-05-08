## Overall info

## Frontend (web folder)

Overall technology stack is limited to `react`, `react-intl`, `@island.is` design system parts and `react-router-dom`

The reason of a simplicity is following: during the first iteration we need to deliver the best possible UX and move fast. 
As soon as we get more user feedback and some more requirements (like SSR support), we can easily migrate to NextJS

### Useful scripts

**In order to run dev mode:**
```
nx serve tax-returns-web
```

**In order to run e2e tests:**
```
nx e2e tax-returns-web
```
or
```
HEADLESS=false yarn nx e2e tax-returns-web
```

**In order to build:**
```
nx build tax-returns-web
```

_artifacts are created in `dist/apps/tax-returns/web`_ (something like `npx http-server dist/apps/tax-returns/web` to test prod build)

## API Testing

```bash
nx test tax-returns-api
```

## Development

To get started developing this project, go ahead and:


1. Place .env file into `api` and `backend` directories

```bash
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
```

2. Run migrations and seeders 

```bash
yarn nx run tax-returns-backend:db:migrate

yarn nx run tax-returns-backend:db:seed
```

3. Start the graphql api:

```bash
yarn nx run tax-returns-api:serve
```


