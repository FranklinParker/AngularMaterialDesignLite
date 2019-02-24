import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() message: string;
  @Input() color = 'white';

  constructor() {
  }

  getTextColor() {
    return {
      'color': this.color
    };
  }


  ngOnInit() {
  }

}
