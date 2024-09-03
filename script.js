//your JS code here. If required.
let audios=document.querySelectorAll("audio")
let stopp =document.getElementsByClassName("stop")
let btns=document.querySelectorAll(".btn")
btns.forEach((value)=>{
	value.addEventListener("click",()=>{
		audios.forEach((aud)=>{
			if(btns.indexof(value)==audios.indexof(aud)){
				aud.play();
			}else{
				for (let index = 0; index < audios.length; index++) {
					if(btns.indexOf(value)!=audios.indexOf(aud)){
	                 audios[index].pause();
					}
				}
			}
		})
	})
});
stopp.addEventListener("click",()=>{
for (let index = 0; index < audios.length; index++) {
	audios[index].pause();
	
}
	});