
export function rounded(value, max, min = 0) {
	if(isNaN(value)) 
		return min
	return value < min ? max + (value % max) : value % max
}
export function random(begin, end) {
	return Math.floor(Math.random() * end)
}

export function is_undefined(value){
	return value == undefined ? '':value;
}

export function file_from_path(path){
	//FIXME Path sparator on linux is different than windows
	return path.slice(path.lastIndexOf('/')+1)
}
