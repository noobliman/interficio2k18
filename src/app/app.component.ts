import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';
//import {CloudModule,CloudSettings} from '@ionic/cloud-angular';
import {HttpModule} from '@angular/http';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RulesPage} from '../pages/rules/rules';
import {QuestionPage} from '../pages/question/question';
import {LeaderboardPage} from '../pages/leaderboard/leaderboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  loggedIn  = false;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events : Events) {
    this.initializeApp();
    events.subscribe('user:loggedin',(username)=>{
      console.log(username);
      this.loggedIn= true;
       if(this.loggedIn == true)
    this.pages = [
     
   
      {title: 'Instructions', component: RulesPage},
      {title: 'Questions', component: QuestionPage},
      {title: 'Leaderboard', component : LeaderboardPage},
      {title: 'Log Out' , component : HomePage}
    ];

    });
    events.subscribe('user:loggedout',(username)=>{
      console.log(username);
      this.loggedIn= false;
       if(this.loggedIn == false)
    this.pages = [
     
    { title: 'Home', component: HomePage },
   
      {title: 'Instructions', component: RulesPage},
      {title: 'Leaderboard', component : LeaderboardPage},
      
    ];

    });

    // used for an example of ngFor and navigation
    
    if(this.loggedIn == false)
    this.pages = [
      { title: 'Home', component: HomePage },
   
      {title: 'Instructions', component: RulesPage},
      {title: 'Leaderboard', component : LeaderboardPage},
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component!=HomePage)
    this.nav.setRoot(page.component);
    else{
      this.events.publish('user:loggedout','logout');
      this.nav.setRoot(page.component);
    }

  }
}
