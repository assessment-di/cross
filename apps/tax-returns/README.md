## Overall info

## Frontend (web folder)

Overall technology stack is limited to `react`, `react-intl`, `@island.is` design system parts and `react-router-dom`

The reason of a simplicity is following: during the first iteration we need to deliver the best possible UX and move fast. 
As soon as we get more user feedback and some more requirements (like SSR support), we can easily migrate to NextJS

### Useful scripts

In order to run:

```
nx serve tax-returns-web
```

In order to build:

```
nx build tax-returns-web
```

_artifacts are created in `dist/apps/tax-returns/web`_ (something like `npx http-server dist/apps/tax-returns/web` to test prod build)




```bash
yarn start air-discount-scheme-web
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

4. Example of usages graphql api from front-end perspective (note: this section will be deleted)


For Frontend Setup (using GraphQL Code Generator):
   Create a codegen.yml in your frontend project:
```bash
schema: http://localhost:3000/graphql
documents: 'src/**/*.tsx'
generates:
  src/generated/graphql.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
```
Then in your frontend project:
```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```
Add a script to package.json:
```bash
{
  "scripts": {
    "generate": "graphql-codegen"
  }
}
```
Using with Apollo Client
```bash
import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});
```
The schema file at /schema/schema.gql will contain all your:
* Types
* Queries
* Mutations
* Enums


Example of usage:
```bash
mport { gql, useQuery } from '@apollo/client';
// Define your query
const GET_TAX_RETURNS = gql`
  query GetTaxReturns {
    taxReturns {
      id
      userUuid
      revenues {
        id
        type
        value
        currency
      }
    }
  }
`;
// Use it in your component
function TaxReturnsList() {
  const { loading, error, data } = useQuery(GET_TAX_RETURNS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul>
      {data.taxReturns.map(taxReturn => (
        <li key={taxReturn.id}>
          User: {taxReturn.userUuid}
          Revenues: {taxReturn.revenues.length}
        </li>
      ))}
    </ul>
  );
}
```
