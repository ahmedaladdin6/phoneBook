import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get(`${API_BASE}/users/`);
  }
  getUser(id) {
    return this.http.get(`${API_BASE}/user/${id}`);
  }
  
  addUser(payload) {
    return this.http.post(`${API_BASE}/user/`, payload);
  }
  editUser(payload, id) {
    return this.http.patch(`${API_BASE}/user/${id}`, payload)
  }

  deleteUser(id) {
    return this.http.delete(`${API_BASE}/user/${id}`);
  }
}







 
