import { Component, OnInit } from '@angular/core';
import { BackEndApiService } from '../service/back-end-api.service';
import Keycloak from 'keycloak-js';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const clientId = environment.client;
const urlKeycloak = environment.urlKeycloak;
const realm = environment.realm;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authUser = "";
  data: any[] = [];

  constructor(private backendapi: BackEndApiService, private router: Router) {}

  ngOnInit(): void {

    const keycloakConfig = {
      url: urlKeycloak,
      realm: realm,
      clientId: clientId
    };

    const keycloak = new Keycloak(keycloakConfig);
  
    keycloak.init({ onLoad: "login-required" })
      .then((authenticated) => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        } else {
          console.log("Authenticated");
        }
        if (keycloak.token) {
          this.parseToken(keycloak.token);
          sessionStorage.setItem("authKey", keycloak.token);
        }
      })
      .catch((error) => {
        console.error("Authentication failed due to:\n", error);
      });
   
    this.backendapi.getData().subscribe((data: any[]) => {
      this.data = data;
    });

  }

  parseToken(token: string | null) {
    if (!token) {
      return null;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const authObject = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    this.authUser = JSON.parse(authObject).name;
  
    return this.authUser;
  }

}