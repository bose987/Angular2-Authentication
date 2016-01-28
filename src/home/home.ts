// Angular
import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Router, RouterLink } from 'angular2/router';
// common


let homeTemplate = require('./home.html');

@Component({
    selector: 'home'
})

@View({
	directives: [CORE_DIRECTIVES, RouterLink ],
	template: homeTemplate
})

export class Home{
	token: string;
	client: string;
	response: string;
	api: string;

	constructor(public router: Router, public http: Http ) {
	  this.token = localStorage.getItem('token');
	  this.client = localStorage.getItem('client');
	  
	}

	logout() {
	  localStorage.removeItem('token');
	  localStorage.removeItem('client');
	  this.router.parent.navigateByUrl('/login');
	}

}