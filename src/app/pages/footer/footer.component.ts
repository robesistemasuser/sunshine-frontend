import { Component } from '@angular/core'; 

 

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    imports: []
})
export class FooterComponent {
  year = new Date().getFullYear();
  setActiveLink(arg0: string) {
    throw new Error('Method not implemented.');
    }
       
}
