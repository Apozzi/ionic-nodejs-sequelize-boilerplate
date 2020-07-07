import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public showMenu = true;
  public appPages = [
    {
      title: 'Home',
      url: '/Home',
      icon: 'home'
    },
    {
      title: 'Item',
      url: '/Item',
      icon: 'pricetag'
    },
    {
      title: 'Deposito',
      url: '/Deposito',
      icon: 'cube'
    },
    {
      title: 'Area',
      url: '/Area',
      icon: 'map'
    },
    {
      title: 'Usuário',
      url: '/Usuario',
      icon: 'person'
    },
    {
      title: 'Sobre',
      url: '/Sobre',
      icon: 'information-circle'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    if (!sessionStorage.getItem("access_token")) {
      this.router.navigate(['login']);
    }
    this.router.events.subscribe(() => {
      this.showMenu = this.router.url !== '/login';
    });
  }
}
