import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { UsuarioService } from '../usuario.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.html',
  styleUrls: ['./usuario-edit.scss'],
})
export class UsuarioEditPage implements OnInit {
  public folder: string;

  public usuario = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.folder != '0') {
      this.usuarioService.getById(this.folder).subscribe((request : any) => {
        this.usuario = request;        
      });
    }
  }

  save() {
    if (this.folder != '0') {      
      this.usuarioService.update(this.folder, this.usuario).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Usuario']);
      });
    } else {
      this.usuarioService.add(this.usuario).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Usuario']);
      });
    }
  }

}
