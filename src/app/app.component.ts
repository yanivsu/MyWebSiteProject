import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'MyWebSiteProject';
  color = '#182e70'; // Default Color
  missValue = false;
  result:boolean = false;
  GCDAnswer: number = 0;
  GCDu:number = 0;
  GCDv:number = 0;
  // When we scroll down the page
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 20) {
      this.color = '#0275d8';
    } else if (number < 100) {
      this.color = '#182e70';
    }
  }
  myFunc() {
    console.log('Clicked!');
  }
  ScrollDown(value: string) {
    let el = document.getElementById(value); // Get Value by ID
    el.scrollIntoView(); // Scroll to view
  }
  // convenience getter for easy access to form fields
  GCDCalcuator(number1: string, number2: string) {
    if (number1 === '' || number2 === '') {
      this.missValue = true;
    } else {
      this.missValue = false;
      let b = parseInt(number2);
      let a = parseInt(number1);
      // Calculator Of GCD
      var signX = (a < 0) ? -1 : 1,
        signY = (b < 0) ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q, r, m, n;
      a = Math.abs(a);
      b = Math.abs(b);
      while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
      }
      this.result = true;
      this.GCDAnswer = b;
      this.GCDu = signX * x;
      this.GCDv = signY * y;
    }

    }
}
