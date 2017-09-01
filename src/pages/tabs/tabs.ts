import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { ProfilPage } from '../profil/profil';
import { HomePage } from '../home/home';
import { CariYayasanPage } from '../cari-yayasan/cari-yayasan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CariYayasanPage;
  tab3Root = ListPage;
  tab4Root = ProfilPage;

  constructor() {

  }
}
