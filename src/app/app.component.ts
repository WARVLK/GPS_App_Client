import { Component, Injectable, OnInit } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

export const OAuthConfig: AuthConfig = {
  issuer: 'https://www.strava.com/api/v3/oauth/authorize',
  loginUrl: 'https://www.strava.com/api/v3/oauth/authorize',
  oidc: false,
  redirectUri: window.location.origin + "/login",
  clientId: '50927',
  responseType: 'code',
  scope: 'activity:write,read',
  tokenEndpoint: 'https://www.strava.com/api/v3/oauth/token',
  customQueryParams: {approval_prompt:'auto'}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit{

  constructor(private oAuthService: OAuthService){}
  ngOnInit(): void {
  }

  Onclick(){
    this.oAuthService.configure(OAuthConfig);
    this.oAuthService.initImplicitFlow();
  }
  
  title = 'Client';
}
