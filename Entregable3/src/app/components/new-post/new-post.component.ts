import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent  implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private postService: PostService,
              ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
get nombreInvalido(): boolean {
  return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;

}

get apellidoInvalido(): boolean {
  return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
}

get ciudadInvalido(): boolean {
  return this.forma.get('ciudad').invalid && this.forma.get('ciudad').touched;
}

get tituloInvalido(): boolean {
  return this.forma.get('titulo').invalid && this.forma.get('titulo').touched;
}

get descripcionInvalido(): boolean {
  return this.forma.get('descripcion').invalid && this.forma.get('descripcion').touched;
}

createForm(): void {
  this.forma = this.fb.group({
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    ciudad: ['',Validators.required],
    titulo: ['',Validators.required],
    descripcion: ['',Validators.required]
  });
}

saveForm(): void {
  console.log(this.forma);

  if (this.forma.status === "INVALID") {
    alert('Hay algo que no funciona');
  } else {
    // LLamamos al método add Publication, del servicio post.service.ts y le andamos por parámetro el value del formulario.
      this.postService.addPublication(this.forma.get('nombre').value,this.forma.get('apellido').value,
      this.forma.get('ciudad').value,this.forma.get('titulo').value,this.forma.get('descripcion').value);

      this.router.navigateByUrl('/blog');
  }
}

loadDataToForm() {
  this.forma.setValue({
    nombre: '',
    apellido: '',
    ciudad: '',
    titulo: '',
    descripcion: '',
  });
}

}
