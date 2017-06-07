// console.log("works");
//ways to increment value of x by 1--------------
// var x=5;//global variable
// console.log(x);
// x+=1;
// console.log(x);
// x++;
// console.log(x);
// x=x+1;
// console.log(x);

//decrement y by 1----------------------------------
// var y=8;
// y-=1;
// console.log(y);
// y--;
// console.log(y);
// y=y-1;
// console.log(y);

//multiply z by 2---------------------------------
// var z=8;
// z=z*2;
// console.log(z);
// z*=2;
// console.log(z);

//divide a by 2------------------------------------
// var a=8;
// a=a/2;
// console.log(a);
// a/=2;
// console.log(a);


// modulus returns remainder when b divided by 2----
// var b=17;
// b=b%2;
// console.log(b);
// b%=2;
// console.log(b);


function evenOdd(num){
	var test=num%2;
	if(test===0){
		console.log('The number is Even');
	}
	else if(test===1){

		console.log('The number is Odd');

	}
	else{
		console.log('please give a number');
	}
}
evenOdd(10);




















