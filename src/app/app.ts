/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {Home} from './home/home';
var kendo = require('../assets/js/kendo.all.min');

/*
 * App Component
 * Top Level Component
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  providers: [...FORM_PROVIDERS],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('../assets/css/kendo.common.min.css'), require('../assets/css/kendo.default.min.css')],
  template: `
    <kendo-dropdownlist [options]='dropDownListOptions' data-text-field='text' data-value-field='value' style='text-align: left;'></kendo-dropdownlist>
    <kendo-grid [options]='gridOptions' ></kendo-grid>
    
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';


  colors = [
    { text: "Black", value: 1 },
    { text: "Orange", value: 2 },
    { text: "Grey", value: 3 }
  ];


  gridOptions = {
    dataSource: [
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" },
      { productName: "Tea", category: "Beverages" },
      { productName: "Coffee", category: "Beverages" },
      { productName: "Ham", category: "Food" },
      { productName: "Bread", category: "Food" }
    ],
    sortable: true,
    selectable: true,
    columns: [
      { field: "productName", title: "Product Name", filterable: true },
      { field: "category", title: "Category" }
    ],
    pageable: {
      pageSize: 5
    },
    filterable: {
      messages: {
        and: "and",
        or: "or",
        filter: "Apply filter",
        clear: "Clear filter"
      }
    }
  };

  dropDownListOptions: {
    dataSource: Array<Object>
  };

  constructor() {
    this.dropDownListOptions = {
      dataSource: this.colors
    }
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
