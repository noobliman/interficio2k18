import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list';
import * as $ from "jquery";
import { TweenMax, TimelineMax,Linear} from "gsap/TweenMax";


@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RulesPage');
  }
  goToHome(){
  	this.navCtrl.push(ListPage);
  }

}
