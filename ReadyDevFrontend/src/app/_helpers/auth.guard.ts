import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        public toastr: ToastrService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (localStorage.getItem('jwt')?.length)
        {
            return true;
        }
        else
        {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            this.toastr.error("User is not authenticated.", "ACCESS DENIED");
            return false;
        }
          
    }
}