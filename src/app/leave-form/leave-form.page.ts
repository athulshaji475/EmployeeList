import { Component, OnInit } from '@angular/core';
import { leave } from '../class/Leave';
import { LaveService } from 'Service/lave.service';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.page.html',
  styleUrls: ['./leave-form.page.scss'],
})
export class LeaveFormPage implements OnInit {


public leave=new leave() //public function 
public user=localStorage.getItem('uname')

  constructor(public lvservice:LaveService) { 
    console.log(  localStorage.getItem('uname'))
  }



  //apply for leave
 ApplyLeave()
{
  console.log(this.leave.applieddate);
  //this.leave.username=this.user
this.lvservice.SetLeave(this.leave).subscribe((data:any)=>{
if(data)
{
  if (data[0].Id> 0 && data[0].Error == 0) {
    alert("Inserted Successfully!");
    
  }
 this.refresh()
}
})
}


refresh()
{
  this.leave.Lid=0
  this.leave.applieddate=''
  this.leave.email=""
  this.leave.leavereson=""
  this.leave.noofdays=0
  this.leave.status=0
  this.leave.type=''
}


  ngOnInit() {
  }

}
