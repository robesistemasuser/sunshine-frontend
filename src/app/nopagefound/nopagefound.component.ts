import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  standalone: true,
  imports: [],
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css']
})
export class NopagefoundComponent {
 year = new Date().getFullYear();
}
