export const environment = {
  production: true,
  url: process.env['URL_GATEWAY'] || "a",
  urlKeycloak: process.env['SSO_KEYCLOAK'] || "a" ,
  realm: process.env['SSO_REALM'] || "a",
  client:  process.env['SSO_CLIENT'] || "a",
  prueba: process.env['VARIABLE1'] || "a"
}

