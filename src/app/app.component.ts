import {Component, HostListener, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWebSiteProject';
  color = '#182e70'; // Default Color
  missValue = false;
  gcdCal = false;
  speedTest = false;
  calculator = false;
  whereAmI = 0;
  result = false;
  GCDAnswer = 0;
  GCDu = -1;
  GCDv = 0;
  scrollNumber: number;
  calculationNumber = 0;
  imagesLotemWeb = ['https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Admin%20User.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Admin%20User%20-%20Order%20Handler.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Admin%20User%20-%20Edit%20Item.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Guest%20User.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Register.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Registered%20User%20.jpg',
    'https://raw.githubusercontent.com/yanivsu/Lotems_Store/master/Project%20Img/Registered%20User%20-%20Cart%20.jpg'];
  imageViewWebShare = ['../assets/LoginPage.jpg',
  '../assets/HomePage.jpg',
  '../assets/Countires.jpg',
  '../assets/IMG.jpg'];
  calculatrString = '';
  cv = '../assets/CV.pdf';
  // When we scroll down the page
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollNumber = number;
    console.log(this.scrollNumber);
    if (number > 1006 && this.whereAmI !== 1) {
      this.whereAmI = 1;
    }
    if (number > 2668 && this.whereAmI !== 2) {
      this.whereAmI = 2;
    }
    if (number > 3925 && this.whereAmI !== 3) {
      this.whereAmI = 3;
    }
    if (number > 20) {
      this.color = '#0275d8';
    } else if (number < 100) {
      this.color = '#182e70';
    }
  }
  // tslint:disable-next-line:variable-name
  ScrollDown(value: string, number: number) {
    const el = document.getElementById(value); // Get Value by ID
    this.whereAmI = number; //  Update the number
    el.scrollIntoView(); // Scroll to view
  }
  // convenience getter for easy access to form fields
  GCDCalcuator(number1: string, number2: string) {
    if (number1 === '' || number2 === '') {
      this.missValue = true;
    } else {
      this.missValue = false;
      let b = parseInt(number2, 10);
      let a = parseInt(number1, 10);
      // Calculator Of GCD
      let signX = (a < 0) ? -1 : 1,
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

  calculatorInsertFunction(value) {
    this.calculatrString += value.toString();
  }
  calculatorEqualFunction() {
    let exp = this.calculatrString;
    if (exp[0] === '*' || exp[0] === '/' || exp[0] === '+' || exp[0] === '-') {
      this.calculatrString = 'Error';
    } else if (exp) {
      // tslint:disable-next-line:no-eval
      this.calculatrString = eval(exp);
    }
  }
  calculatorDelFunction() {
    this.calculatrString = this.calculatrString.substring(0, this.calculatrString.length - 1);
  }
}
