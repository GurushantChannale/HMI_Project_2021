import { Component, OnInit } from '@angular/core';
declare var ol: any;
import * as $ from 'jquery' 

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  per = 100;
  display = true;
  message = false;
  constructor() { }


  ngOnInit() {
//     var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

}
request(){
  this.display? this.display = false: this.display = true;

  this.display? this.message = false: this.message = true;
}

}

