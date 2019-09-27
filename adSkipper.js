let looper = setInterval(() => {
		const btn = document.querySelector(".ytp-ad-skip-button");
		console.log(btn);
		if(btn){
			btn.click();
			clearInterval(looper);
		}
	},3000);