//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let arr = [], articles = [];
for (let i=0; i<touristSpots.length; i++) {
	let newArr = touristSpots.split(" ");
	if (newArr[0] === "a" || newArr[0] === "an" || newArr[0] === "the") {
		let str = "";
		articles[i] = newArr[0];
		for (let j=1; j<newArr.length; j++) {
			str += newArr[j];
		}
		arr[i] = str;
	}
	else {
		articles[i] = "";
		arr[i] = touristSpots[i];
	}
}

Arrays.sort(arr);

let finalArr = articles+arr;
let ulElement = document.getElementByTagName("ul");
for (let i=0; i<finalArr.length; i++) {
	let newLi = document.createElement("li");
	newLi.innerText = finalArr[i];
	ulElement.append(newLi);
}
