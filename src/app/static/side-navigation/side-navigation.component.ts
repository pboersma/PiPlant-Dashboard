import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavigationService } from '../../services/side-navigation.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @ViewChild('drawer') public sideNavigation: MatDrawer
  constructor(private sideNavigationService: SideNavigationService) { }

  ngAfterViewInit(): void {
    this.sideNavigationService.setSideNavigation(this.sideNavigation);
  }

  ngOnInit(): void {
  }

}
