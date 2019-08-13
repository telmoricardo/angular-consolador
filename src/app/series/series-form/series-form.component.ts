import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss']
})
export class SeriesFormComponent implements OnInit {

  formulario: FormGroup;
  submitted: false;

  constructor(private formBuilder: FormBuilder,
    private serieService: SeriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        //console.log(id);
      }
    );

    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required]
    });
  }

  adicionarSerie() {
    this.serieService.create(this.formulario.value).subscribe(
      success => console.log('sucesso'),
      error => console.error('error'),
      () => console.log('request ok')
    );
  }

}
