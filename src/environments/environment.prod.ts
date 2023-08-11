export const environment = {
  production: true,
  url: '${OPENSHIFT_URL}',
  urlKeycloak: '${OPENSHIFT_SSO_URL}',
  realm: '${OPENSHIFT_SSO_REALM}',
  client: '${OPENSHIFT_SSO_CLIENT}'
}
