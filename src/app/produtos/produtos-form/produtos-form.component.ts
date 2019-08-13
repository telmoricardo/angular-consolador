import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutosService) { }

  ngOnInit() {

    this.configurarFormulario();

    // this.formulario = this.fb.group({
    //   name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
    //   price: [null],
    //   description: [null],
    //   category_id: [null],
    //   created: [null],
    //   category_name: [null]
    // });
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      name: [null, Validators.required],
      description: [null],
      price: [null],
      category_id: [null],
      category_name: [null],
      created: [null]
    });
  }

  adicionarProduto () {
    this.produtoService.create(this.formulario.value).subscribe();
  }

  // hasError(field: string) {
  //   return this.form.get(field).errors;
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.form.value);
  //   if (this.form.valid) {
  //     console.log('submit');
  //     this.produtoService.create(this.form.value).subscribe(
  //       success => console.log('successo'),
  //       error => console.error(error),
  //       () => console.log('request compleot')
  //     );
  //   }
  // }

  // onCancel() {
  //   this.submitted = false;
  //   this.form.reset();
  //   //console.log('onCancel');
  // }

}
