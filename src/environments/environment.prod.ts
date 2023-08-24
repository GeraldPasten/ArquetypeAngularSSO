// export const environment = {
//   production: true,
//   url: 'https://baseservice-quarkus-gateway-sso1-sso-example.apps.cluster-h7psk.h7psk.sandbox2742.opentlc.com/gateway/rest',
//   urlKeycloak: 'https://keycloak-work-space.apps.cluster-r294n.r294n.sandbox92.opentlc.com/auth',
//   realm: 'front',
//   client: 'frontend'
// }

export const environment = {
  production: true,
  url:'https://baseservice-quarkus-gateway-sso1-sso-example.apps.cluster-h7psk.h7psk.sandbox2742.opentlc.com/gateway/rest',
  urlKeycloak: 'https://keycloak-work-space.apps.cluster-r294n.r294n.sandbox92.opentlc.com/auth',
  realm: 'front',
  client: 'frontend',
  prueba: process.env['VARIABLE1'] ?? 'a'
}
