import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: "cadastrar-usuario.page.html",
  styleUrls: ["cadastrar-usuario.page.scss"],
})
export class CadastrarUsuarioPage implements OnInit {
  form: FormGroup;

  constructor(
    private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        nome: new FormControl("", [
          Validators.required,
          Validators.minLength(2),
        ]),
        sobrenome: new FormControl(""),
        cpf: new FormControl(""),
        email: new FormControl("", [Validators.required, Validators.email]),
        celular: new FormControl("", [Validators.required]),
        senha: new FormControl("", [Validators.required]),
        confirmaSenha: new FormControl("", [Validators.required]),
      },
      {
        validator: this.checkIfMatchingPasswords("senha", "confirmaSenha"),
      }
    );
  }

  checkIfMatchingPasswords(senha: string, confirmaSenha: string) {
    return (group: FormGroup) => {
      const senhaInput = group.controls[senha],
        confirmaSenhaInput = group.controls[confirmaSenha];
      if (senhaInput.value != confirmaSenhaInput.value) {
        return confirmaSenhaInput.setErrors({ notEquivalent: true });
      } else if (
        confirmaSenhaInput.value == "" ||
        confirmaSenhaInput.value == null
      ) {
        return confirmaSenhaInput.setErrors({ required: true });
      } else {
        return confirmaSenhaInput.setErrors(null);
      }
    };
  }

  getErrorMessage(field) {
    return this.form.get(field).hasError("required")
      ? "Campo requerido"
      : this.form.get(field).hasError("email")
      ? "Email inválido"
      : this.form.get(field).hasError("minlength")
      ? "Campo inválido"
      : this.form.get(field).hasError("notEquivalent")
      ? "Senhas não coincidem"
      : "";
  }

  isValid(field) {
    if (
      this.form.get(field).value === "" ||
      this.form.get(field).value === null
    ) {
      return false;
    }
    return this.form.get(field).valid;
  }

  isInvalid(field) {
    return (
      !this.form.controls[field].valid && this.form.controls[field].touched
    );
  }

  avancar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.registerUser(this.form.value).then(
      (response) => {
        Swal.fire('Sucesso', 'Usuario cadastrado com sucesso.', 'success').then(
          () => {
            this.router.navigateByUrl('/login');
          }
        );
      }, error => {
        Swal.fire('Ocorreu um erro ao cadastrar usuário.', 'error');
        console.log(error);
      }
    );
  }
}
