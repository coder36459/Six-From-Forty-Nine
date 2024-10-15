const ball = [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3"), document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6")];
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const coupon = document.getElementById("coupon");
const reset = () => {for (let x = 0; x < 6; x++) {ball[x].innerText = "$";}}
const clear = c => {c.innerText = "";}
const balls = () => {let a = []; for (let x = 1; x < 50; x++) {a.push(x);} return a;}
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
reset();
const delay = b => {
	let i = 0, a = [], t;
	const d = () => {
		i++;
		a.push(i);
		if (a.length > 1) {
			clear(b);
			a.shift();
		}
		if (a[0] === 50) {
			i = 1;
		}
		b.innerText = i;
	}
	if (!t) {
		t = setInterval(d, 10);
	}
	stopBtn.addEventListener("click", () => {
		const f = sixBalls();
		for (let x = 0; x < 6; x++) {ball[x].innerText = f[x];}
		clearInterval(t);
		t = null;
		playBtn.style.display = "none";
		stopBtn.style.display = "none";
		resetBtn.style.display = "inline-block";
	});
	resetBtn.addEventListener("click", () => {
		reset();
		clearInterval(t);
		t = null;
		playBtn.style.display = "inline-block";
		resetBtn.style.display = "none";
		stopBtn.style.display = "none";
	});
}
playBtn.addEventListener("click", () => {
	for (let x = 0; x < 6; x++) {ball[x].innerText = delay(ball[x]) === undefined ? "$" : delay(ball[x]);}
	playBtn.style.display = "none";
	stopBtn.style.display = "inline-block";
});
const createCoupon = () => {
	let a = [];
	for (let x = 1; x <= 50; x++) {
		if (x === 1 || x === 11 || x === 21 || x === 31 || x === 41) {
			a.push("<tr><td>" + x + "</td>");
		}
		else if (x === 10 || x === 20 || x === 30 || x === 40 || x === 50) {
			if (x === 50) {
				a.push("<td></td></tr>");
			}
			else {
				a.push("<td>" + x + "</td></tr>");
			}
			
		}
		else {
			a.push("<td>" + x + "</td>");
		}
		
	}
	return coupon.innerHTML = `<table id="coupon-tab"><th colspan="10">Coupon</th>${a.join("")}</table>`
}
createCoupon();
