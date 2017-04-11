// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  API?: string;
  ENV?: string;
}

export const Config: EnvConfig = {};//JSON.parse('');

export const SITE_HOST_URL: string = 'api/';

//export const SITE_HOST_URL: string = 'http://localhost:5000/';

