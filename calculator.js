function calculator (operation, num1,num2){
	return operation(num1,num2)
}

function sum(num1,num2){
	return num1+num2
}
var sumString= sum(num1, num2)

function multiply(num1,num2){
	return num1*num2
}

calculator(sum,2,5)