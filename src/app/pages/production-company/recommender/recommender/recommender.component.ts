import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {COMMA, SPACE, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectionListChange } from '@angular/material/list';


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.scss']
})
export class RecommenderComponent implements OnInit {

  source: MatTableDataSource<any>
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  rawSource

  filters: any[] = []

  applyFilter(event: Event) {
    let filterValue =
      this
      .filters
        .reduce((acc, filter) => acc + " " + filter.name.toString(), "")
    this.source.filter = filterValue.toLowerCase();
  }

  constructor(private route: ActivatedRoute)
  {
    
  }

  pushFilter(filter) {
    if (this.filters.findIndex(f => f.name == filter.name) == -1)
      this.filters.push(filter)
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.pushFilter({name: value.trim().toLowerCase()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  renderFamilies(item) {
    let result = item
      .families
      .reduce((str, family) => {
        return family.nombre + ", " + str 
      }, "")
    return result.substring(0, result.length - 2)
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      res => {
        this.rawSource = res.source
        this.source = new MatTableDataSource(res.source)
        this.source.filterPredicate = (data, filter): boolean => {
          let edad = (data.edad == 'AD') ? 'Adulto' : (data.edad == 'JO' ? 'Joven' : 'Atemporal');
          let genero = (data.genero == 'H' ? 'Hombre' : 'Mujer')
          let filters = filter.split(' ');
          filters = filters.slice(1, filters.length)
          let result =
            filters
              .some(_filter => {
                let pred = edad.toLowerCase().includes(_filter) ||
                  genero.toLowerCase().includes(_filter) ||
                  data.families.some(family => family.nombre.toLowerCase().includes(_filter)) ||
                  data.keywords.some(keyword => keyword.palabra_unica.toLowerCase().includes(_filter)) ||
                  data.intensities.some(intensity => intensity.tipo.toLowerCase().includes(_filter) || intensity.descripcion.toLowerCase().includes(_filter))
                return pred
              })
          return result
        }
      }
    )
  }

  insertOrDelete(event: MatSelectionListChange) {
    if (event.option.selected)
      this.pushFilter({name: event.option.value.toLowerCase()})    
    else
      this.filters = this.filters.filter(f => f.name != event.option.value.toLowerCase())

    this.applyFilter(null)
  }

  fa_olf()
  {
    return (this.rawSource.flatMap((res) => res.families.map(family => family.nombre)) as any[]).filter( onlyUnique )
  }
}
