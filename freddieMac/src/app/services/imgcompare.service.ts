import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImgCompObj } from '../classes/imgCompObj/imgCompObj';
import { MsgStack } from '../classes/msgStack/MsgStack';


@Injectable({
  providedIn: 'root'
})
export class ImgcompareService {


  constructor(private httpClient: HttpClient) { }
  baseurl = `http://localhost:8080/`;
  imgCompApi = `img-service-fm/awsImg/doit`;

  performImgCompare(imgCompObj: ImgCompObj){
    console.log(imgCompObj.img1);
    console.log(imgCompObj.img2);
    console.log(imgCompObj.img3);
    // expecting 2 strings back, with boolean of true
    return this.httpClient.post<MsgStack>(`${this.baseurl}${this.imgCompApi}`, imgCompObj);

  }

}
