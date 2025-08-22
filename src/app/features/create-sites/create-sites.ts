import { Component, inject, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { SitesService } from '../../core/services/sites.services';
import { error } from 'console';

@Component({
  selector: 'app-create-sites',
  imports: [FormsModule],
  templateUrl: './create-sites.html',
  styleUrl: './create-sites.css'
})
export class CreateSites implements OnInit {


 sitesService = inject(SitesService);

  ngOnInit(): void {
   
 }
 onSubmit(siteForm: NgForm) {

  if(siteForm.valid){
    
    const formData = siteForm.value;

    console.log('formulaire soumis :', formData);

    this.sitesService.createSite(formData).subscribe({

      next:(response) =>{


      console.log('Succes !', response);

         siteForm.resetForm();
      },

      error: (error)=> {

        console.error('erreur lors de envoie' , error);


      }

    });

    




  }
  
}

}
