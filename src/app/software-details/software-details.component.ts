import { Component, OnInit  } from '@angular/core';
import { Software } from '../software';
import { ActivatedRoute } from '@angular/router';
import { SoftwareService } from '../software.service';

@Component({
  selector: 'app-software-details',
  templateUrl: './software-details.component.html',
  styleUrls: ['./software-details.component.css']
})
export class SoftwareDetailsComponent implements OnInit {
  id: number = 0;
  software: any = [];
  constructor(private route: ActivatedRoute, private softwareService: SoftwareService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.software = new Software();
    this.softwareService.getSoftwareById(this.id).subscribe( data => {
      this.software = data;
    });
  }

}
