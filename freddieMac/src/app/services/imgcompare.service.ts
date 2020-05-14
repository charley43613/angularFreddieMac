import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImgCompObj } from '../classes/imgCompObj/imgCompObj';
import { MsgStack } from '../classes/msgStack/MsgStack';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImgcompareService {


  constructor(private httpClient: HttpClient) { }
  baseurl = `http://localhost:8080/`;
  imgCompApi = `img-service-fm/awsImg/doit`;
  // baseurl = `http://localhost:9000/`;
  // imgCompApi = `awsImg/doit`;
  

  performImgCompare(imgCompObj: ImgCompObj): Observable<MsgStack>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    console.log(imgCompObj.img1);
    console.log(imgCompObj.img2);
    console.log(imgCompObj.img3);
    // expecting 2 strings back, with boolean of true
    return this.httpClient.post<MsgStack>(`${this.baseurl}${this.imgCompApi}`, imgCompObj);
    // ,
    // {
    //   headers: {'Access-Control-Allow-Origin': '*'}}
  }

}
