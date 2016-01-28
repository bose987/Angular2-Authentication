import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { AuthConfig, AuthHttp } from './common/angular2-auth';

import { App } from './app/app';

bootstrap(
  App,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'token',
          headerName: 'access-token',
          authHeaders: [ 
              ['access-token', localStorage.getItem( 'token' )],
              ['client', localStorage.getItem( 'client' )],
              ['uid', localStorage.getItem( 'email' )],
              // ['withCredentials', 'true'],
              ['Accept', 'application/json'],
              ['Content-Type', 'application/json' ]
          ]
        }), http);
      },
      deps: [Http]
    })
  ]
);
