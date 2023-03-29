// Nav Section (pc)
const navLinks = document.querySelectorAll('.hdrN li');
/* preloader */
const preloader = document.querySelector('.preloader');
preloader.style.opacity = '1';
preloader.style.visibility = 'visible';
setTimeout(()=>{    
 preloader.style.opacity = '0';
 preloader.style.visibility = 'hidden';
},1000);
/* hehe */
Array.from(navLinks).forEach((e)=>{
  e.addEventListener('click',(c)=>{
    clickAudio.play();
    if(e.textContent == 'Cookies'){
      window.location.href = `https://${window.location.host}/cookie-clicker-3/`;
    }
    else if(e.textContent == 'Progress'){
      window.location.href = '?tab=progress';
    }
    else if(e.textContent == 'Upgrades'){
      window.location.href = '?tab=upgrades';
    }
    else if(e.textContent == 'Reset'){
      window.location.href = '?tab=reset';
    }
  });
});

// nav Section
let nav,navOpenClose;
nav = document.querySelector('#nav');
navOpenClose = document.querySelector('.hItms');
nav.addEventListener('click',()=>{
  clickAudio.play();
  if(navOpenClose.style.display == 'none' && nav.style.transform == 'rotate(-90deg)'){
    navOpenClose.style.display = 'grid';
    nav.style.transform = 'rotate(90deg)';
  }
  else{
    navOpenClose.style.display = 'none';
    nav.style.transform = 'rotate(-90deg)';
  }
});

// toggleNav && toggle Sections
const cookieSection = document.querySelector('.cke');
const progressSection = document.querySelector('.progress');
const upgradesSection = document.querySelector('.upgs');
const title = document.querySelector('title');
const query = new URL(window.location.href).searchParams;

if(query.getAll('tab') == 'cookies'){
  window.location.href = `https://${window.location.host}/cookie-clicker-3/`;
}
else if(query.getAll('tab') == 'progress'){
  navLinks[0].classList = '';
  navLinks[1].classList = 'active';
  cookieSection.style.display = 'none';
  progressSection.style.display = 'grid';
  title.textContent += ' - Progress';
}
else if(query.getAll('tab') == 'upgrades'){
  navLinks[0].classList = '';
  navLinks[2].classList = 'active';
  cookieSection.style.display = 'none';
  upgradesSection.style.display = 'grid';
  title.textContent += ' - Upgrades';
}
else if(query.getAll('tab') == 'reset'){
  navLinks[0].classList = '';
  navLinks[3].classList = 'active';
  let ghj = confirm('are you sure?');
  title.textContent += ' - Reset';
  if(ghj){
    localStorage.clear();
    window.location.href = `https://${window.location.host}/`;
  }
  else{
    window.location.href = `https://${window.location.host}/`;
  }
}

// Cookies Section
let totalClicks,cpcText,cpsText,cpc,cps,level,childSheffs,cheffs,workersN,factoryN;
const cookieText = document.querySelector('.cTx span');
const cookieImage = document.querySelector('.cIt img');
const clickText = document.querySelector('.ttcc');
cpcText = document.querySelector('.cpcc');
cpsText = document.querySelector('.cpss');

/* audios */
let bgAudio,clickAudio,cookieAudio;
bgAudio = new Audio('https://cookie-clicker-3.rahul9808.repl.co/bg.mp3');
clickAudio = new Audio('https://cookie-clicker-3.rahul9808.repl.co/click.mp3');
cookieAudio = new Audio('https://cookie-clicker-3.rahul9808.repl.co/download.mp3');

/* looping and playing audio */
bgAudio.loop = true;
bgAudio.play();

/* stats */
totalCookies = parseInt(localStorage.getItem('cookies')) || 0;
cpc = parseInt(localStorage.getItem('cpc')) || 1;
cps = parseInt(localStorage.getItem('cps')) || 0;
totalClicks = parseInt(localStorage.getItem('click')) || 0;
level = parseInt(localStorage.getItem('levels')) || 0;
childSheffs = parseInt(localStorage.getItem('child-sheff')) || 0;
grandMas = parseInt(localStorage.getItem('grand-ma')) || 0;
cheffs = parseInt(localStorage.getItem('cheff')) || 0;
workersN = parseInt(localStorage.getItem('workers')) || 0;
factoryN = parseInt(localStorage.getItem('factory')) || 0;

/* adding Stats */
cpcText.textContent = `Cookies Per Click - ${cpc}`;
cpsText.textContent = `Cookies Per Second - ${cps}`;
clickText.textContent = `Total Clicks - ${totalClicks}`;


/* setting cookies */
cookieImage.addEventListener('click',()=>{
  setLevels();
  cookieAudio.play();
  cookieImage.style.animation = 'ulli .5s forwards';
  setTimeout(()=>{
  cookieImage.style.animation = '';
  },500);
  totalCookies += cpc;
  totalClicks += 1;
  localStorage.setItem('cookies',totalCookies);
  localStorage.setItem('click',totalClicks);
  cookieText.textContent = totalCookies >= 1 ? `${totalCookies} Cookies` : `Click Cookie To Start`;
  clickText.textContent = `Total Clicks - ${totalClicks}`;
});

/* function to update cps */
const upgt = () => {
  if(cps >= 1){
    setInterval(()=>{
     totalCookies += cps;
     localStorage.setItem('cookies',totalCookies);
     cookieText.textContent = totalCookies >= 1 ? `${totalCookies} Cookies` : `Click Cookie To Start`;
     nCookies.textContent = `${totalCookies} Cookies`;
      setLevels();
    },1000);
  }
};

/* setting cookie per second if cps is greater than or equal to 1 */
if(cps >= 1){
  upgt();
}

/* else updating text */
else{
  cookieText.textContent = totalCookies >= 1 ? `${totalCookies} Cookies` : `Click Cookie To Start`;
}

// levels Logic
/* setting levels value */
const levels = [
  100,210,310,410,510,610,710,810,910,1100,1300,1500,1700,
  1900,2300,2700,3100,3600,7200,7700,8400,9100,12000,
  10000,21000,31000,41000,51000,61000,71000,81000,91000,
  110000,130000,150000,170000,190000,230000,270000,310000,
  360000,720000,770000,840000,910000,1200000
];

/* setting levels */
const levelsE = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
  30,31,32,32,34,35,36,37,38,38,40,41,42,43,45,46
];

/* if levels is equal to totalCookies then levels will be levelsE[i] */
const setLevels = () => {
 for(let i = 0;i < levels.length;i++){
  if(levels[i] == parseInt(localStorage.getItem('cookies'))){
    level = levelsE[i];
    localStorage.setItem('levels',level);
   }
 }
};

// progress Section
const progressDIv = document.querySelector('.poijh');
let nLevels,nCookies,nWorkers,nFactory,nGrand,nKid,nCheif,nCursor;
nLevels = document.querySelector('.nLevels');
nCookies = document.querySelector('.nCookies');
nWorker = document.querySelector('.nWorker');
nFactory = document.querySelector('.nFactory');
nGrand = document.querySelector('.nGrand');
nKid = document.querySelector('.nKid');
nCheif = document.querySelector('.nCheff');
nCursor = document.querySelector('.nCursor');

nLevels.textContent = `${level} Levels`;
nCookies.textContent = `${totalCookies} Cookies`;
nWorker.textContent = `${workersN} Workers`;
nFactory.textContent = `${factoryN} Factory`;
nGrand.textContent = `${grandMas} Grand-Ma`;
nKid.textContent = `${childSheffs} Child-Chef`;
nCheif.textContent = `${cheffs} Cheffs`;
nCursor.textContent = `${cpc} Cursors`;

setLevels();

// upgrades Logic
const upgradesItems = document.querySelector('#upgItms');
let cur,kd,gm,ch,wr,fc;
cur = document.querySelector('.cursor');
/*  cursor */
cur.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 150){
    cpc += 1;
    localStorage.setItem('cpc',cpc);
    cur.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    cur.style.animation = '';
    },500);
    totalCookies = totalCookies - 150;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});

/* kid */
kd = document.querySelector('.kid');
kd.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 1100){
    childSheffs += 1;
    cps += 1;
    localStorage.setItem('cps',cps);
    localStorage.setItem('child-sheff',childSheffs);
    kd.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    kd.style.animation = '';
    },500);
    totalCookies = totalCookies - 1100;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});

/* grandma  */
gm = document.querySelector('.grandMa');
gm.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 5500){
    grandMas += 1;
    cps += 6;
    localStorage.setItem('cps',cps);
    localStorage.setItem('grand-ma',grandMas);
    gm.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    gm.style.animation = '';
    },500);
    totalCookies = totalCookies - 5500;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});

/* cheif */
ch = document.querySelector('.cheif');
ch.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 11000){
    cheffs += 1;
    cps += 18;
    localStorage.setItem('cps',cps);
    localStorage.setItem('cheff',cheffs);
    ch.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    ch.style.animation = '';
    },500);
    totalCookies = totalCookies - 11000;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});

/* workers */
wr = document.querySelector('.worker');
wr.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 500000){
    workersN += 1;
    cps += 67;
    localStorage.setItem('cps',cps);
    localStorage.setItem('workers',workersN);
    wr.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    wr.style.animation = '';
    },500);
    totalCookies = totalCookies - 500000;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});

/* factory */
fc = document.querySelector('.worker');
fc.addEventListener('click',()=>{
  if(parseInt(totalCookies) >= 1500000){
    factoryN += 1;
    cps += 300;
    localStorage.setItem('cps',cps);
    localStorage.setItem('workers',factoryN);
    fc.style.animation = 'ulli .5s forwards';
    setTimeout(()=>{
    fc.style.animation = '';
    },500);
    totalCookies = totalCookies - 1500000;
    localStorage.setItem('cookies',totalCookies);
    setLevels();
    clickAudio.play();
  }
});
