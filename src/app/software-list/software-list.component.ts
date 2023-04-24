import { Component, OnInit } from '@angular/core';
import { Software } from '../software'
import { SoftwareService } from '../software.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {
  softwares: Software[] = [];
  name = '';
  

  constructor(private softwareService: SoftwareService,
    private router: Router) { }


  ngOnInit(): void {
    this.getSoftwares();
  }

  private getSoftwares(){
    this.softwareService.getSoftwaresList().subscribe(data => {
      this.softwares = data;  
    });
  }

  confirmsoftwareDetails(software:Software) {
    var status= confirm("Do you want to view this record?");
     if (status==true) {
       this.softwareDetails(software.id);
      }
     
      this.getSoftwares();
  }

  
  softwareDetails(id: number){
    this.router.navigate(['software-details', id]);
  }
  

  confirmUpdate(software: Software){
    var status= confirm("Do you want to update this record?");
     if (status==true) {
       this.updateSoftware(software.id);
      }
    this.getSoftwares();
  }


  updateSoftware(id: number){
    this.router.navigate(['update-software', id]);
  }
  
  confirmDelete(software: Software){
    var status= confirm("Are you sure want to delete this record?");
     if (status==true) {
       this.deleteSoftware(software.id);
      }
     
      this.getSoftwares();
  }



  deleteSoftware(id: number){
        this.softwareService.deleteSoftware(id).subscribe( data => {
        console.log(data);
        this.getSoftwares();
    })
  }



  confirmremoveAllSoftwares(){
    var status= confirm("Are you sure want to remove all this record? because once you remove all this record you can't retrieve back");
     if (status==true) {
       this.removeAllSoftwares();
      }
     
      
  }

  removeAllSoftwares() :void{
    this.softwareService.deleteAll().subscribe(data=>{
      console.log(data);
    },
    error =>{
      console.log(error);
    });
  }


  searchByName(){
    this.softwareService.findByName(this.name).subscribe(data=>{
      this.softwares = data;
      console.log(data);
    },
    error => {
       console.log(error);
    });

  }

  fetchByRatings1(){
    this.softwareService.findBysoftName1().subscribe(
      data => {
        this.softwares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  fetchByRatings2(){
    this.softwareService.findBysoftName2().subscribe(
      data => {
        this.softwares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  fetchByRatings3(){
    this.softwareService.findBysoftName3().subscribe(
      data => {
        this.softwares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  fetchByRatings4(){
    this.softwareService.findBysoftName4().subscribe(
      data => {
        this.softwares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  fetchByRatings5(){
    this.softwareService.findBysoftName5().subscribe(
      data => {
        this.softwares = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
