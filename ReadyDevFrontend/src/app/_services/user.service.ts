import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { User } from "../_models/user.model";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    usersUrl = environment.baseUrl + '/api/user';

    constructor(private _http: HttpClient) { }

    postUser(user: User) {
        return this._http.post<any>(this.usersUrl, user);
    }

   
    getUserById(id: number): Observable<User> {
        return this._http.get<User>(this.usersUrl + '/' + id);
    }

    // getAllSongs(): Observable<Song[]> {
    //     return this._http.get<Song[]>(this.songsUrl);
    // }

    // deleteSong(id: number) {
    //     this._http.delete(this.songsUrl + '/' + id).subscribe(data => {
    //         alert("Song with ID " + id + ": Successfully removed!");
    //     });     
    // }
}