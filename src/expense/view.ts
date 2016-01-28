// Angular
import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { ExpenseService } from '../services/expense-service';

// common

let viewTemplate = require('./view.html');

@Component({
    selector: 'expense-view',
	providers: [ExpenseService]
})

@View({
	directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
    template: viewTemplate
})

export class ExpenseView {
	arrjsonData: any;
	
	constructor( public expenseService: ExpenseService ) {
		expenseService.getExpenses().map(r => r.json())
		.subscribe( response => {
		    this.arrjsonData = response;
		});
	}

}