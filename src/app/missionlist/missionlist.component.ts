import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexapiService } from '../spacexapi.service';
import { Subject } from 'rxjs';
import { Mission } from '../mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit, OnDestroy {

  themissions: Mission[]  = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private spaceService: SpacexapiService) { }

  ngOnInit(): void {
    
    
    this.spaceService.getMissions()
    .subscribe((res: any) => {
      console.log(res);
      console.log(this.themissions)
      this.themissions = res;
      console.log(this.themissions)
    })
    
    
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  

}
