const calc = document.querySelector(".calc-form");
const bmi_btn = document.querySelector("#bmi-btn");
const guess_btn = document.querySelector("#guess-btn");
let link = "";
let img_link = "";
let indicator_text = "";
const btn = document.querySelector("#btn");
function random(number) {
	return Math.trunc(Math.random() * number) + 1;
}
function rgb() {
	return `rgb(${random(255)},${random(255)},${random(255)})`;
}

let shart = true;
bmi_btn.addEventListener("click", (e) => {
	e.preventDefault();
	document.getElementById("guess-block").style.display = "none";
	document.getElementById("gender-block").style.display = "block";
	document.getElementById("units").style.display = "block";
	document.getElementById("name-block").style.display = "block";
	document.getElementById("main-btn").textContent = "CALCULATE YOUR BMI";
	shart = true;
});

guess_btn.addEventListener("click", (e) => {
	e.preventDefault();
	document.getElementById("guess-block").style.display = "block";
	document.getElementById("gender-block").style.display = "none";
	document.getElementById("name-block").style.display = "none";
	document.getElementById("units").style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("main-btn").textContent = "PLAY";
	document.getElementById("section-block").style.width = "100rem";
	shart = false;
});
calc.addEventListener("submit", (e) => {
	e.preventDefault();
	document.body.style.background = `linear-gradient(${random(
		360
	)}deg,${rgb()},${rgb()},${rgb()})`;

	const ism = calc.ism.value;
	if (shart == true) {
		document.getElementById("result").style.display = "block";
		const height = calc["height-number"].value;
		const weight = calc["weight-number"].value;
		const age = calc["age-number"].value;
		const bmi = weight / (height / 100) ** 2;

		if (bmi < 18.5) {
			indicator_text = "juda ozg'in 😳";
			link = "https://darakchi.uz/oz/31304";
			img_link =
				"https://img.freepik.com/premium-vector/thin-man-exercising-lifting-barbell-cartoon-illustration-sticker-emoticon_10606-1957.jpg?w=2000";
		}
		if (bmi > 18.5 && bmi <= 24.9) {
			indicator_text = "normal 👌";
			img_link =
				"https://www.emoji.co.uk/files/emoji-one/activity-emoji-one/1691-person-with-ball.png";
			link = "https://darakchi.uz/oz/31304";
		}
		if (bmi > 25 && bmi <= 29.9) {
			indicator_text = "semizroq 😐";
			img_link =
				"https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
			link = "https://darakchi.uz/oz/31304";
		}
		if (bmi > 30 && bmi <= 34.9) {
			indicator_text = "semiz 😐";
			img_link =
				"https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
			link = "https://darakchi.uz/oz/31304";
		}
		if (bmi > 35 && bmi <= 39.9) {
			indicator_text = "juda semiz 😐";
			img_link =
				"https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
			link = "https://darakchi.uz/oz/31304";
		}
		if (bmi >= 40) {
			indicator_text = "juda juda semiz 😐";
			img_link =
				"https://www.shutterstock.com/image-illustration/fat-angry-stout-guy-evil-260nw-1520791505.jpg";
			link = "https://darakchi.uz/oz/31304";
		}
		document.getElementById("name-text").textContent = ism;
		document.getElementById("indicator").textContent = indicator_text;
		document.getElementById("result_link").href = link;
		document.getElementById("result_img").src = img_link;
		console.log(bmi);
	} else {
		const son = calc["guess-input"].value;
		const random_son = random(10);

		if (son == random_son) {
			document.getElementById("afsus-title").textContent =
				"Tabriklayman!🎉";
			document.getElementById("afsus-info").textContent = `Siz yutdingiz`;
			document.getElementById("guess-img").src =
				"https://img.freepik.com/premium-vector/you-win-lettering-pop-art-text-banner_185004-60.jpg?w=2000";
		} else {
			document.getElementById("afsus-title").textContent = "Afsus!😔";
			document.getElementById(
				"afsus-info"
			).textContent = `Men o'ylagan son ${random_son} edi! \nQaytadan urinib ko'ring`;
			document.getElementById("guess-img").src =
				"https://www.shutterstock.com/image-vector/pixel-inscription-you-lose-message-260nw-626229314.jpg";
		}
	}
});
