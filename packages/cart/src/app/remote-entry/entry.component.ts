import { Component } from '@angular/core';

@Component({
  selector: 'failing-microfrontends-cart-entry',
  template: `<failing-microfrontends-nx-welcome></failing-microfrontends-nx-welcome>`,
})
export class RemoteEntryComponent {}
