import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private _http:HttpClient) { }
  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>(`${this.apiServerUrl}/login`,user);


  }
 public  registerUserFromRemote(user:User):Observable<any>{
  return this._http.post<any>(`${this.apiServerUrl}/registeruser`,user);

 }

public getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${this.apiServerUrl}/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<Employee>(`${this.apiServerUrl}/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this._http.put<Employee>(`${this.apiServerUrl}/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this._http.delete<void>(`${this.apiServerUrl}/delete/${employeeId}`);
  }
}
