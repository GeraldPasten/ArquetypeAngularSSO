import { EnvironmentPlugin } from 'webpack'

	module.exports = {
	  plugins: [ 
	    new EnvironmentPlugin(['VARIABLE1','URL_GATEWAY','SSO_KEYCLOAK','SSO_REALM','SSO_CLIENT']) 
	  ],
	};