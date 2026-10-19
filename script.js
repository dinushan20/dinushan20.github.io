/* Shared navigation, subtle page entrance and verified metric counts.
   Works entirely offline and respects reduced-motion preferences. */
document.documentElement.classList.add('js');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const year = document.querySelector('#year');
if(year) year.textContent = new Date().getFullYear();
if(navToggle && siteNav){
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && siteNav.classList.contains('open')){
      siteNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}
const revealElements = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && 'IntersectionObserver' in window){
  const revealObserver = new IntersectionObserver((entries,observer) => {
    for(const entry of entries){
      if(!entry.isIntersecting) continue;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }, {threshold:.08,rootMargin:'0px 0px 80px 0px'});
  revealElements.forEach(el => revealObserver.observe(el));
}else{revealElements.forEach(el => el.classList.add('visible'));}
const metrics = document.querySelectorAll('[data-count]');
const animateCount = (element) => {
  const target=Number(element.dataset.count);
  const pad=Math.max(0,Number(element.dataset.pad)||0);
  const suffix=element.dataset.suffix||'';
  const format=(n)=>String(n).padStart(pad,'0')+suffix;
  if(reduceMotion){element.textContent=format(target);return;}
  const duration=1000, start=performance.now();
  function tick(now){
    const elapsed=Math.min(1,(now-start)/duration);
    const progress=1-Math.pow(1-elapsed,3);
    element.textContent=format(Math.round(progress*target));
    if(elapsed<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};
if('IntersectionObserver' in window){
  const counterObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){animateCount(entry.target);observer.unobserve(entry.target);}});
  }, {threshold:.55});
  metrics.forEach(el=>counterObserver.observe(el));
}else{metrics.forEach(animateCount);}
if(header && 'IntersectionObserver' in window){
  const hero=document.querySelector('#home');
  if(hero){
    const links=[...document.querySelectorAll('.site-nav .nav-link[href*="#"]')];
    const targets=[...document.querySelectorAll('main section[id]')];
    const activeObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        links.forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));
      });
    },{rootMargin:'-18% 0px -67% 0px'});
    targets.forEach(el=>activeObserver.observe(el));
  }
}
