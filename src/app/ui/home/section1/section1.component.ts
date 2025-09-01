import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1


@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [ NgIf ],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit {

  show = true;
  ngOnInit() {
    AOS.init({disable: false , 
      once: true,
    });
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
