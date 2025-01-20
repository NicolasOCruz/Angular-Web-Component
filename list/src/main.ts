import {createApplication} from '@angular/platform-browser';
import {createCustomElement} from "@angular/elements";
import { ListComponent } from './app/shared/list/list.component';
import { SingeComponent } from './app/shared/singe/singe.component';
import 'zone.js';

(async () => {
    const app = await createApplication({
        providers: []
    });

    const listElement = createCustomElement(ListComponent, {
        injector: app.injector,
    });

    const singeElement = createCustomElement(SingeComponent, {
        injector: app.injector,
    })

    customElements.define("list-upload", listElement);
    customElements.define("single-upload", singeElement);
})();