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
let c = false;
const delay = p => {
	let i = 0, a = [];
	const d = () => {
		i++;
		a.push(i);
		if (p === 1 && c == 1) {
			if (a.length > 1) {
				console.clear();
				a.shift();
			}
			if (a[0] === 50) {
				i = 1;
			}
			console.log(i);
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
	return console.clear(), c = false, delay(0), console.log(c);
}
setTimeout(score, 5000);
