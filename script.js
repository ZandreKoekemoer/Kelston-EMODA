const fallback="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80";
const models=[
["omoda","OMODA C5","From R339 900","https://www.secondsonline.co.za/images/1000/vehicles/260416/1244089-2.jpg"],
["jaecoo","JAECOO J5","From R339 900","https://img.autotrader.co.za/47144765"],
["omoda","OMODA C5 X","From R374 900","https://img.autotrader.co.za/29382079/Crop640x480"],
["omoda","OMODA C5 SHS","From R479 900","https://img.autotrader.co.za/46271256"],
["omoda","OMODA C7","From R539 900","https://img.autotrader.co.za/43347987"],
["jaecoo","JAECOO J7","From R549 900","https://cdn.avo.africa/cdn-cgi/image/width%3D1400%2Cheight%3D933/https%3A/image.blob.ix.co.za/Used/8577211/16/2025-WHITE-JAECOO-J7-SHS-15-TDGI-SHS-DHT-PHEV-8577211-16-1040x694.jpg"],
["jaecoo","JAECOO J7 SHS","From R689 900","https://cdn.avo.africa/cdn-cgi/image/width%3D1400%2Cheight%3D933/https%3A/image.blob.ix.co.za/Used/8577211/16/2025-WHITE-JAECOO-J7-SHS-15-TDGI-SHS-DHT-PHEV-8577211-16-1040x694.jpg"],
["omoda","OMODA C9","From R785 900","https://lepas-digicars.co.za/assets/images/2025-MATTEGREY-OMODA-C9-20T-Inspire-8773483-1-1200x900-1.webp"],
["omoda","OMODA C9 SHS","From R999 900","https://cloudfront-eu-central-1.images.arcpublishing.com/arenaholdings/SBWRXJPXOVI3NNHSWWOV2CLVQM.png"]];
modelGrid.innerHTML=models.map(m=>`<article class="model" data-brand="${m[0]}"><img src="${m[3]}" alt="${m[1]}" onerror="this.src='${fallback}'"><div><small>${m[0].toUpperCase()}</small><h3>${m[1]}</h3><p>${m[2]}</p></div></article>`).join("");
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".model").forEach(c=>c.style.display=b.dataset.filter==="all"||c.dataset.brand===b.dataset.filter?"block":"none")});
const cars=[
["2026 OMODA C5 Street Plus","WHITE","0 km","Gqeberha","R339 900","https://www.secondsonline.co.za/images/1000/vehicles/260416/1244089-2.jpg"],
["2026 JAECOO J5 Vortex","BLACK","0 km","Gqeberha","R379 900","https://img.autotrader.co.za/47144765"],
["2026 OMODA C7 Elegance","SILVER","0 km","Gqeberha","R589 900","https://cdn.avo.africa/cdn-cgi/image/width%3D1400%2Cheight%3D933/https%3A/cdn.cmscloud.co.za/stock-images/1334052/b97edcf7-4bac-41ca-8e1a-760b36a5f2b4.jpg"],
["2026 JAECOO J7 Glacier","WHITE","0 km","Jeffreys Bay","R579 900","https://cdn.avo.africa/cdn-cgi/image/width%3D1400%2Cheight%3D933/https%3A/image.blob.ix.co.za/Used/8577211/16/2025-WHITE-JAECOO-J7-SHS-15-TDGI-SHS-DHT-PHEV-8577211-16-1040x694.jpg"],
["2026 OMODA C5 SHS","WHITE","0 km","Komani","R479 900","https://img.autotrader.co.za/46271256"],
["2026 OMODA C9 Inspire","MATTE GREY","0 km","Gqeberha","R785 900","https://lepas-digicars.co.za/assets/images/2025-MATTEGREY-OMODA-C9-20T-Inspire-8773483-1-1200x900-1.webp"]];
inventory.innerHTML=cars.map(v=>`<article class="vehicle reveal"><div class="pic"><img src="${v[5]}" alt="${v[0]} ${v[1]}" onerror="this.src='${fallback}'"></div><div class="body"><div class="meta">${v[1]} · ${v[2]}</div><h3>${v[0]}</h3><strong>${v[4]}</strong><div class="bottom"><span>${v[3]}</span><a href="#test-drive">ENQUIRE →</a></div></div></article>`).join("");
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>40));menuBtn.onclick=()=>mobileMenu.classList.toggle("open");document.querySelectorAll("#mobileMenu a").forEach(a=>a.onclick=()=>mobileMenu.classList.remove("open"));
leadForm.onsubmit=e=>{e.preventDefault();formNote.textContent="Mockup only — this form is not connected to a backend yet."};