import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Branch {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  private branchesUrl = 'assets/data/branches.json';

  constructor(private http: HttpClient) {}
  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.branchesUrl);
  }
}
