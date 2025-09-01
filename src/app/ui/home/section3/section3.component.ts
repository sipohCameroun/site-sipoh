import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [NgIf , NgFor],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component implements OnInit {

  show = true;

  articles: any = [
    {rang:"1",title:"Connexion du dispositif" , content:" Le dispositif se connecte facilement à votre téléphone via l'application SIPOH, permettant un suivi et une communication en temps réel." },
    {rang:"2",title:'Détection des zones à risque' , content:"Dès que vous entrez dans une zone identifiée comme dangereuse, l'application et le dispositif vous envoient une notification pour vous avertir." },
    {rang:"3",title:"Activation manuelle ou par IA" , content:"En cas de danger, le dispositif s'active automatiquement ou sur simple pression."},
    {rang:"4",title:"Envoi des alertes" , content:"Aux contacts d'urgence, aux forces de l'ordre et aux bénévoles à proximité du lieu d'agressions."}    
  ]

  ngOnInit() {
    AOS.init({disable: false , 
      once: true,
      duration: 1100,
      delay: 400
    });//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


}
