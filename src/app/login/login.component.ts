import { Component, OnInit } from '@angular/core';
import Keycloak from 'keycloak-js';
import { environment } from 'src/environments/environment.prod';

const clientId = environment.client;
const urlKeycloak = environment.urlKeycloak;
const realm = environment.realm;
const prueba = environment.prueba;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

  authenticateLogin() {
    const keycloakConfig = {
      url: urlKeycloak,
      realm: realm,
      clientId: clientId,
      prueba:prueba
    };

    console.log(prueba)

    const keycloak = new Keycloak(keycloakConfig);
    
    keycloak.init({ onLoad: "login-required", redirectUri: window.location.origin + "/home" })
      .then((authenticated) => {
        if (!authenticated) {
          window.location.reload();
        } else {
          console.log("Authenticated");
        }

      })
      .catch((error) => {
        console.error("Authentication failed due to:\n", error);
      });
  }

}
