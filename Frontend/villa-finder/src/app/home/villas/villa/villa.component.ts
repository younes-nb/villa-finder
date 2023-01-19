import {Component, Input, OnInit} from '@angular/core';
import {Villa} from "../../../../types/villa";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit {
  @Input() villa: Villa = {} as Villa;

  constructor(private appService: AppService) {
    this.appService = appService;
  }

  ngOnInit(): void {
  }

}
