import { type AppMetadata } from '@projectname/app-types';
import { createAuthSession } from '@projectname/auth';
import { isNonEmptyString } from '@projectname/utils';

const metadata: AppMetadata = {
  name: 'micro-service',
  version: '0.0.0',
  environment: 'development',
};

const session = createAuthSession('processor-user', ['worker']);

console.log('[micro-service] service booted');
console.log('[micro-service] metadata', metadata);
console.log('[micro-service] session user', session.userId);
console.log('[micro-service] input valid', isNonEmptyString('job payload'));
