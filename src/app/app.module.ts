import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { CharityPage } from '../pages/charity/charity';
import { CharityprofilePage } from '../pages/charityprofile/charityprofile';
import { PaymentPage } from '../pages/payment/payment';
import { PortfolioPage } from '../pages/portfolio/portfolio';
/**?if you type in ng module first, visual studio generates the import
 * statement for you 
 */
@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage, 
    RegisterPage,
    ProfilePage, 
    CharityPage,
    CharityprofilePage,
    PaymentPage, 
    PortfolioPage, 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    LoginPage,
    RegisterPage, 
    ProfilePage,
    CharityPage, 
    CharityprofilePage, 
    PaymentPage, 
    PortfolioPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

/**So this page links the app to the page, */
export class AppModule {}
