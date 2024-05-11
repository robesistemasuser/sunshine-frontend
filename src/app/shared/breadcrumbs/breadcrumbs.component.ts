import { Component, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, ActivationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) {

    this.tituloSubs$ = this.getArgumentosRuta()
                        .subscribe(({ titulo }) => {
                            this.titulo = titulo;
                            document.title = `Sunshine - ${ titulo }`;
                        });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {

    return this.router.events
      .pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      );
  }
}
