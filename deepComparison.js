function deepEqual(input1,input2){
	if((input1==null)||(input2==null)){
	return "incorrect type";    
}
	else if (input1==input2){
		return typeOf(input1);
        }
	else if(input1===input2){
		return typeOf(input1);
        }
        }
console.log(deepEqual(([1,2,3,4]),([4,3,2,1])));
	