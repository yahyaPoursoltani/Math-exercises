//Author: Yahya Poursoltani @ 9/7/1394 at 15:46 PM


//Binary Equation Solver Constructor
var BinaryEqSolver = function(func, maxi, mini, precision){
	this.sup = maxi;      //Highest Boundry
	this.inf = mini;      //Lowest Boundry
	this.eps = precision; //Result Precision
	this.f=func;          //Function To Be Solved
}
//Add Binary Equation Solver Methods to its Prototype
BinaryEqSolver.prototype.result = function(){
	var root;
	while(Math.abs(this.f(root = (this.sup + this.inf)/2))>this.eps ){      
		if(this.f(this.sup)*this.f(root)>0) this.sup=root
		else this.inf=root;
	};
	return root;
};


//Program starts here
var test = new BinaryEqSolver(function(x){return x+1}, 10, -10, 0.001); 
console.log(test.result());

