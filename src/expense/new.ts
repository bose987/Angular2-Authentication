// Angular
import { Component, View } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
// common


let newTemplate = require('./new.html');

@Component({
    selector: 'expense-new'
})

@View({
  directives: [ RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: newTemplate
})

export class ExpenseNew{}