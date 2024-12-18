import { Component } from '@angular/core';
import { BoutonsComponent } from './boutons/boutons.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BoutonsComponent] 

})
export class AppComponent {
  title = 'projet-angular-boutons';
}
