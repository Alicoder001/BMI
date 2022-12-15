const calc = document.querySelector(".calc-form");

let link = "";
let img_link = "";
let indicator_text = "";

calc.addEventListener("submit", (e) => {
	e.preventDefault();
	document.getElementById("result").style.display = "block";
	const ism = calc.ism.value;
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
});
