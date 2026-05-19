import { type AppMetadata } from '@projectname/app-types';
import { createAuthSession } from '@projectname/auth';
import { isNonEmptyString, toTitleCase } from '@projectname/utils';

const metadata: AppMetadata = {
  name: 'frontend',
  version: '0.0.0',
  environment: 'development',
};

const session = createAuthSession('frontend-user', ['viewer']);

console.log('[frontend] service booted');
console.log('[frontend] metadata', metadata);
console.log('[frontend] session', session);
console.log('[frontend] title', toTitleCase('shared package check'));
console.log('[frontend] string check', isNonEmptyString('workspace ready'));
