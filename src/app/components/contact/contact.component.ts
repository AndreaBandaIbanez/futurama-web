import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder,FormGroup } from '@angular/forms';
import { IContact } from './contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

formData: IContact= {
  name: '',
  apellidos: '',
  email: '',
  comentario: ''
};

formCorrect = false;
filterForm?: FormGroup;
constructor(private formBuilder : FormBuilder){

}

 ngOnInit(): void {
    this.initForm()
  }
initForm(){
  this.filterForm = this.formBuilder.group({
    name: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', Validators.required],
    comentario: ['', Validators.required]
  })
}
  sendComment(){
if(this.filterForm){
  console.log ("nombre: ", this.filterForm.get('name')!.value, 
  "\napellidos: ", this.filterForm.get('apellidos')!.value,
  "\nemail: ", this.filterForm.get('email')!.value,
  "\ncomentario: ", this.filterForm.get('comentario')!.value
);
this.filterForm.reset();

}
  }


hasErrors(fieldName: String): boolean{
  if(this.filterForm){
    if(fieldName === 'name'){
      return this.filterForm!.get('name')!.hasError('required')&& this.filterForm!.get('name')!.touched;
    }
    if(fieldName === 'apellidos'){
      return this.filterForm!.get('apellidos')!.hasError('required')&& this.filterForm!.get('apellidos')!.touched;
    }
    if(fieldName === 'email'){
      return this.filterForm!.get('email')!.hasError('required')&& this.filterForm!.get('email')!.touched;
    }
    if(fieldName === 'comentario'){
      return this.filterForm!.get('comentario')!.hasError('required')&& this.filterForm!.get('comentario')!.touched;
    }
  }
return false;
}

verifiFields(): boolean{
return !this.filterForm!.get('name')!.hasError('required') && 
 !this.filterForm!.get('apellidos')!.hasError('required') &&
!this.filterForm!.get('email')!.hasError('required') &&
!this.filterForm!.get('comentario')!.hasError('required');
}

}
