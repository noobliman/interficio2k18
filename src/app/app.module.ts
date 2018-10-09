import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {RulesPage} from '../pages/rules/rules';
import {LoginPage} from '../pages/login/login';
import {LeaderboardPage} from '../pages/leaderboard/leaderboard';
import {RegisterPage} from '../pages/register/register';
import {MapComponent} from '../components/map/map';
import  {QuestionPage} from '../pages/question/question';
import {ComponentsModule} from '../components/components.module'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RestProvider} from '../providers/rest/rest';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RulesPage,
    QuestionPage,
    LoginPage,
    LeaderboardPage,
    RegisterPage,
    MapComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RulesPage,
    QuestionPage,
    LoginPage,
    LeaderboardPage,
    RegisterPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AuthProvider
  ]
})
export class AppModule {}