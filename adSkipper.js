let looper = setInterval(() => {
  const skipAdBtn = document.querySelector(".ytp-ad-skip-button");
  const overlayAdBtn = document.querySelector(".ytp-ad-overlay-close-button"); 
  if (skipAdBtn) {
    skipAdBtn.click();
    console.log("ad skipped");
  }else{
  	console.log("no skip button on screen");
  }
  if(overlayAdBtn){
  	overlayAdBtn.click();
  	console.log("ad closed");
  }else{
  	console.log("no overlay ad");
  }
}, 2000);
