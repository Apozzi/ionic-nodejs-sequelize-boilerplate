import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { DepositoService } from '../deposito.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-deposito-edit',
  templateUrl: './deposito-edit.html',
  styleUrls: ['./deposito-edit.scss'],
})
export class DepositoEditPage implements OnInit {
  public folder: string;

  public deposito = {
    nome: '',
    descricao: '',
    usuario: '',
    idusuario: 0
  };
  public listaUsuario: any;
  public usuarioSelecionado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private depositoService: DepositoService,
    public toastController: ToastController,
    private router: Router,
    private usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuarioService.get().subscribe((request : any) => {
      this.listaUsuario = request;      
    });
    if (this.folder != '0') {
      this.depositoService.getById(this.folder).subscribe((request : any) => {
        this.deposito = request;
        debugger; 
        for (let i = 0; i < this.listaUsuario.length; i++) {
          if (this.listaUsuario[i].id == this.deposito.idusuario) {
            this.usuarioSelecionado = this.listaUsuario[i];
          }
        }
      });
    }
  }

  save() {
    this.deposito.usuario = this.usuarioSelecionado.nome;
    this.deposito.idusuario = this.usuarioSelecionado.id;
    if (this.folder != '0') {      
      this.depositoService.update(this.folder, this.deposito).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Deposito']);
      });
    } else {
      this.depositoService.add(this.deposito).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Deposito']);
      });
    }
  }

}
