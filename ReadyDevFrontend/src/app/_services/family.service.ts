import { Family } from "../_models/family.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
    providedIn: 'root'
})
export class FamilyService {

    familiesUrl = environment.baseUrl + '/api/family';

    constructor(private _http: HttpClient, public toastr: ToastrService) { }

    postFamily(family: Family) {
        return this._http.post<any>(this.familiesUrl, family);
    }
   
    getFamilyById(id: number): Observable<Family> {
        return this._http.get<Family>(this.familiesUrl + '/' + id);
    }

    getAllFamilies(): Observable<Family[]> {
        return this._http.get<Family[]>(this.familiesUrl);
    }

    editFamily(family: Family) {
        return this._http.put<any>(this.familiesUrl, family);
    }

    deleteFamily(id: number) {
        this._http.delete(this.familiesUrl + '/' + id).subscribe(data => {
            this.toastr.success('Family removed successfully.');
        });     
    }
}