import {Injectable, bind} from "angular2/core"
import {UserModel} from "./user-model"
import { Http } from 'angular2/http';
import { contentHeaders } from '../common/http-headers';
import { Router, RouterLink } from 'angular2/router';

@Injectable()

export class LoginService{
	http: Http;

	constructor( public http:Http, public router: Router ) {
	}

	connect(email:string, password:string ) {
		
		let body = JSON.stringify({ email, password});
		 
		this.http.post('http://localhost:3000/auth/sign_in', body, { headers: contentHeaders })
		.subscribe(
		    response => {
		    	localStorage.setItem('token', response.json().access_token['access-token'] );
		     	localStorage.setItem('client', response.json().access_token['client'] );
		     	localStorage.setItem('email', response.json().data['email'] );
		     	localStorage.setItem('role', response.json().data['role'] );
		     	localStorage.setItem('name', response.json().data['name'] );
		     	

			    this.router.parent.navigateByUrl('/home');
		    },
		    error => {
		    	console.log(error);
		    },
			() => console.log('completed')
		);
		
	}

}