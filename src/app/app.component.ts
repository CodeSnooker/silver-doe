import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button md-raised-button class="md-raised">Button</button>
  <button md-raised-button class="md-raised md-primary">Primary</button>
  <button md-raised-button disabled="true" class="md-raised md-primary">Disabled</button>
  `,
})
export class AppComponent  { name = 'Angular'; }
