import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-article2',
  standalone: true,
  imports: [NgIf],
  templateUrl: './article2.component.html',
  styleUrl: './article2.component.css'
})
export class Article2Component {

  show = true;

  ngOnInit() {
    AOS.init({once: true});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


}
