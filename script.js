const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

function updateClock(){
  const now = new Date();
  const time = new Intl.DateTimeFormat("fa-IR", {hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(now);
  const date = new Intl.DateTimeFormat("fa-IR", {year:"numeric",month:"long",day:"numeric"}).format(now);
  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}
updateClock();
setInterval(updateClock, 1000);
