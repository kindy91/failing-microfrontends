import { Component } from '@angular/core';

@Component({
  selector: 'failing-microfrontends-shop-entry',
  template: `<failing-microfrontends-nx-welcome></failing-microfrontends-nx-welcome>`,
})
export class RemoteEntryComponent {}
