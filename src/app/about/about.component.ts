import {Component, ElementRef, OnInit} from '@angular/core';
import {NavigatorService} from '../shared/navigator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private element: ElementRef;

  constructor(private navigator: NavigatorService) {
  }

  ngOnInit() {
    // this.navigator.addElement('about', this.element);
  }

}
