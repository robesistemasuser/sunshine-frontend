import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [false]
  });


  constructor(private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.renderButton();
  }


  login() {
    const loginFormData = this.loginForm.value as { email: string, password: string, remember: boolean };

    this.usuarioService.login(loginFormData)
      .subscribe(resp => {
        if (loginFormData.remember) {


          localStorage.setItem('email', loginFormData.email);
        } else {
          localStorage.removeItem('email');
        }

        // Navegar al Dashboard
        // this.router.navigateByUrl('/');

      }, (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      });

  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();

  }

  async startApp() {

    await this.usuarioService.googleInit();
    this.auth2 = this.usuarioService.auth2;

    this.attachSignin(document.getElementById('my-signin2'));

  };

  attachSignin(element: HTMLElement | null) {

    this.auth2.attachClickHandler(element, {},
      (googleUser: { getAuthResponse: () => { (): any; new(): any; id_token: any; }; }) => {
        const id_token = googleUser.getAuthResponse().id_token;
        // console.log(id_token);
        this.usuarioService.loginGoogle(id_token)
          .subscribe(resp => {
            // Navegar al Dashboard
            this.ngZone.run(() => {
              this.router.navigateByUrl('/');
            })
          });

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
