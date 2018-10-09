import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import {ListPage} from '../list/list';
import * as $ from "jquery";
import { TweenMax, TimelineMax,Linear} from "gsap/TweenMax";
import  {User} from'../../providers/user.model';

import {RestProvider} from '../../providers/rest/rest';
@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {
  users : any;

  constructor( public navCtrl: NavController, public navParams: NavParams,public restApi : RestProvider,public loadingController:LoadingController ) {
  }

ngOnInit(){
  this.getUsers();
}
getUsers() {
    this.restApi.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }
  goToHome(){
    this.navCtrl.push(ListPage);
  }

}