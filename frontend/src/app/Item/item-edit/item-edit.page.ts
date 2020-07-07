import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AreaService } from '../../area/area.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.html',
  styleUrls: ['./item-edit.scss'],
})
export class ItemEditPage implements OnInit {
  public folder: string;

  public item = {
    nome: '',
    descricao: '',
    deposito: '',
    categoria: '',
    quantidade: '',
    obs: '',
    cadastro: ''
  };
  public areaSelecionado: any;
  public listaArea: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    public toastController: ToastController,
    private router: Router,
    private areaService: AreaService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.areaService.get().subscribe((request : any) => {
      this.listaArea = request;      
    });
    if (this.folder != '0') {
      this.itemService.getById(this.folder).subscribe((request : any) => {
        this.item = request;
        debugger; 
        for (let i = 0; i < this.listaArea.length; i++) {
          //esta como deposito mais deveria ser area, vou deixar assim....
          if (this.listaArea[i].id == this.item.deposito) {
            this.areaSelecionado = this.listaArea[i];            
          }
        }
      });
    }
  }

  save() {
    this.item.deposito = this.areaSelecionado.id;    
    if (this.folder != '0') {      
      this.areaService.update(this.folder, this.item).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Item']);
      });
    } else {
      this.itemService.add(this.item).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Item']);
      });
    }
  }

}
