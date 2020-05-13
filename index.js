// gechengdong
let gcd;
gcd = 10;
console.log(gcd * 2);
console.log(gcd % 3);
console.log(Math.floor(gcd / 3));

// zhangweiming   left
let zwm;
zwm = "20";
console.log(gcd + zwm);
if (gcd===zwm){
  console.log(true);
}
  else{
    console.log(false);
  }

  if (gcd > zwm ) {
    console.log(gcd);
  }
  else{
    console.log(zwm);
  }
console.log(gcd > zwm ? true : false);

/*let score;
scroe = 50;
if (score >=80) {
  console.log(exellent);
} eles {
  if (score >=60) {
    console.log(pass);
  } else {
    console.log(Notpass);
  }
}*/

  let arr=[];
  arr=[1,2,3,4,5];
  arr[6]="gcd";
  console.log(arr[5]);

  for(let j=0;j<6;j++){
    console.log(arr[j])
  }
  
