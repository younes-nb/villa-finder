import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatTextService {

  numLatinToFa(n: string): string {
    return n.replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  }
}
