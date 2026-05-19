FROM node:24-alpine AS base
WORKDIR /repo

FROM base AS deps
COPY package.json ./
COPY tsconfig.base.json ./
COPY micro-service/package.json micro-service/package.json
COPY micro-service/tsconfig.json micro-service/tsconfig.json
COPY micro-service/src micro-service/src
COPY packages/app-types/package.json packages/app-types/package.json
COPY packages/app-types/tsconfig.json packages/app-types/tsconfig.json
COPY packages/app-types/src packages/app-types/src
COPY packages/auth/package.json packages/auth/package.json
COPY packages/auth/tsconfig.json packages/auth/tsconfig.json
COPY packages/auth/src packages/auth/src
COPY packages/utils/package.json packages/utils/package.json
COPY packages/utils/tsconfig.json packages/utils/tsconfig.json
COPY packages/utils/src packages/utils/src
RUN npm install
RUN npm run build -w @projectname/app-types
RUN npm run build -w @projectname/auth
RUN npm run build -w @projectname/utils
RUN npm run build -w @projectname/micro-service

FROM node:24-alpine AS runner
WORKDIR /repo
COPY --from=deps /repo/package.json ./package.json
COPY --from=deps /repo/node_modules ./node_modules
COPY --from=deps /repo/micro-service ./micro-service
COPY --from=deps /repo/packages ./packages
CMD ["node", "micro-service/dist/index.js"]