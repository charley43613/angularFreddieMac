import { Component, OnInit } from '@angular/core';
import { ImgcompareService } from 'src/app/services/imgcompare.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
  
  imgASrc:string;
  imgBSrc:string;
  imgCSrc:string;

  aTobMsg:string;
  aTocMsg:string;
  

  constructor(private imgcompserv: ImgcompareService) { }

  ngOnInit(): void {
  }

  requestImgComparison(){
    //push the urls to the back-end, the back-end will send a response if the images were found online and respond with comparisons
    this.imgcompserv.performImgCompare(this.imgASrc, this.imgBSrc, this.imgCSrc).subscribe(msgStack=>{
      console.log(msgStack);
      if(msgStack.success == true){
        this.aTobMsg = msgStack.msg1;
        this.aTocMsg = msgStack.msg2;
      }

    }, error =>
    console.log(error));
  }

}
