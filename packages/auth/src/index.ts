import type { AppMetadata } from '@projectname/app-types';

export interface AuthSession {
  userId: string;
  roles: string[];
  issuedAt: string;
}

export function createAuthSession(userId: string, roles: string[]): AuthSession {
  return {
    userId,
    roles,
    issuedAt: new Date().toISOString(),
  };
}

export function isAuthenticated(metadata: AppMetadata, session: AuthSession): boolean {
  return metadata.environment !== 'production' || session.roles.length > 0;
}
