//Powered by Yahya Poursoltani @ 9/7/1394 at 15:46 PM
//get suprimum & infimum
var sup = 10 ;
var inf = -10 ;
var roots = (sup + inf)/2;
var eps = 0.001;
//difine Your own function
var f = function(x){
	return x - 0.5*Math.cos(x);
};

 while(Math.abs(f(roots))>eps ){
	if(f(sup)*f(roots)>0){
		sup=roots;
	}else{
		inf=roots;
	};
	roots = (sup + inf)/2;
 };
console.log("Result : ", roots);


//end*****
