import {Injectable, NgModule} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {PaginatorComponent} from "./paginator.component";
import {FormatTextService} from "../../shared/format-text.service";

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`صفحه اول`;
  itemsPerPageLabel = $localize`تعداد در هر صفحه : `;
  lastPageLabel = $localize`صفحه آخر`;
  nextPageLabel = 'صفحه بعدی';
  previousPageLabel = 'صفحه قبلی';

  constructor(private appService: FormatTextService) {
  }

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`صفحه ${this.numLatinToFa(page + 1)} از ${this.numLatinToFa(amountPages)}`;
  }

  numLatinToFa(n: number) {
    return this.appService.numLatinToFa(n.toString());
  }
}


@NgModule({
  imports: [MatPaginatorModule],
  declarations: [PaginatorComponent],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  exports: [PaginatorComponent]
})
export class PaginatorModule {
}
