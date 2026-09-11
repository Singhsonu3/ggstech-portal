const grid=document.getElementById('productGrid');
if(grid&&Array.isArray(window.GGST_PRODUCTS)){
  grid.innerHTML=window.GGST_PRODUCTS.map(p=>`<article class="product-card"><div class="product-top"><span class="product-icon">${p.icon}</span><span class="status ${p.status==='Live'?'live':''}">${p.status}</span></div><h3>${p.name}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><a class="product-link" href="${p.url}" ${p.url.startsWith('http')?'target="_blank" rel="noopener"':''}>${p.status==='Live'?'Open product →':'Learn more →'}</a></article>`).join('');
}
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
if(menuBtn&&nav) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
