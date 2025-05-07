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
import { gql, useQuery } from '@apollo/client';
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

All endpoints
```bash
// Example of fetching all
const GET_TAX_RETURNS = gql`
  query GetAllTaxReturns {
    taxReturns {
      id
      userUuid
      createdAt
      updatedAt
      revenues {
        id
        type
        description
        currency
        value
        createdAt
        updatedAt
      }
      assets {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
      debts {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
    }
  }
`;
const { loading, error, data } = useQuery(GET_TAX_RETURNS);

// Example of fetching a specific tax return by ID
const GET_TAX_RETURN_BY_ID = gql`
  query GetTaxReturnById($id: Int!) {
    taxReturn(id: $id) {
      id
      userUuid
      createdAt
      updatedAt
      revenues {
        id
        type
        description
        currency
        value
        createdAt
        updatedAt
      }
      assets {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
      debts {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
    }
  }
`;

// Usage in a component
const { loading, error, data } = useQuery(GET_TAX_RETURN_BY_ID, {
  variables: { id: taxReturnId },
});
const taxReturn = data?.taxReturn;

// Example of creating a new tax return
const CREATE_TAX_RETURN = gql`
  mutation CreateTaxReturn($input: CreateTaxReturnDto!) {
    createTaxReturn(input: $input) {
      id
      userUuid
      revenues {
        id
        type
        description
        currency
        value
      }
      assets {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
      debts {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
    }
  }
`;

// Usage in a component
const [createTaxReturn, { data, loading, error }] = useMutation(CREATE_TAX_RETURN);

// Function to handle form submission
const handleSubmit = (formData) => {
  createTaxReturn({
    variables: {
      input: {
        revenues: [
          {
            type: "SALARY_AND_PAYMENTS",
            description: "Monthly salary",
            currency: "ISK",
            value: 500000
          },
          {
            type: "VEHICLE_ALLOWANCE",
            description: "Car allowance",
            currency: "ISK",
            value: 50000
          }
        ],
        assets: [
          {
            type: "REAL_ESTATE",
            description: [
              {
                title: "Property Address",
                title_value: "123 Main St",
                index: 1,
                currency: "ISK",
                value: 1000000
              },
              {
                title: "Property Size",
                title_value: "150 sqm",
                index: 2,
                currency: "ISK",
                value: 500000
              }
            ]
          },
          {
            type: "CARS",
            description: [
              {
                title: "Car Model",
                title_value: "Toyota Camry",
                index: 1,
                currency: "ISK",
                value: 3000000
              }
            ]
          }
        ],
        debts: [
          {
            type: "INTEREST_EXPENSES",
            description: [
              {
                title: "Purchase year",
                title_value: "2021",
                index: 1
              },
              {
                title: "Total payments for the year",
                index: 2,
                currency: "ISK",
                value: 100000
              }
            ]
          }
        ]
      }
    }
  });
};

// In your component
if (loading) return 'Submitting...';
if (error) return `Submission error! ${error.message}`;

// Example of updating an existing tax return
const UPDATE_TAX_RETURN = gql`
  mutation UpdateTaxReturn($id: ID!, $input: UpdateTaxReturnDto!) {
    updateTaxReturn(id: $id, input: $input) {
      id
      userUuid
      revenues {
        id
        type
        description
        currency
        value
      }
      assets {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
      debts {
        id
        type
        description {
          title
          title_value
          index
          currency
          value
        }
      }
    }
  }
`;

// Usage in a component
const [updateTaxReturn, { data, loading, error }] = useMutation(UPDATE_TAX_RETURN);

// Function to handle form submission for update
const handleUpdate = (formData) => {
  updateTaxReturn({
    variables: {
      id: "3",
      input: {
        createRevenues: [
          {
            type: "PENSION_PAYMENTS",
            description: "Pension contribution",
            currency: "ISK",
            value: 75000
          }
        ],
        updateRevenues: [
          {
            id: 2,
            type: "PENSION_PAYMENTS",
            value: 350000,
            description: "Updated monthly salary"
          }
        ],
        deleteRevenueIds: [12],
        createAssets: [
          {
            type: "REAL_ESTATE",
            description: [
              {
                title: "New Property",
                title_value: "456 Oak St",
                index: 1,
                currency: "ISK",
                value: 2000000
              }
            ]
          }
        ],
        updateAssets: [
          {
            id: 13,
            type: "REAL_ESTATE",
            description: [
              {
                title: "Updated Property",
                title_value: "789 Pine St",
                index: 2,
                currency: "ISK",
                value: 1500000
              }
            ]
          }
        ],
        deleteAssetIds: [14],
        createDebts: [
          {
            type: "INTEREST_EXPENSES",
            description: [
              {
                title: "New Property",
                title_value: "456 Oak St",
                index: 1,
                currency: "ISK",
                value: 2000000
              }
            ]
          }
        ],
        updateDebts: [
          {
            id: 13,
            type: "INTEREST_EXPENSES",
            description: [
              {
                title: "Updated Property",
                title_value: "789 Pine St",
                index: 2,
                currency: "ISK",
                value: 1500000
              }
            ]
          }
        ],
        deleteDebtIds: [6]
      }
    }
  });
};

// In your component
if (loading) return 'Updating...';
if (error) return `Update error! ${error.message}`;

// Example of deleting a tax return
const DELETE_TAX_RETURN = gql`
  mutation DeleteTaxReturn($id: ID!) {
    removeTaxReturn(id: $id)
  }
`;

// Usage in a component
const [deleteTaxReturn, { data, loading, error }] = useMutation(DELETE_TAX_RETURN);

// Function to handle tax return deletion
const handleDelete = (taxReturnId) => {
  deleteTaxReturn({
    variables: {
      id: taxReturnId
    }
  });
};
```
