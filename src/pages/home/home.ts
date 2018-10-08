import { Component } from '@angular/core';

import { NavController,ModalController,Events } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {MyApp} from '../../app/app.component'
import {QuestionPage} from '../question/question';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	 bool = false ;
  constructor(public navCtrl: NavController , public modalCtrl : ModalController,public events : Events) {

  }
  openLogin(){
  	this.bool = !this.bool;
  }
  openRegisterModal(){
  	const modal = this.modalCtrl.create(RegisterPage);
  	modal.present();
  }
  login(username,password){
    console.log('logged in');
    this.events.publish('user:loggedin',username);
    this.navCtrl.setRoot(QuestionPage,{
      username : username,
      password : password,
      //level will be  also  pushed
    })
  }

}
