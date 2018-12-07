//set count

if(localStorage.getItem("count" == null)){
	localStorage.setItem("count", 0)
}

//update
function update(){
document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

function plusOne(){

	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
	update()
}

function reset(){

	if(confirm("ARE YOU SURE YOU WANT TO RESET")){

		localStorage.setItem("count", 0)
		update()

	}
}


