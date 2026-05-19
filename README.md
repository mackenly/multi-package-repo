# multi-package-repo

Workspace example with three top-level services and shared TypeScript packages.

## Layout

- `frontend/` - frontend service
- `backend/` - backend service
- `micro-service/` - background processing service
- `packages/app-types/` - shared application types and contracts
- `packages/auth/` - shared auth helpers
- `packages/utils/` - shared utility helpers

## Local development

Requires Docker and Node.js.

Run `npm run dev` to build the Docker images and start the services and `npm run down` to stop them. If desired, `npm run build --workspaces --if-present` to compile the workspace packages locally.