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
   async getUsers(){
  const loading = await this.loadingController.create({
    content: 'Loading'
  });
  await loading.present();
  await this.restApi.getUsers()
    .subscribe(res => {
      console.log(res);
      this.users = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
}
ngOnInit(){
  this.getUsers();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }
  goToHome(){
  	this.navCtrl.push(ListPage);
  }

}
