// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://baseservice-quarkus-gateway-sso1-sso-example.apps.cluster-h7psk.h7psk.sandbox2742.opentlc.com/gateway/rest',
  urlKeycloak: 'https://keycloak-sso-example.apps.cluster-h7psk.h7psk.sandbox2742.opentlc.com/auth',
  realm: 'front',
  client: 'frontend'
};

// export const environment = {
//   production: false,
//   url: process.env.OPENSHIFT_URL,
//   urlKeycloak: process.env.OPENSHIFT_SSO_URL,
//   realm: process.env.OPENSHIFT_SSO_REALM,
//   client: process.env.OPENSHIFT_SSO_CLIENT
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
