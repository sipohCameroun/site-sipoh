import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import * as AOS from 'aos'; //AOS - 1


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet , NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  
  show = true;

  ngOnInit() {
    AOS.init();//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


  constructor( private router: Router, private el: ElementRef, private renderer: Renderer2) {}







  toggleNavbar() {

    const element = document.querySelector('#adapt') as HTMLElement;
    if (element) {
      const classList = element.classList;
      if(classList.contains('visible') ){

        this.renderer.removeClass(element, 'visible');
        this.renderer.addClass(element, 'hidden');

      }else if(classList.contains('hidden')){


        this.renderer.removeClass(element, 'hidden');
        this.renderer.addClass(element, 'visible');

      }else{
        this.renderer.addClass(element, 'visible');
      }


    }



  }




}
