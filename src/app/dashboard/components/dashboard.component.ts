import {Component, OnInit, ViewChild} from "@angular/core";
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {delay} from "rxjs/operators";
import {LocalstorageService} from "../../utils";

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showSpinner = false
  username: string = ""

  constructor(
    private observer: BreakpointObserver,
    private localStorageService: LocalstorageService
  ) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  profile(){

  }

  ngOnInit(): void {
    this.showSpinner = true
    this.username = this.localStorageService.getLocalUser().username
    this.showSpinner = false
  }

}
