import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  numLatinToFa(n: string){
    // @ts-ignore
    return n.replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
  }
}
