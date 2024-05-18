import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }


  public formSubmitted = false;
  public registerForm!: FormGroup;
   
   
  ngOnInit() {
   this.registerForm = this.fb.group({
    nombre: ['Fernando', Validators.required ],
    email: ['test100@gmail.com', [ Validators.required, Validators.email ] ],
    password: ['123456', Validators.required ],
    password2: ['123456', Validators.required ],
    terminos: [ true, Validators.required ],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

}
  
  crearUsuario() {
    this.formSubmitted = true;

    if (!this.registerForm) {
      return;
    }

    if (this.registerForm.invalid) {
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        Swal.fire('Success', 'User created successfully.', 'success');
      },
      error: (error) => {
        Swal.fire('Error', error.message || 'An error occurred.', 'error');
      }
    });
    
  }
  campoNoValido( campo: string ): boolean {
    
    if (!this.registerForm) {
      return false;
    }

    if ( this.registerForm.get(campo)?.invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  contrasenasNoValidas() {
    if (!this.registerForm) {
      return false;
    }

    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    if (!this.registerForm) {
      return false;
    }

    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordsIguales(pass1Name: string, pass2Name: string ) {
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
  
      if (!pass1Control || !pass2Control) {
        return null;
      }
  
      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
  
      return null; // Aquí devolvemos un valor, pero podrías devolver otro objeto si lo necesitas
    };
  }
  
}

