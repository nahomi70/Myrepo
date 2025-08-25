import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

authService= inject(AuthService);

router= inject(Router);

errorMessage: string | null = null;


onSubmit(form:NgForm){

  if(form.valid){

    const{username,password}=form.value;
    this.authService.login(username,password).subscribe({

      next:()=>{
        this.errorMessage= null;
        this.router.navigate(['/home']);
      },

      error:()=>{
        this.errorMessage='Nom de utilisateur ou mot de passe incorrect';
      }
    });
  }
}


}
