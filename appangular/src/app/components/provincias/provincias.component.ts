import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Provincia } from '../../core/models/provincia';
import { ProvinciasService } from '../../core/services/provincias.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.scss'],
})
export class ProvinciasComponent {
  public vProvincias: Provincia[];
  public selectedValue: number;
  @Output() onChange = new EventEmitter();  //Emite el evento al cambiar de item.

  constructor(private readonly provinciasSV: ProvinciasService) {
    this.getData();
  }

  private getData(): void {
    this.provinciasSV.getProvincias().subscribe(
      (resp) => {
        this.vProvincias = resp;
        console.log(this.vProvincias);
      },
      (error) => {},
      () => {}
    );
  }

  //Evento al cambiar de item.
  public onSelect() {
    this.onChange.emit();
  }  
}
