import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-profile',
  templateUrl: './inline-profile.component.html',
  styleUrls: ['./inline-profile.component.scss'],
  animations: [
    trigger('menu', [
      state(
        'hidden',
        style({
          height: '0px',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class InlineProfileComponent implements OnInit {
  @Input() userInfo: any;
  active = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent): void {
    this.active = !this.active;
    event.preventDefault();
  }
}
