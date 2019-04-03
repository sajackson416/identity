import {Component, OnInit} from '@angular/core';
import {NavigatorService} from '../shared/navigator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private navigator: NavigatorService) {
  }

  ngOnInit() {
  }

  onNavigate(id: string) {
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
    // this.navigator.scrollToElem(id);
  }
}
