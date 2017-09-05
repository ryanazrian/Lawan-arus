import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ListPage } from '../list/list';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';
import { CariYayasanPage } from '../cari-yayasan/cari-yayasan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
	email: string;

  tab1Root = HomePage;
  tab2Root = CariYayasanPage;
  tab3Root = ListPage;
  tab4Root = ProfilPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire:AngularFireAuth) {
  	this.email = fire.auth.currentUser.email;
  }
}
