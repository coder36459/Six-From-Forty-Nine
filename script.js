const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
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

const clear = c => {
	c.innerText = "";
	}

let btn;
	
const delay = b => {
	let i = 0, a = [], t;
	const d = () => {
		i++;
		a.push(i);
		if (a.length > 1) {
			clear(b);
			a.shift();
		}
		if (a[0] === 5) {
			i = 1;
		}
		return b.innerText = i;
	}
	if (!t) {
		t = setInterval(d, 1000);
	}
	stopBtn.addEventListener("click", () => {
		const f = sixBalls();
		b1.innerText = f[0];
		b2.innerText = f[1];
		b3.innerText = f[2];
		b4.innerText = f[3];
		b5.innerText = f[4];
		b6.innerText = f[5];
		result.style.display = "block";
		clearInterval(t);
		t = null;
		return btn = "stop";
	});
}



//delay();
/*
const play = () => {
	return c = true, delay(1);
}
setTimeout(play, 100);
const score = () => {
	return console.clear(), c = false, delay(0), console.log(c);
}
setTimeout(score, 5000);
*/




playBtn.addEventListener("click", () => {
	if (btn !== "play") {
		result.style.display = "block";
		b1.innerText = delay(b1);//a[0];
		b2.innerText = delay(b2);//a[1];
		b3.innerText = delay(b3);//a[2];
		b4.innerText = delay(b4);//a[3];
		b5.innerText = delay(b5);//a[4];
		b6.innerText = delay(b6);//a[5];	
	}
	return btn = "play";
});

const reset = () => {
	b1.innerText = "";
	b2.innerText = "";
	b3.innerText = "";
	b4.innerText = "";
	b5.innerText = "";
	b6.innerText = "";
}

resetBtn.addEventListener("click", () => {
	reset();
	result.style.display = "none";
	return btn = "reset";
});
