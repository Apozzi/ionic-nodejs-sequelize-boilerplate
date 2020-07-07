import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { AreaService } from '../area.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DepositoService } from '../../deposito/deposito.service';

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.html',
  styleUrls: ['./area-edit.scss'],
})
export class AreaEditPage implements OnInit {
  public folder: string;

  public area = {
    nome: '',
    descricao: '',
    deposito: '',
    iddeposito: 0
  };

  public listaDeposito: any;
  public depositoSelecionado: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private depositoService: DepositoService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');        
    this.depositoService.get().subscribe((request : any) => {
      this.listaDeposito = request;      
    });
    if (this.folder != '0') {
      this.areaService.getById(this.folder).subscribe((request : any) => {
        this.area = request;
        debugger; 
        for (let i = 0; i < this.listaDeposito.length; i++) {
          if (this.listaDeposito[i].id == this.area.iddeposito) {
            this.depositoSelecionado = this.listaDeposito[i];            
          }
        }
      });
    }
  }

  save() {
    this.area.deposito = this.depositoSelecionado.nome;
    this.area.iddeposito = this.depositoSelecionado.id;
    if (this.folder != '0') {      
      this.areaService.update(this.folder, this.area).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Area']);
      });
    } else {
      this.areaService.add(this.area).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Area']);
      });
    }    
  }

}
