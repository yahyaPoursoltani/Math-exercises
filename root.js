//Author: Yahya Poursoltani @ 9/7/1394 at 15:46 PM

//difine Your own function
var f = function(x){
	return x - 0.5*Math.cos(x);
}; //End Function
var sup = 10 ;   //Highest Boundry
var inf = -10 ;  //Lowest Boundry
var eps = 0.001; //Result Precision

// *********** Program Starts Here **************
while(Math.abs(f(roots = (sup + inf)/2))>eps ){
	if(f(sup)*f(roots)>0){
		sup=roots;
	}else{
		inf=roots;
	};
	roots = (sup + inf)/2;
};
console.log("Result : ", roots);

