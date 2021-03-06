import {Component, NgZone, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {KaartComponent} from "./kaart.component";
import {KaartWmsLaagComponent} from "./kaart-wms-laag.component";

@Component({
  selector: "awv-kaart-wdb-laag",
  template: "<ng-content></ng-content>",
  encapsulation: ViewEncapsulation.None
})
export class KaartWdbLaagComponent extends KaartWmsLaagComponent implements OnInit, OnDestroy {
  constructor(protected kaart: KaartComponent, protected zone: NgZone) {
    super(kaart, zone);
  }

  ngOnInit(): void {
    this.urls = this.kaart.config.wdb.urls;
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
