export const environment = {
  production: true,
  url: process.env.OPENSHIFT_URL || 'a',
  urlKeycloak: process.env.OPENSHIFT_SSO_URL || 'a',
  realm: process.env.OPENSHIFT_SSO_REALM || 'a',
  client: process.env.OPENSHIFT_SSO_CLIENT || 'a'
}
