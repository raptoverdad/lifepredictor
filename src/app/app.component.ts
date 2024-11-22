import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent ,IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {homeSharp, mailOutline,calendarSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonCardTitle,IonCardSubtitle,IonCardHeader,IonCardContent,RouterLink,IonCard ,RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu,IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/home', icon: 'home' },
    { title: 'Plan diario', url: '/folder/daily', icon: 'calendar' },
    { title: 'Ajustes vitales', url: '/folder/vitals', icon: 'heart' },
  ];
  public dailyUrl = '/folder/daily'
  public vitalsUrl =  '/folder/vitals'
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public statistics:StatisticsService) {
    addIcons({homeSharp,calendarSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
