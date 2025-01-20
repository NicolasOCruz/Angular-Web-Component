import {createApplication} from '@angular/platform-browser';
import {createCustomElement} from "@angular/elements";
import { SingleComponent } from './app/shared/single/single.component';

(async () => {
    const app = await createApplication({
        providers: []
    });

    const listElement = createCustomElement(SingleComponent, {
        injector: app.injector,
    });

    customElements.define("single-upload", listElement);
})();