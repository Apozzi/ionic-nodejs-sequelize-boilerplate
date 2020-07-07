import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  public folder: string;
  public editItem: string;
  public items: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public itemService: ItemService
    ) { }

  ngOnInit() {
    this.editItem = "/Item/Edit";
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemService.get().subscribe((request : any) => {
      this.items = request;
    });
  }

  del(item: any) {
    this.itemService.del(item).subscribe((request : any) => {
      this.ngOnInit();
    });
  }

}
