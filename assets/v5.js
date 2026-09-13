const hotfix=document.createElement('link');hotfix.rel='stylesheet';hotfix.href='assets/v5-hotfix.css?v=57';document.head.appendChild(hotfix);

const catalogItems=Array.isArray(window.AGBEN_PRODUCTS)?window.AGBEN_PRODUCTS:[];
const featuredItems=catalogItems.slice(0,5);

function productCard(x){
  return `<article class="productCard"><a href="produto.html?id=${encodeURIComponent(x.id)}"><div class="productPic"><img src="${x.image}" alt="${x.name}"></div><div class="productBody"><div class="productCat">${x.category}</div><h3>${x.name}</h3><div class="productMeta"><span>${x.weight}</span><span>${x.size}</span></div><div class="productPrice">R$ ${x.price}</div><span class="productAction">Ver detalhes</span></div></a></article>`;
}

const featuredGrid=document.getElementById('products');
if(featuredGrid)featuredGrid.innerHTML=featuredItems.map(productCard).join('');

const slides=[...document.querySelectorAll('.heroSlide')];
if(slides.length){
  const visuals=[
    ['assets/capivara.svg','assets/gato-geometrico.svg','Coleção AGBEN3D','Peças em branco, preto e azul escuro.'],
    ['assets/leitor.svg','assets/suporte-livros.svg','Projetos personalizados','Da referência até uma peça produzida sob medida.'],
    ['assets/gatos.svg','assets/capivara.svg','Decoração e presentes','Peças compactas para diferentes ambientes.']
  ];
  let i=0;
  setInterval(()=>{
    i=(i+1)%slides.length;
    slides.forEach((s,n)=>s.classList.toggle('active',n===i));
    const [a,b,t,d]=visuals[i];
    const main=document.getElementById('heroMain');
    const side=document.getElementById('heroSide');
    const badgeTitle=document.getElementById('heroBadgeTitle');
    const badgeText=document.getElementById('heroBadgeText');
    if(!main||!side)return;
    main.parentElement.style.opacity=.25;
    side.parentElement.style.opacity=.25;
    setTimeout(()=>{
      main.src=a;side.src=b;
      if(badgeTitle)badgeTitle.textContent=t;
      if(badgeText)badgeText.textContent=d;
      main.parentElement.style.opacity=1;
      side.parentElement.style.opacity=1;
    },180);
  },4300);
}

const projectForm=document.getElementById('projectForm');
if(projectForm){
  projectForm.addEventListener('submit',e=>{
    e.preventDefault();
    const nome=document.getElementById('nome');
    const fone=document.getElementById('fone');
    const tipo=document.getElementById('tipo');
    const qtd=document.getElementById('qtd');
    const med=document.getElementById('med');
    const cor=document.getElementById('cor');
    const arquivo=document.getElementById('arquivo');
    const desc=document.getElementById('desc');
    const file=arquivo?.files?.[0]?.name||'Nenhum arquivo selecionado';
    const msg=`Olá AGBEN3D! Quero solicitar um orçamento.%0A%0ANome: ${encodeURIComponent(nome?.value||'')}%0AWhatsApp: ${encodeURIComponent(fone?.value||'')}%0ATipo: ${encodeURIComponent(tipo?.value||'')}%0AQuantidade: ${encodeURIComponent(qtd?.value||'1')}%0AMedidas: ${encodeURIComponent(med?.value||'Não informado')}%0ACor: ${encodeURIComponent(cor?.value||'Não informado')}%0AArquivo: ${encodeURIComponent(file)}%0A%0ADescrição:%0A${encodeURIComponent(desc?.value||'Não informado')}`;
    window.open('https://wa.me/5548988506456?text='+msg,'_blank','noopener');
  });
}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('on')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const gridEl=document.getElementById('grid');
if(gridEl){
  const pager=document.getElementById('catalogPager');
  const count=document.getElementById('catalogCount');
  const filters=[...document.querySelectorAll('.filter[data-filter]')];
  const pageSize=15;
  let currentPage=1;
  let activeFilter='Todos';

  const filteredItems=()=>activeFilter==='Todos'?catalogItems:catalogItems.filter(x=>x.category===activeFilter);

  function goToPage(page){
    currentPage=page;
    renderCatalog();
    const anchor=document.querySelector('.catalogTools');
    if(anchor){
      const y=anchor.getBoundingClientRect().top+window.scrollY-90;
      window.scrollTo({top:y,behavior:'smooth'});
    }
  }

  function renderPager(totalPages){
    if(!pager)return;
    const prevDisabled=currentPage===1?'disabled':'';
    const nextDisabled=currentPage===totalPages?'disabled':'';
    let html=`<button class="pageBtn" ${prevDisabled} data-page="${currentPage-1}" aria-label="Página anterior">← Anterior</button>`;
    for(let n=1;n<=totalPages;n++)html+=`<button class="pageBtn pageNumber ${n===currentPage?'active':''}" data-page="${n}" aria-label="Página ${n}">${n}</button>`;
    html+=`<span class="pageSummary">${currentPage}/${totalPages}</span><button class="pageBtn" ${nextDisabled} data-page="${currentPage+1}" aria-label="Próxima página">Próxima →</button>`;
    pager.innerHTML=html;
    pager.querySelectorAll('[data-page]:not(:disabled)').forEach(btn=>btn.addEventListener('click',()=>goToPage(Number(btn.dataset.page))));
  }

  function renderCatalog(){
    const data=filteredItems();
    const totalPages=Math.max(1,Math.ceil(data.length/pageSize));
    if(currentPage>totalPages)currentPage=totalPages;
    const start=(currentPage-1)*pageSize;
    gridEl.innerHTML=data.slice(start,start+pageSize).map(productCard).join('');
    if(count)count.textContent=`${data.length} ${data.length===1?'produto':'produtos'}`;
    renderPager(totalPages);
  }

  filters.forEach(btn=>btn.addEventListener('click',()=>{
    filters.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter=btn.dataset.filter;
    currentPage=1;
    renderCatalog();
  }));

  renderCatalog();
}
