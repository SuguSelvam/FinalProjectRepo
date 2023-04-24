import { Component,  OnInit } from '@angular/core';
import { SoftwareService } from '../software.service';
import { Software } from '../software';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-software',
  templateUrl: './update-software.component.html',
  styleUrls: ['./update-software.component.css']
})
export class UpdateSoftwareComponent implements OnInit {
  id: number = 0;
  software: Software = new Software();
  constructor(private softwareService: SoftwareService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.softwareService.getSoftwareById(this.id).subscribe(data => {
      this.software = data;
    }, error => console.log(error));
  }

  confirmonSubmit(){
    var status= confirm("Software Record Updated Successfully");
     if (status==true) {
       this.onSubmit();
      }
      this.goToSoftwareList();
  }

onSubmit(){
  this.softwareService.updateSoftware(this.id, this.software).subscribe( data =>{
    console.log(data);
    this.goToSoftwareList();
  })
}

goToSoftwareList(){
    this.router.navigate(['/softwares']);
  }
}

