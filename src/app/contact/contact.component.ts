import { Component, OnInit, Renderer2 } from '@angular/core';
import { FooterComponent } from '../ui/footer/footer.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent , FooterComponent , ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder , private renderer: Renderer2){

  }


  ngOnInit(): void {



    this.contactForm = this.formBuilder.group(
      {
        mail: [, [Validators.required , Validators.email]],
        objet: [null, [Validators.required]],
        message: [null, [Validators.required]]
      },
      {
        updateOn: 'blur',
      });
  } 


  onSubmit() : void {

    if (this.contactForm.valid){
      const tachesData = this.contactForm.value;

      console.log(tachesData);
      this.contactForm.reset();


      const element = document.querySelector('#success') as HTMLElement;
      this.renderer.removeClass(element, 'hide');

      setTimeout(() => {
        this.renderer.addClass(element, 'hide');
      }, 5000);

      








    }
  }

}
