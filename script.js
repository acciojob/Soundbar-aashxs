//your JS code here. If required.
let audios=document.querySelectorAll("audio")
let stop =document.getElementsByClassName(".stop")
let btns=document.querySelectorAll(".btn")
btns.forEach((value)=>{
	value.addEventListener("click",()=>{
		audios.forEach((aud)=>{
			if(btns.indexof(value)==audios.indexof(aud)){
				aud.play();
			}else{
				for (let index = 0; index < audios.length; index++) {
					if(btns.indexof(value)!=audios.indexof(aud)){
	                 audios[index].pause();
					}
			}
		})
	})
})
stop.addEventlistener("click",()=>{
for (let index = 0; index < audios.length; index++) {
	audios[index].pause();
	
}
	});