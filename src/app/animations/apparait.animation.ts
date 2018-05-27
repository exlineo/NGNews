// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const apparaitAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('apparaitAnimation', [

        // route 'enter' transition
        transition(':enter', [

            // css styles at start of transition
            style({ opacity: 0, paddingTop:0  }),

            // animation and styles at end of transition
            animate('.3s ease-in-out', style({ opacity: 1, paddingTop:30 }))
        ]),
        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.3s ease-in-out', style({
                opacity:0,
                paddingTop:0
            }))
        ])
    ]);