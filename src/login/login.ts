// Angular
import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

// Service
import { LoginService } from '../services/login-service';

let loginTemplate = require('./login.html');

@Component({
    selector: 'login',
    providers: [LoginService]
})

@View({
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: loginTemplate
})

export class Login{
	constructor( public loginService: LoginService ) {
	}

	login(event, email, password ){
		event.preventDefault();

		this.loginService.connect( email, password );
	}
}