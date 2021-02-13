import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {
  private sideNavigation: MatDrawer

  public setSideNavigation (sideNavigation: MatDrawer) {
    console.log(sideNavigation);
    this.sideNavigation = sideNavigation;
  }

  public toggle() {
    this.sideNavigation.toggle();
  }
}
