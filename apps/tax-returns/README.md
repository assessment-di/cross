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
