import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SideNavigationService } from '../../services/side-navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private sideNavigation: SideNavigationService) { }

  faBars = faBars;
  ngOnInit(): void {
  }

  toggleSideNavigation() {
    console.log('HIER');
    this.sideNavigation.toggle();
  }

}
