// setInterval(() => {
// 	if(performance.navigation.type == 1){
// 	console.log("page reloaded");
// }else{
// 	console.log("not reloaded");
// }
// },1000);

// window.onhashchange = () => {
// 	const video = document.querySelector(".ytp-iv-video-content");
// 	console.log(video);
// 	let counter = 0;
// 	console.log("page reloaded");
// };
let looper = setInterval(() => {
			const btn = document.querySelector(".ytp-ad-skip-button");
			// counter++;
			console.log("no skip button on screen");
			// if(counter<10){
				if(btn){
					btn.click();
					console.log("clicked!");
					// clearInterval(looper);
				}
			// }	
		},2000);
