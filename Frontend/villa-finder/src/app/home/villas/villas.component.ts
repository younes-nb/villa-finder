import {Component, OnInit, ViewChild} from '@angular/core';
import {VillasService} from "./villas.service";
import {Villa} from "../../../types/villa";
import {MatLegacyPaginator as MatPaginator, LegacyPageEvent as PageEvent} from "@angular/material/legacy-paginator";
import {AppService} from "../../app.service";

@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.scss']
})
export class VillasComponent implements OnInit {
  villas: Villa[] = [];
  pageSlice: Villa[] = [];
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private villasService: VillasService, private appService: AppService) {
    this.appService = appService;
  }

  ngOnInit(): void {
    this.villas = this.villasService.getVillas();
    this.paginator._intl.itemsPerPageLabel = 'تعداد در هر صفحه : ';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const currentPage = page + 1;
      const pagesCount = Math.ceil(length / pageSize);
      return `صفحه ${this.appService.numLatinToFa(currentPage.toString())} از ${this.appService.numLatinToFa(pagesCount.toString())}`;
    };
    this.paginator._intl.nextPageLabel = "صفحه بعدی";
    this.paginator._intl.previousPageLabel = "صفحه قبلی";
    this.paginator._intl.firstPageLabel = "صفحه اول";
    this.paginator._intl.lastPageLabel = "صفحه آخر";
    this.pageSlice = this.villas.slice(0, 9);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.villas.length) {
      endIndex = this.villas.length;
    }
    this.pageSlice = this.villas.slice(startIndex, endIndex);
  }

  numLatinToFa(n: number){
    return this.appService.numLatinToFa(n.toString());
  }

}
