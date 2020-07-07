import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositoService } from './deposito.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {
  public folder: string;
  public depositos: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private depositoService: DepositoService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.depositoService.get().subscribe((request : any) => {
      this.depositos = request;
    });
  }

  del(deposito: any) {
    this.depositoService.del(deposito).subscribe((request : any) => {
      this.ngOnInit();
    });
  }

}
