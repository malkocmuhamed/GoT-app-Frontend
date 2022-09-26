import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(['/login']);
    this.toastr.info("Login session has expired.");
  }

}
