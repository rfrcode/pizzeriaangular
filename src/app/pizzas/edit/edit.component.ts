//import { switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  pizzaId: string;

  constructor(
    private route: ActivatedRoute,
    //private service: HeroService
  ) {
    this.pizzaId = route.snapshot.params.id;
  }


/*   ngOnInit() {
    this.pizzaId$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('id'))
    );
  } */

}
