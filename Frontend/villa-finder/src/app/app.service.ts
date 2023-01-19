import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  numLatinToFa(n: string) {
    return n.replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  }
}
