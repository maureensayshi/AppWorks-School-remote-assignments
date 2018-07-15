function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
console.log("exercise2 way1:", calculate({n1 : 1, n2 : 5, op : '+'}));

var arg2 = {};
arg2.n1 = 10;
arg2.n2 = 5;
arg2.op = '-';
console.log("exercise2 way2:", calculate(arg2));
