import { Component } from '@angular/core';

import { NavController,ModalController,Events } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {RegisterPage} from '../register/register';
import {MyApp} from '../../app/app.component'
import {QuestionPage} from '../question/question';
import {PlayerdetailPage} from '../playerdetail/playerdetail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	 bool = false ;
  constructor(public navCtrl: NavController , public modalCtrl : ModalController,public events : Events,public rest : RestProvider) {

  }
  openLogin(){
  	this.bool = !this.bool;
  }
  openRegisterModal(){
  	const modal = this.modalCtrl.create(RegisterPage);
  	modal.present();
  }
  login(username,password){
    this.rest.userLogin(username,password);
    if(this.rest.token ! = null)
    {
    console.log('logged in');
    this.events.publish('user:loggedin',this.rest.username);
    this.navCtrl.setRoot(PlayerdetailPage);
          }
    }
}
