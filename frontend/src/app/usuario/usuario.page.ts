import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  public folder: string;
  public usuarios = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuarioService.get().subscribe((request : any) => {
      this.usuarios = request;
    });
  }

  del(usuario: any) {
    this.usuarioService.del(usuario).subscribe((request : any) => {
      this.ngOnInit();
    });
  }


}
