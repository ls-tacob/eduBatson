import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl ('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit(){
    if (this.loginForm.valid){
    Swal.fire({
      title: 'Welcome!',
      text: `Usuario: ${this.loginForm.value.username}`,
      icon: 'success',
      confirmButtonText: 'Acept'
    });
    console.log('Form data:',this.loginForm.value);
    }else{
      Swal.fire({
        title: 'Error!',
        text:'Complete lo campos e intente nuevamente.',
        icon: 'error',
        confirmButtonText: 'Reintentar'
      })
      console.log('Form is invalid.');
    }
  }
}
