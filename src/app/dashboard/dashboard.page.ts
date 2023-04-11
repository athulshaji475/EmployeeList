import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public uname=localStorage.getItem('uname')?.replace(/[&\/\\#,+()$~%.'":*?<>{}@0-9]/g, '')
  constructor() { }

  ngOnInit() {
  }

}
