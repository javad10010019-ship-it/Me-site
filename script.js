const intro = document.getElementById('intro');
window.addEventListener('load', () => setTimeout(() => intro.classList.add('hide'), 1700));

const clock = document.getElementById('clock');
const date = document.getElementById('date');
function updateClock(){
  const now = new Date();
  clock.textContent = new Intl.DateTimeFormat('fa-IR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(now);
  date.textContent = new Intl.DateTimeFormat('fa-IR',{weekday:'long',day:'numeric',month:'long'}).format(now);
}
updateClock(); setInterval(updateClock,1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const audio = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const player = document.querySelector('.music-player');
musicToggle.addEventListener('click', async () => {
  if(audio.paused){
    try { await audio.play(); musicToggle.textContent='Ⅱ'; player.classList.add('playing'); }
    catch(e){ musicToggle.textContent='▶'; }
  } else { audio.pause(); musicToggle.textContent='▶'; player.classList.remove('playing'); }
});
audio.addEventListener('ended',()=>{musicToggle.textContent='▶';player.classList.remove('playing');});

document.getElementById('menuToggle').addEventListener('click',()=>document.querySelector('.topbar nav').classList.toggle('open'));
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.topbar nav').classList.remove('open')));

// Hide broken image icons until the final personal photos are added.
document.querySelectorAll('.photo-slot img').forEach(img=>{
  img.addEventListener('error',()=>{img.style.display='none';});
});
