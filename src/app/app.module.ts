import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Http import
import { HttpModule } from '@angular/http';

// Page imports
import { CategoryPage } from '../pages/category/category';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { LoginPage } from '../pages/login/login';
import { SumbangPage } from '../pages/sumbang/sumbang';
import { MainPage } from '../pages/main/main';
import { DetailPage } from '../pages/detail/detail';
import { PeminatPage } from '../pages/peminat/peminat';
import { Detail1Page } from '../pages/detail1/detail1';
import { YayasanKebutuhanPage } from '../pages/yayasan-kebutuhan/yayasan-kebutuhan';
import { YayasanJenisPage } from '../pages/yayasan-jenis/yayasan-jenis';
import { YayasanBarangPage } from '../pages/yayasan-barang/yayasan-barang';
import { RegisterPage } from '../pages/register/register';
import { CariYayasanPage } from '../pages/cari-yayasan/cari-yayasan';
import { Detail2Page } from '../pages/detail2/detail2';








// Service imports
import { ItemApi } from '../services/item-api.service';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    ListPage,
    ProfilPage,
    HomePage,
    SingleItem,
    TabsPage,
    LoginPage,
    SumbangPage,
    MainPage,
    DetailPage,
    PeminatPage,
    Detail1Page,
    YayasanKebutuhanPage,
    YayasanJenisPage,
    YayasanBarangPage,
    RegisterPage,
    CariYayasanPage,
    Detail2Page
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    ProfilPage,
    ListPage,
    HomePage,
    SingleItem,
    TabsPage,
    LoginPage,
    SumbangPage,
    MainPage,
    DetailPage,
    PeminatPage,
    Detail1Page,
    YayasanKebutuhanPage,
    YayasanJenisPage,
    YayasanBarangPage,
    RegisterPage,
    CariYayasanPage,
    Detail2Page
  ],
  providers: [
    StatusBar, //save data
    SplashScreen,
    ItemApi,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
