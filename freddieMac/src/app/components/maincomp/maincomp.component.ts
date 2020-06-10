import { Component, OnInit } from '@angular/core';
import { ImgcompareService } from 'src/app/services/imgcompare.service';
import { ImgCompObj } from 'src/app/classes/imgCompObj/imgCompObj';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
  
  img1: string = null;
  img2: string = null;
  img3: string = null;

  aTobMsg:string = null;
  aTocMsg:string = null;
  

  constructor(private imgcompserv: ImgcompareService) { }

  ngOnInit(): void {
  }

  requestImgComparison(){
    //push the urls to the back-end, the back-end will send a response if the images were found online and respond with comparisons
    //make null in case the transaction fails, so there's some relative feedback to the user
    this.aTobMsg = null;
    this.aTocMsg = null;

    let imgCompObj: ImgCompObj = new ImgCompObj;
    imgCompObj.img1 = this.img1;
    imgCompObj.img2 = this.img2;
    imgCompObj.img3 = this.img3;
    this.imgcompserv.performImgCompare(imgCompObj).subscribe(msgStack=>{
      console.log('response from api is...')
      console.log(msgStack);
      console.log('attempting logging properties of msg stack');
      console.log(msgStack.imgAtoB + "is message 1");
      console.log(msgStack.imgAtoC + "is msg2");
      if(msgStack.success == true){
        console.log(msgStack.imgAtoB + "is message 1(inside msgStack.success condition)");
        console.log(msgStack.imgAtoC + "is msg2 message 1(inside msgStack.success condition)");
        console.log("assigning aToB and aToC");
        this.aTobMsg = msgStack.imgAtoB;
        this.aTocMsg = msgStack.imgAtoC;
      }

    }, error =>
    {console.log(error);
      

     this.aTobMsg = "Error in image search/server connection";
    });
  }

    
  

}
