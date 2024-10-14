const ball = [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3"), document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6")];
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
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
