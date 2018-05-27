// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const roueAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('tourneAnimation', [
        // end state styles for route container (host)
        state('*', style({
            // transform:'rotate(180deg)'
        })),
        state('tourne', style({
            transform:'rotate(360deg)'
        }))
    ]);