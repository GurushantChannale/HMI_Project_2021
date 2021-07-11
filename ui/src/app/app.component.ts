import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';
  Request = true;
 myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  requestFun(){
    this.Request ? this.Request = false: this.Request= true;
  }

  
display(){
  document.getElementById('id01').style.display='block';
}
close(){
  document.getElementById('id01').style.display='none';
}
}
