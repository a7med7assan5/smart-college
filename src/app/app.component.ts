import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './services/auth.service';
import { User, Role } from './_models';
import { Router } from '@angular/router';
import { TranslateConfigService } from './services/translate-config.service';
import { SettingsPage } from './settings/settings.page';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authenticationService: AuthService,
    private translateConfigService: TranslateConfigService,
  ) {
    this.initializeApp();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.platform.ready().then(() => {
      this.translateConfigService.setLanguage(localStorage["myConfig"]);
 });
  }

  get isUser() {
    return this.currentUser && (this.currentUser.role === Role.Admin || this.currentUser.role === Role.Teacher || this.currentUser.role === Role.Student);

  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }
  get isStudent() {
    return this.currentUser && this.currentUser.role === Role.Student;
  }

  get isTeacher() {
    return this.currentUser && this.currentUser.role === Role.Teacher;
  }

  get isTeacherOrStudent() {
    return this.currentUser && (this.currentUser.role === Role.Teacher || this.currentUser.role === Role.Student);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  title = 'smartCollege';

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
