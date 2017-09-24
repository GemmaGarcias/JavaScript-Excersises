function isString(value) {
	if((isNaN(value))&&(value!==null)&&	(value!==true||false)){
	return true
    }else
    { return false
    }
}

isString("k")