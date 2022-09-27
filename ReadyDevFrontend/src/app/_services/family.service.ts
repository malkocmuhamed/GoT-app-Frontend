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

    getfamiliesUrl = environment.baseUrl + '/api/family/getAllFamilies';
    familiesbyUserUrl = environment.baseUrl + '/api/family/getFamiliesByUser';
    postFamilyUrl = environment.baseUrl + '/api/family/postFamily';
    updateFamilyUrl = environment.baseUrl + '/api/family/editFamily';
    removeFamilyUrl = environment.baseUrl + '/api/family/removeFamily';

    constructor(private _http: HttpClient, public toastr: ToastrService) { }

    postFamily(family: Family) {
        return this._http.post<any>(this.postFamilyUrl, family);
    }
   
    getFamilyById(id: number): Observable<Family> {
        return this._http.get<Family>(this.getfamiliesUrl + '/' + id);
    }

    getFamiliesByUser(): Observable<Family[]> {
        return this._http.get<Family[]>(this.familiesbyUserUrl);
    }

    getAllFamilies(): Observable<Family[]> {
        return this._http.get<Family[]>(this.getfamiliesUrl);
    }

    editFamily(family: Family) {
        return this._http.put<any>(this.updateFamilyUrl, family);
    }

    deleteFamily(id: number) {
        this._http.delete(this.removeFamilyUrl + '/' + id).subscribe(
            data => {
                this.toastr.success('Family removed successfully.');
            }
        ) 
    }
}