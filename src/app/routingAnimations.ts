import {
  trigger,
  transition,
  group,
  query,
  style,
  animate
} from '@angular/animations';

export const routeStateTrigger = trigger('routeState', [
  transition('* => *', [
    group([
      query(':enter', [
        // animateChild(),
        style({
          transform: 'translateY(-400px)',
          opacity: 0
        }),
        animate('5000ms ease-out')
      ], {optional: true}),
      query(':leave', [
        animate('5000ms ease-out', style({
          transform: 'translateY(600px)',
          opacity: 0
        }))
      ], {optional: true})
    ])
  ])
]);
