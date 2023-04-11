import { Component, OnInit } from '@angular/core';
import { leave } from '../class/Leave';
import { Users } from '../class/employee';
import { LaveService } from 'Service/lave.service';
@Component({
  selector: 'app-leave-approving-admin',
  templateUrl: './leave-approving-admin.page.html',
  styleUrls: ['./leave-approving-admin.page.scss'],
})
export class LeaveApprovingAdminPage implements OnInit {

  public obj = new leave()
  public datas :any
  constructor(public leaveservice:LaveService) { 
this.GetAllList()
  }

  ngOnInit() {

    
  }


  //Get All data
  GetAllList()
  {
   this.leaveservice.getReportFoAdmin().subscribe((data)=>{
    //console.log(data)
  if(data)
  {
    this.datas=data

    
  }
   })
  }



  Approve(uname:String,date :any)
  {
   this.leaveservice.ApproveLeave(uname,date).subscribe((data:any)=>{
    alert("Leave Approved Successfully.....")
    this.GetAllList()
    //console.log(uname)
    //console.log(date)
    //console.log(id)
   })
  }


  Reject(uname:String,date:String)
{
  
    this.leaveservice.RejectLEave(uname,date,this.obj.comments).subscribe((data:any)=>{
console.log(uname)
    })
  }
  }
    
         
      
      //console.log(this.obj.comments)
        // console.log(uname)
         //console.log(date)
    
  



