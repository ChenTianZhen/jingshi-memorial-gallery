const products = [
  { id: 'evergreen', name: '常青 · 单体碑', category: '单体碑', material: '山西黑花岗岩', image: 'assets/evergreen.jpg', tag: '经典系列', subtitle: '拱顶与百合浅雕，沉静而不失温度。', desc: '常青以柔和拱顶收束轮廓，正面保留充足铭文区域，边缘采用细致倒角处理。深色花岗岩在不同光线下呈现内敛光泽，适合追求庄重、经典表达的家庭。', size: '高 105 × 宽 76 × 厚 10 cm', craft: '手工细磨 · 浅浮雕 · 镜面抛光', scene: '传统墓园 / 家族纪念区' },
  { id: 'together', name: '相守 · 双体碑', category: '双体碑', material: '芝麻灰花岗岩', image: 'assets/together.jpg', tag: '双人纪念', subtitle: '舒展的双体曲线，讲述一生相伴。', desc: '相守采用连贯的横向弧线，将两块铭文区域自然连接。浅灰石材质地温润，植物纹样仅作克制点缀，既保留双人纪念的完整叙事，也让整体更融入自然环境。', size: '高 92 × 宽 138 × 厚 10 cm', craft: '细磨亚光 · 植物浅雕 · 手工倒角', scene: '双人纪念区 / 家族墓园' },
  { id: 'dawn', name: '晨曦 · 现代碑', category: '现代碑', material: '深灰花岗岩 / 青铜', image: 'assets/dawn.jpg', tag: '设计师系列', subtitle: '不对称几何与一线青铜，简洁而坚定。', desc: '晨曦将传统纪念碑转译为更简练的当代语言。不对称切面带来稳定的视觉重心，一道细窄青铜嵌条如同微光贯穿石面，适合偏爱现代建筑感的家庭。', size: '高 110 × 宽 72 × 厚 12 cm', craft: '亚光水磨 · 金属嵌条 · 精密切割', scene: '现代墓园 / 景观纪念区' },
  { id: 'quiet-mountain', name: '静山 · 景观碑', category: '景观碑', material: '深灰花岗岩', image: 'assets/dawn.jpg', tag: '自然系列', subtitle: '如山石般融入草木，轮廓简洁自然。', desc: '静山保留天然石材的块面感，通过低重心比例与轻微不对称构图融入景观。表面采用细腻水磨工艺，触感柔和，适用于自然式纪念花园。', size: '高 86 × 宽 96 × 厚 16 cm', craft: '亚光水磨 · 自然面保留 · 手工修边', scene: '纪念花园 / 草坪墓园' },
  { id: 'white-heron', name: '白鹭 · 雅灰碑', category: '单体碑', material: '芝麻灰花岗岩', image: 'assets/together.jpg', tag: '雅致系列', subtitle: '轻盈弧面与浅色石材，安静且明朗。', desc: '白鹭以浅色花岗岩呈现清雅气质，轮廓如羽翼轻收。大面积留白给予铭文和图像更自由的排版空间，适合希望纪念氛围明朗、柔和的家庭。', size: '高 102 × 宽 74 × 厚 10 cm', craft: '细磨亚光 · 线刻 · 圆角处理', scene: '传统墓园 / 草坪纪念区' },
  { id: 'long-companion', name: '长伴 · 家族碑', category: '双体碑', material: '黑色花岗岩', image: 'assets/evergreen.jpg', tag: '家族系列', subtitle: '稳重比例，为多代记忆预留从容空间。', desc: '长伴在经典黑色石材上扩展横向比例，为家族铭文与纪念图像提供更完整的承载。结构稳重，细节克制，可根据安置环境调整底座和边柱。', size: '高 108 × 宽 156 × 厚 12 cm', craft: '镜面抛光 · 深刻描金 · 结构加固', scene: '家族墓园 / 集中纪念区' }
];

const app = document.querySelector('#app');
let activeFilter = '全部';

function productCard(p) {
  return `<a class="product-card" href="#/product/${p.id}" aria-label="查看${p.name}详情">
    <div class="product-image"><img src="${p.image}" alt="${p.name}产品展示图" loading="lazy"><span class="product-tag">${p.tag}</span></div>
    <div class="product-info"><h3>${p.name}</h3><p>${p.subtitle}</p><div class="product-meta"><span>${p.material}</span><b>查看详情</b></div></div>
  </a>`;
}

function renderHome() {
  document.title = '静石 · 纪念碑作品';
  app.innerHTML = `<section class="hero">
    <div class="hero-copy"><p class="eyebrow">MEMORIALS FOR LASTING LOVE</p><h1>为思念<br>留一处安静的形状</h1><p class="hero-lead">甄选天然石材，以克制的设计与细致的手工，安放每一段值得长久铭记的生命故事。</p><div class="hero-actions"><a class="primary-button" href="#/products">浏览作品</a><a class="outline-button" href="tel:4008880618">预约方案沟通</a></div></div>
    <div class="hero-visual"><img src="assets/dawn.jpg" alt="现代深灰花岗岩纪念碑"><div class="hero-note"><span>FEATURED DESIGN</span><strong>晨曦 · 现代纪念碑</strong></div></div>
  </section>
  <section class="section" id="products"><div class="section-heading"><div><p class="eyebrow">SELECTED WORKS</p><h2>纪念碑作品</h2></div><p>从经典轮廓到当代设计，每一款均可依据铭文、纹样与安置环境进行个性化调整。</p></div><div class="filters" aria-label="产品分类">${['全部','单体碑','双体碑','现代碑','景观碑'].map(x => `<button class="filter ${x === activeFilter ? 'active' : ''}" data-filter="${x}">${x}</button>`).join('')}</div><div class="product-grid">${products.filter(p => activeFilter === '全部' || p.category === activeFilter).map(productCard).join('')}</div></section>
  <section class="craft-band" id="craft"><div class="craft-title"><p class="eyebrow">OUR CRAFT</p><h2>一方石材<br>四重用心</h2><p>从理解一个人的故事开始，到作品安静落于草木之间，我们认真对待每一个细节。</p></div><div class="craft-steps">${[['01','石材甄选','依据色泽、纹理与耐候性筛选天然石材。'],['02','方案设计','结合人物故事与安置环境确定比例和细节。'],['03','精工雕刻','由经验丰富的匠人完成雕刻、打磨与嵌饰。'],['04','专业安置','复核基础与朝向，完成稳固、整洁的现场安装。']].map(s => `<div class="craft-step"><span>${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div></section>`;
  bindFilters();
}

function renderProducts() { renderHome(); requestAnimationFrame(() => document.querySelector('#products')?.scrollIntoView()); }

function renderDetail(id) {
  const p = products.find(item => item.id === id) || products[0];
  document.title = `${p.name} · 静石`;
  const variants = [{name:'正面展示', img:p.image}, {name:'材质参考', img:'assets/evergreen.jpg'}, {name:'环境参考', img:'assets/together.jpg'}];
  app.innerHTML = `<article class="detail-page"><div class="detail-crumb"><a href="#/products">作品列表</a>　/　${p.category}　/　${p.name}</div><div class="detail-layout">
    <div class="detail-gallery"><div class="detail-main-image"><img id="detailImage" src="${p.image}" alt="${p.name}展示图"></div><div class="detail-swatches">${variants.map(v => `<button style="background-image:url('${v.img}')" data-image="${v.img}" aria-label="${v.name}"></button>`).join('')}</div></div>
    <div class="detail-copy"><p class="eyebrow">${p.tag} · ${p.category}</p><h1>${p.name}</h1><p class="detail-subtitle">${p.subtitle}</p><div class="detail-description">${p.desc}</div><dl class="specs"><div class="spec-row"><dt>主要材质</dt><dd>${p.material}</dd></div><div class="spec-row"><dt>参考尺寸</dt><dd>${p.size}</dd></div><div class="spec-row"><dt>表面工艺</dt><dd>${p.craft}</dd></div><div class="spec-row"><dt>适用场景</dt><dd>${p.scene}</dd></div></dl><div class="detail-actions"><a class="primary-button" href="tel:4008880618">咨询定制方案</a><a class="outline-button" href="#/products">返回作品列表</a></div><div class="detail-note">温馨提示：天然石材的纹理与色泽会存在细微差异，页面尺寸为展示参考。实际方案将结合墓区规范与现场条件确认。</div></div>
  </div></article>`;
  document.querySelectorAll('[data-image]').forEach(btn => btn.addEventListener('click', () => { document.querySelector('#detailImage').src = btn.dataset.image; }));
}

function renderSimple(type) {
  const content = type === 'craft' ? ['关于工艺','我们从石材的密度、纹理和耐候性出发，依次完成方案深化、精密切割、手工雕刻、表面研磨和现场安置。每一道工序都以经得起时间为标准。'] : ['关于静石','静石是一间专注纪念空间与石材设计的展示型工作室。我们相信，好的纪念设计无需喧哗，它应当尊重生命故事，也能安静地融入四季草木。'];
  app.innerHTML = `<section class="simple-page"><p class="eyebrow">JINGSHI MEMORIAL STUDIO</p><h1>${content[0]}</h1><p>${content[1]}</p><a class="primary-button" href="#/products">浏览作品</a></section>`;
}

function bindFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; renderHome(); document.querySelector('#products')?.scrollIntoView(); }));
}

function route() {
  const path = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  window.scrollTo(0, 0);
  if (path[0] === 'product') return renderDetail(path[1]);
  if (path[0] === 'products') return renderProducts();
  if (path[0] === 'craft' || path[0] === 'about') return renderSimple(path[0]);
  renderHome();
}

window.addEventListener('hashchange', route);
route();
