import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators,FormBuilder,	FormGroup,FormControl} from '@angular/forms';
import { UsernameValidator } from '../../validators/username.validator';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//form validation needed
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	private register :  FormGroup;
 	constructor(public navCtrl: NavController, 
  			public navParams: NavParams,
  			public formbuilder: FormBuilder) {

  	this.register = this.formbuilder.group ({

  		password : new FormControl('', Validators.required),
	
 	username: new FormControl('', Validators.required),
	name: new FormControl('', Validators.required),

	contact :  new FormControl('',Validators.required),
	
	email: new FormControl('', Validators.compose([
	 Validators.required,
	 Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
 	]))
	})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  logForm(){
  	console.log('data entered');
  	//take data from here;
  	this.navCtrl.pop();
  }

}
