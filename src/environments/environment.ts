// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AM_URL: 'https://openam-rcook-demo3.forgeblocks.com/am',
  REALM_PATH: 'alpha',
  WEB_OAUTH_CLIENT: 'js-sdk',
  JOURNEY_LOGIN: 'Login',
  JOURNEY_REGISTER: 'Register',
  API_URL: 'https://sdkapp.example.com:8443',
  APP_URL: 'https://sdkapp.example.com:8443/callback'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
