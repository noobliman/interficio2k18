import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Observable} from 'rxjs';
//import * as global from '../../global'
/**
 * Generated class for the PlayerdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playerdetail',
  templateUrl: 'playerdetail.html',
})
export class PlayerdetailPage {
	pages: Array<{title: string, component: any}>;
 	player : any;
  loaded = false;
   constructor(public navCtrl: NavController, public navParams: NavParams,public rest : RestProvider) {
 
  }
  ionViewCanEnter() {
    console.log("in ionViewCanEnter")
    
    return new Promise((resolve, reject) => {    
      this.rest.getPlayerDetail()
  .subscribe((data:any)=>{
                       //global.playerdetail = data;
                      this.player = (data);
                  console.log(this.player);
                  this.loaded=true;
                  resolve(data);

              }
              ,error=>{
                console.log(error);
                reject(error);
              }
    );



          });
  }
  

   ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerdetailPage');
  }
  

}
