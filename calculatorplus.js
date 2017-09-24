function calculator (){
	var operation= arguments[0]
	if (operation==="sum"){
		var result=0
		for(var i=1; i<arguments.length; i++){
			result+= arguments[i]
		}
		return result
	}else if (operation==="resta"){
	var result=arguments[1]
	for(var i=2; i<arguments.length; i++){
		result -= arguments[i]
	}
	
	return result
	}
}
calculator("sum",8,8,8,4,3)
