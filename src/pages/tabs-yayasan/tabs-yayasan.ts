import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { ProfilPage } from '../profil/profil';
import { Home1Page } from '../home1/home1';
//import { SumbanganPage } from '../sumbangan/sumbangan';

@Component({
  templateUrl: 'tabs-yayasan.html'
})
export class TabsYayasanPage {

  tab1Root = Home1Page;
  tab2Root = HistoryPage;
  tab3Root = ProfilPage;

  constructor() {

  }
}
