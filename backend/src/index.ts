import { type AppMetadata } from '@projectname/app-types';
import { createAuthSession, isAuthenticated } from '@projectname/auth';
import { toTitleCase } from '@projectname/utils';

const metadata: AppMetadata = {
  name: 'backend',
  version: '0.0.0',
  environment: 'development',
};

const session = createAuthSession('backend-user', ['admin']);

console.log('[backend] service booted');
console.log('[backend] title', toTitleCase('backend shared import check'));
console.log('[backend] authenticated', isAuthenticated(metadata, session));
