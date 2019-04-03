import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private elements: ElementRef[];

  constructor() {
  }

  addElement(id: string, element: ElementRef) {
    this.elements[id] = element;
  }

  scrollToElem(id: string): void {
    this.elements[id].nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start'
    });
  }
}
