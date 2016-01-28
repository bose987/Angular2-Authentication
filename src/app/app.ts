// Angular
import {View, Component} from 'angular2/core';
import {Location, RouteConfig, Router} from 'angular2/router';
// Loggedinrouter
import {LoggedInRouterOutlet} from './LoggedInOutlet';
//common
import {HtmlHeader} from '../common/html-header';
// Components
import {Signup} from '../signup/signup';
import {Login} from '../login/login';
import {Home} from '../home/home';

// ActionItems
import {ActionItemsAll} from '../action-items/all';
import {ActionItemsPending} from '../action-items/pending';
// Expense
import {ExpenseView} from '../expense/view';
import {ExpenseNew} from '../expense/new';

let indexTemplate = require('./app.html');

@Component({
	selector: 'auth-app'
})


 @View({
 	template: indexTemplate,
  	directives: [ LoggedInRouterOutlet, HtmlHeader ]
 })

@RouteConfig([
	{ path: '/', redirectTo: ['/Home'] },
  	{ path: '/signup', component: Signup, as: 'Signup' },
  	{ path: '/login', component: Login, as: 'Login' },
  	{ path: '/home', component: Home, as: 'Home' },
  	{ path: '/action-items/all', component: ActionItemsAll, as: 'ActionItemsAll' },
  	{ path: '/action-items/pending', component: ActionItemsPending, as: 'ActionItemsPending' },
  	{ path: '/expense/view', component: ExpenseView, as: 'ExpenseView' },
  	{ path: '/expense/new', component: ExpenseNew, as: 'ExpenseNew' },
])


export class App {

  constructor(public router: Router) {}
}