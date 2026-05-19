export type AppId = string;
export type WorkspaceEnv = 'development' | 'test' | 'production';

export interface AppMetadata {
  name: string;
  version: string;
  environment: WorkspaceEnv;
}

export function describeApp(metadata: AppMetadata): string {
  return `${metadata.name}@${metadata.version} (${metadata.environment})`;
}
