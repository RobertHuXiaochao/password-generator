const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

let passwordOne = document.getElementById("password1");

let passwordTwo = document.getElementById("password2");

let clickToCopy = document.getElementById("click-to-copy");

function generatePassword() {
	passwordOne.textContent = " ";
	passwordTwo.textContent = " ";
	for (let i = 0; i < 15; i++) {
		let randomChracter1 =
			characters[Math.floor(Math.random() * characters.length)];
		let randomChracter2 =
			characters[Math.floor(Math.random() * characters.length)];
		passwordOne.textContent += randomChracter1;
		passwordTwo.textContent += randomChracter2;
	}

	clickToCopy.textContent = "Click to copy:";

	passwordOne.addEventListener("click", function () {
		navigator.clipboard.writeText(passwordOne.textContent);
		clickToCopy.textContent = "Password one copied!";
	});

	passwordTwo.addEventListener("click", function () {
		navigator.clipboard.writeText(passwordTwo.textContent);
		clickToCopy.textContent = "Password two copied!";
	});
}
