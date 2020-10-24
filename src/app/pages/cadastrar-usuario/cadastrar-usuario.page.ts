import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: "cadastrar-usuario.page.html",
  styleUrls: ["cadastrar-usuario.page.scss"],
})
export class CadastrarUsuarioPage implements OnInit {
  form: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        nome: new FormControl("", [
          Validators.required,
          Validators.minLength(2),
        ]),
        sobrenome: new FormControl(""),
        numero: new FormControl("", [Validators.required]),
        documento: new FormControl(""),
        email: new FormControl("", [Validators.required, Validators.email]),
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

  formataEnvio(userData) {
    const numero = userData.numero.replace(/[ ().-]/g, "");
    const newUserData = {
      nome: userData.nome,
      sobrenome: userData.sobrenome,
      email: userData.email,
      senha: userData.senha,
      celular: {
        tipo: "celular",
        ddd: numero.substring(0, 2),
        numero: numero.substring(2, numero.length),
        ramal: "1",
        pais: "+55",
      },
    };

    return newUserData;
  }

  avancar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const userData = this.formataEnvio(this.form.value);
  }
}
