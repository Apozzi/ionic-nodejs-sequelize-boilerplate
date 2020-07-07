import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from './area.service';
import { DepositoService } from '../deposito/deposito.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  public folder: string;
  public areas: any;
  public listaDeposito: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public areaService: AreaService,
    private depositoService: DepositoService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.areaService.get().subscribe((request : any) => {
      this.areas = request;
    });
  }

  del(produto: any) {
    this.areaService.del(produto).subscribe((request : any) => {
      this.ngOnInit();
    });
  }

}
