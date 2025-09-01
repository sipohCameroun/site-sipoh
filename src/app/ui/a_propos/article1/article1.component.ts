import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-article1',
  standalone: true,
  imports: [NgIf],
  templateUrl: './article1.component.html',
  styleUrl: './article1.component.css'
})
export class Article1Component {

  show = true;

  ngOnInit() {
    AOS.init({once: true});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
