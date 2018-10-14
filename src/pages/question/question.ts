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
lat : any;
lng : any;
username : string;
map1=true;
pages: Array<{title: string, component: any}>;
 @ViewChild('map') mapElement: ElementRef;
  map: any;
   constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl : ModalController,public renderer : Renderer2) {
  	this.username = navParams.get('username');
    this.lat = navParams.get("lat");
    this.lng = navParams.get("lng");
  }

  /**testMarker(){
 
        let center = this.mapComponent.map.getCenter();
       // this.mapComponent.addMarker(center.lat(), center.lng());
 
    }**/
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    //this.mapComponent.addMarker(this.mapComponent.latitude,this.mapComponent.longitude);
    this.initMap()
  }
   initMap() {
     console.log(this.lat,this.lng);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: this.lat, lng: this.lng}
    });
     let marker = new google.maps.Marker({
                  map: this.map,
                  animation: google.maps.Animation.DROP,
                  position: {lat:this.lat,lng :this.lng}
              });
 

    //this.directionsDisplay.setMap(this.map);
  }

}
