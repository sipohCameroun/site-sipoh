import { Component } from '@angular/core';
import { Article1Component } from '../ui/a_propos/article1/article1.component';
import { Article2Component } from '../ui/a_propos/article2/article2.component';
import { Article3Component } from '../ui/a_propos/article3/article3.component';
import { Article4Component } from '../ui/a_propos/article4/article4.component';
import { FooterComponent } from '../ui/footer/footer.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , Article1Component , Article2Component  , Article3Component , Article4Component],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {

}
