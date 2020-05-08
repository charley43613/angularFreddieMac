import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImgCompObj } from '../classes/imgCompObj/imgCompObj';


@Injectable({
  providedIn: 'root'
})
export class ImgcompareService {

  constructor(private httpClient: HttpClient) { }
  baseurl = `http://localhost:9009`;
  imgCompApi = `/appname`

  performImgCompare(img1: string, img2: string, img3: string){
    let imgCompObj1 = new ImgCompObj();
    imgCompObj1.img1 = img1;
    imgCompObj1.img2 = img2;
    imgCompObj1.img3 = img3;
    return this.httpClient.post(`${this.baseurl}${this.imgCompApi}`, imgCompObj1);

  }

}
