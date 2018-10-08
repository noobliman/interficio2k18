import { Component ,Input,Renderer2,ElementRef,Inject,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RulesPage} from '../rules/rules';
import {LeaderboardPage} from '../leaderboard/leaderboard';
import {MyApp} from '../../app/app.component';
import {DOCUMENT} from '@angular/platform-browser';
import {Plugins} from '@capacitor/core';
import {MapComponent} from '../../components/map/map'

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
username : string;
map1=true;
pages: Array<{title: string, component: any}>;
 @ViewChild(MapComponent) mapComponent: MapComponent;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl : ModalController) {
  	this.username = navParams.get('username');

  }

  testMarker(){
 
        let center = this.mapComponent.map.getCenter();
       // this.mapComponent.addMarker(center.lat(), center.lng());
 
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    //this.mapComponent.addMarker(this.mapComponent.latitude,this.mapComponent.longitude);

  }
  
}
