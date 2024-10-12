const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const result = document.getElementById("result");
const balls = () => {let a = []; for(let x = 1; x < 50; x++) {a.push(x);} return a;}
const sixBalls = () => {
	const b = 6; let a = [];
	for (let x = 1; x <= b; x++) {
		const r = Math.floor(Math.random() * (balls().length) + 1);
		if (r > 0 && a.length <= b) {
			if (r != a.find(d => d === r)) {
				a.push(r);
			}
			else {x--;}
		}
		else {x--;}
	}
	return a;
}
/*
let c = false;
const delay = p => {
	let i = 0, a = [];
	const d = () => {
		i++;
		a.push(i);
		if (p === 1 && c == 1) {
			if (a.length > 1) {
				ball1.innerText = "";
				a.shift();
			}
			if (a[0] === 50) {
				i = 1;
			}
			ball1.innerText = i;
		}
	}
	const t = setInterval(d, 10);
	if (p === 1) {
		return t;
	}
	else if (p === 0) {
		return clearInterval(t);
	}
}
const play = () => {
	return c = true, delay(1);
}
setTimeout(play, 100);
const score = () => {
	return ball1.innerText = "", c = false, delay(0), ball1.innerText = c;
}
setTimeout(score, 5000);
*/
let b = false;
playBtn.addEventListener("click", () => {
	const a = sixBalls();
	if (b === false) {
		b1.innerText = a[0];
		b2.innerText = a[1];
		b3.innerText = a[2];
		b4.innerText = a[3];
		b5.innerText = a[4];
		b6.innerText = a[5];
		result.style.display = "block";
	}
	return b = true;
});
resetBtn.addEventListener("click", () => {
	b1.innerText = "";
	b2.innerText = "";
	b3.innerText = "";
	b4.innerText = "";
	b5.innerText = "";
	b6.innerText = "";
	result.style.display = "none";
	return b = false;
});
