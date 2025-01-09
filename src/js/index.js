const audio = document.querySelector("audio");
const soundWave = document.querySelector(".sound-wave-container");
const container = document.querySelector(".container");

const themeColor = (color=true)=>{
    if(color){
        container.classList.add("color-theme");
    }
    else{
        container.classList.remove("color-theme"); 
    }
}
themeColor()

const toggleTheme = document.querySelector(".toggle-theme");
const dot = document.querySelector(".dot");

toggleTheme.addEventListener("click",()=>{
    const isOff =  toggleTheme.getAttribute("isOff");
    if(isOff === "true"){
        dot.classList.add("shift-on");
        dot.classList.remove("shift-off");
        toggleTheme.setAttribute("isOff","false");
        themeColor(false)
   }
   else{
        dot.classList.add("shift-off");
        dot.classList.remove("shift-on");
        toggleTheme.setAttribute("isOff","true");
        themeColor()
   }
})
soundWave.addEventListener("click",()=>{
    const isPlaying = soundWave.getAttribute("isPlaying");

    if (isPlaying === "false") {
        audio.play();
        soundWave.setAttribute("isPlaying", "true");
        document.querySelectorAll(".wave").forEach((wave)=>{
            if(wave.classList.contains("wave-1")){
                wave.classList.add("wave-animation");
                wave.style.animationDelay = "1s";
            }
            else if(wave.classList.contains("wave-2")){
                wave.classList.add("wave-animation");
                wave.style.animationDelay = "2s";
            }
            else{
                wave.classList.remove("wave-animation");
            }

        })

    } else {
        audio.pause();
        soundWave.setAttribute("isPlaying", "false");
        document.querySelectorAll(".wave").forEach((wave)=>{
            wave.classList.remove("wave-animation");
        })
    }
})

const social_links = {
    github:"https://www.github.com/zack1o1",
    facebook:"https://www.facebook.com/lalit.rajbanshi.3158",
    instagram:"https://www.instagram.com/lalitrajbanshi_"
}

const _links = document.querySelectorAll(".social-links-container a");

_links.forEach((link) =>{
    const name = link.getAttribute("data-name");
    if(name && social_links[name]){
        link.target = "_blank";
        link.href = social_links[name]
    }
})



const links_container = document.querySelector(".links-container");
const link_container = document.querySelectorAll(".link-container");

const linkMaker =(dataName,link="#",icon="")=>{
    const a = document.createElement("a");
    a.href = link;
    a.setAttribute('data-name', dataName);
    a.classList.add("link-container");

    const p = document.createElement('p');
    p.classList.add("link-text");
    p.textContent = dataName;
    
    if(icon){
        const img = document.createElement('img');
        img.src = icon;
        img.alt = dataName;
        a.appendChild(img);
    }
    
    a.appendChild(p);
    
    return a
    
}
const links = {
    youtube:{
        title:"YouTube",
        link:"https://www.youtube.com/@zack1o1",
        icon:"../../asset/social links/icon-youtube.svg"
    },
    date:{
        title:"see nepali date?",
        link:"https://nepaltime.netlify.app",
        icon:""
    },
    rps:{
        title:"Play Rock Paper Scissors",
        link:"https://zack1o1.github.io/rps",
        icon:""
    },
    fan:{
        title:"Feeling hot? Here's ur fan!",
        link:"https://zack1o1.github.io/fan",
        icon:""
    },
    drum:{
        title:"Make your own music",
        link:"https://zack1o1.github.io/Drum",
        icon:""
    },
    forex:{
        title:"see foregin exchange rate?",
        link:"https://zack1o1.github.io/forex-rate",
        icon:""
    }
}
const appendNew = (a,b,c="")=>links_container.appendChild(linkMaker(a,b,c));

Object.values(links).forEach((key)=>{
    const {title, link,icon} = key;
    appendNew(title,link,icon);
})

