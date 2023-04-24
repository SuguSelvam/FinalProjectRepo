import { Component, OnInit} from '@angular/core';
import { Software } from '../software';
import { SoftwareService } from '../software.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-software',
  templateUrl: './create-software.component.html',
  styleUrls: ['./create-software.component.css']
})

export class CreateSoftwareComponent implements OnInit {
  software: Software = new Software();
  constructor(private softwareService: SoftwareService,
    private router: Router) { }

  ngOnInit(): void {
  }


  saveSoftware(){
    this.softwareService.createSoftware(this.software).subscribe( data =>{
      console.log(data);
      this.goToSoftwareList();
    },
    error => console.log(error));
    
  }

  goToSoftwareList(){
    this.router.navigate(['/softwares']);
  }


  confirmonSubmit(){
    var status= confirm("Software Created Succesfully");
     if (status==true) {
       this.onSubmit();
          }
     
      this.goToSoftwareList();
          }
  
  onSubmit(){
    console.log(this.software);
    this.saveSoftware();
  }

}
