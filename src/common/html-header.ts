import {View, Component} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';



let headerTemplate = require('./html-header.html');

@Component({
	selector: 'app-header'
})

@View({
	template: headerTemplate,
	directives: [RouterLink]
})

export class HtmlHeader {
	token:string;
	client:string;
	email:string;
	role:string;
	name:string;

	constructor(public router:Router) {
		this.token = localStorage.getItem('token');
		this.client = localStorage.getItem('client');
		this.email = localStorage.getItem('email');
		this.role = localStorage.getItem('role');
		this.name = localStorage.getItem('name');
	}

	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('client');
		localStorage.removeItem('name');
		localStorage.removeItem('role');
		localStorage.removeItem('email');

		this.router.parent.navigateByUrl('/login');
	}
}
