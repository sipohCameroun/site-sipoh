import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1
import { FooterComponent } from '../ui/footer/footer.component';
import { Section1Component } from '../ui/home/section1/section1.component';
import { Section2Component } from '../ui/home/section2/section2.component';
import { Section3Component } from '../ui/home/section3/section3.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , Section1Component , Section1Component , Section2Component, Section3Component , FooterComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // encapsulation: ViewEncapsulation.None

})
export class HomeComponent {
  show = true;


  ngOnInit() {
    AOS.init({once: true});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
