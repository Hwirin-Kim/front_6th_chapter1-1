(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=e=>({state:{...e,isLoading:!1,error:null},listeners:[],setState(e){this.state={...this.state,...e},this.listeners.forEach(e=>e(this.state))},subscribe(e){this.listeners.push(e)}}),a=20,o=i({filters:{category1:``,category2:``,search:``,sort:`price_asc`},pagination:{hasNext:!1,hasPrev:!1,limit:a,page:1,total:0,totalPages:0},products:[]}),s=i({categories:{}}),c=i({productDetail:{brand:``,category1:``,category2:``,category3:``,category4:``,description:``,hprice:``,image:``,images:[],link:``,lprice:``,maker:``,mallName:``,productId:``,productType:``,rating:0,reviewCount:0,stock:0,title:``}}),l=i({cartsProductCount:0}),u=i({filters:{category1:``,category2:``,search:``,sort:`price_asc`},pagination:{hasNext:!1,hasPrev:!1,limit:a,page:1,total:0,totalPages:0},products:[]});async function d(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function f(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function p(){let e=await fetch(`/api/categories`);return await e.json()}const m=async e=>{let t={page:1,limit:a,search:``,category1:``,category2:``,sort:`price_asc`,...e};o.setState({isLoading:!0,error:null});try{let n=await d(t);console.log(`fetchProducts`,n),e.page===1||e.page===void 0?o.setState({...n,isLoading:!1}):o.setState({...o.state,...n,products:[...o.state.products,...n.products],isLoading:!1})}catch(e){console.error(e),o.setState({error:`상품목록 조회 에러`,isLoading:!1})}},h=async()=>{s.setState({isLoading:!0,error:null});try{let e=await p();s.setState({categories:e,isLoading:!1})}catch(e){console.error(e),s.setState({error:`카테고리 조회 에러`,isLoading:!1})}},g=()=>`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1" />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3" />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>
  `,_=e=>`
<div class="min-h-screen bg-gray-50">
${e}
</div>
`,v=e=>{let t=()=>{switch(e){case`MainPage`:return y();case`ProductPage`:return b();default:return y()}},n=l.state.cartsProductCount;return` <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        ${t()}
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
            ${n>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              ${n}
            </span>`:``}
          </button>
        </div>
      </div>
    </div>
  </header>`},y=()=>`<h1 class="text-xl font-bold text-gray-900">
    <a href="/" data-link="">쇼핑몰</a>
  </h1> `,b=()=>`<div class="flex items-center space-x-3">
    <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
  </div> `,x=(...e)=>`
<main class="max-w-md mx-auto px-4 py-4">
${e.join(``)}
</main>
`,S=()=>`
<footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
`,C=(e,t,n)=>t?`
    <button
      data-category1="${e}"
      data-category2="${t}"
      class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${n?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700`} "hover:bg-gray-50"
    >
      ${t}
    </button>
  `:`
      <button
        data-category1="${e}"
        class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                   bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
      >
        ${e}
      </button>
    `,w=()=>{let e=new URLSearchParams(window.location.search),t=e.get(`category1`)||``,n=e.get(`category2`)||``,{categories:r,isLoading:i}=s.state;console.log(r);let a=Object.keys(r)??[],o=[];t&&r[t]&&(o=Object.keys(r[t])||[]);let c=``;return t&&(c+=`
      <span class="text-xs text-gray-500">&gt;</span>
      <button
        data-breadcrumb="category1"
        data-category1="${t}"
        class="text-xs hover:text-blue-800 hover:underline"
      >
        ${t}
      </button>
    `),n&&(c+=`
      <span class="text-xs text-gray-500">&gt;</span>
      <button
        data-breadcrumb="category2"
        data-category2="${n}"
        class="text-xs hover:text-blue-800 hover:underline"
      >
        ${n}
      </button>
    `),`
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
        ${c}
      </div>
      <!-- 1depth 카테고리 -->
      <div class="flex flex-wrap gap-2">
        ${i?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:t===``?a.map(e=>C(e)).join(``):o.map(e=>C(t,e,n===e)).join(``)}
      </div>
      <!-- 2depth 카테고리 -->
    </div>
  `},T=()=>`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">정렬:</label>
      <select
        id="sort-select"
        class="text-sm border border-gray-300 rounded px-2 py-1
                     focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="price_asc" selected="">가격 낮은순</option>
        <option value="price_desc">가격 높은순</option>
        <option value="name_asc">이름순</option>
        <option value="name_desc">이름 역순</option>
      </select>
    </div>
  `,E=()=>{let{pagination:{limit:e}}=o.state;return`
    <div class="flex items-center gap-2">
      <label class="text-sm text-gray-600">개수:</label>
      <select
        id="limit-select"
        class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="10" selected="${e===10}">10개</option>
        <option value="20" selected="${e===20}">20개</option>
        <option value="50" selected="${e===50}">50개</option>
        <option value="100" selected="${e===100}">100개</option>
      </select>
    </div>
  `},ee=()=>`
  <div class="mb-4">
    <div class="relative">
      <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </div>
  </div>
`,te=()=>`
<!-- 검색 및 필터 -->
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
  <!-- 검색창 -->
  ${ee()}
  <!-- 필터 옵션 -->
  <div class="space-y-3">
    <!-- 카테고리 필터 -->
    ${w()}
    <!-- 기존 필터들 -->
    <div class="flex gap-2 items-center justify-between">
      <!-- 페이지당 상품 수 -->
      ${E()}
      <!-- 정렬 -->
      ${T()}
    </div>
  </div>
</div>

`,ne=e=>`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${e.productId}"
    >
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${e.image}"
          alt="${e.title}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">${Number(e.lprice).toLocaleString()}원</p>
        </div>
        <!-- 장바구니 버튼 -->
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                         hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${e.productId}"
          data-product-title="${e.title}"
          data-product-image="${e.image}"
          data-product-price="${e.lprice}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `,re=()=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3">
      <div class="h-4 bg-gray-200 rounded mb-2"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
`,D=()=>`
<div class="text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
      </div>
    </div>
`,O=()=>{let{products:e,isLoading:t,pagination:n}=o.state;return`
    <div class="mb-6">
      <div>
        <!-- 상품 개수 정보 -->
        ${t?``:`<div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${n.total}개</span>의 상품
          </div>`}
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <!-- 로딩 스켈레톤 -->
          ${t?Array.from({length:4}).map(()=>re()).join(``):e.map(e=>ne(e)).join(``)}
        </div>
        ${t?D():``}
      </div>
    </div>
  `};let k=!1;function A(){let{pagination:e}=o.state;if(!e.hasNext)return;let t=document.documentElement.scrollHeight,n=window.scrollY,r=window.innerHeight;if(n+r>=t-100){if(o.state.isLoading)return;m({...e,page:e.page+1})}}const j=async()=>(k||(window.addEventListener(`scroll`,A),k=!0),_(v(`MainPage`)+x(te(),O())+S())),M=async e=>{c.setState({isLoading:!0,error:null});try{let t=await f(e);return c.setState({productDetail:{...t},isLoading:!1}),t}catch(e){return console.error(e),c.setState({error:`상품 상세 조회 에러`,isLoading:!1}),null}},N=async e=>{let t={page:1,limit:a,search:``,category1:``,category2:``,sort:`price_asc`,...e};u.setState({isLoading:!0,error:null});try{let n=await d(t);console.log(`fetchProducts`,n),e.page===1||e.page===void 0?u.setState({...n,isLoading:!1}):u.setState({...u.state,...n,products:[...u.state.products,...n.products],isLoading:!1})}catch(e){console.error(e),u.setState({error:`관련상품목록 조회 에러`,isLoading:!1})}},P=e=>{let{category1:t,category2:n}=e,r=`
    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  `,i=()=>{let e=``;return t&&(e+=`${r}<button class="breadcrumb-link" data-category1="${t}">
          ${t}
        </button>`),n&&(e+=`${r}<button class="breadcrumb-link" data-category2="${n}">
          ${n}
        </button>`),e};return`
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        ${i()}
      </div>
    </nav>
  `},F=()=>`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>
  `,I=()=>`
    <div class="border-t border-gray-200 p-4">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-medium text-gray-900">수량</span>
        <div class="flex items-center">
          <button
            id="quantity-decrease"
            class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input
            type="number"
            id="quantity-input"
            value="1"
            min="1"
            max="107"
            class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            id="quantity-increase"
            class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 액션 버튼 -->
      <button
        id="add-to-cart-btn"
        data-product-id="85067212996"
        class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium"
      >
        장바구니 담기
      </button>
    </div>
  `,L=e=>{let t=`
    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      ></path>
    </svg>
  `,n=`
    <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      ></path>
    </svg>
  `,r=``;for(let i=0;i<5;i++)r+=i<e?t:n;return`<div class="flex items-center">${r}</div>`},R=e=>{let{description:t,image:n,lprice:r,rating:i,reviewCount:a,stock:o,title:s}=e;return`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${n}" alt="${s}" class="w-full h-full object-cover product-detail-image" />
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1"></p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${s}</h1>
          <!-- 평점 및 리뷰 -->
          <div class="flex items-center mb-3">
            ${L(i)}
            <span class="ml-2 text-sm text-gray-600">${i} (${a}개 리뷰)</span>
          </div>
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${r}원</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">재고 ${o}개</div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">${t}</div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      ${I()}
    </div>
  `},z=e=>{let{productId:t,image:n,title:r,lprice:i}=e;return`
    <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${t}">
      <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
        <img src="${n}" alt="${r}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${r}</h3>
      <p class="text-sm font-bold text-blue-600">${Number(i).toLocaleString()}원</p>
    </div>
  `},B=(e=[])=>`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.length>0?e.map(z).join(``):``}
        </div>
      </div>
    </div>
  `,V=()=>`
    <div class="mb-6">
      <button
        class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list"
      >
        상품 목록으로 돌아가기
      </button>
    </div>
  `,H=async()=>{let e=G(window.location.pathname).split(`/product/`)[1];e&&c.state.productDetail.productId!==e&&!c.state.isLoading&&M(e),c.state.productDetail.category2&&!u.state.isLoading&&(!u.state.products||u.state.products.length===0)&&N({category2:c.state.productDetail.category2});let{isLoading:t,productDetail:n}=c.state,{products:r}=u.state;return t?F():P(n)+R(n)+V()+(r.length>0?B(r.filter(t=>t.productId!==e)):``)},U=async()=>_(v(`ProductPage`)+x(await H())+S()),W=`/front_6th_chapter1-1`,G=(e=window.location.pathname)=>e.startsWith(W)?e.slice(21)||`/`:e,K=e=>W+e;async function q(){let e=window.location.pathname,t=e.match(/^\/product\/(.+)$/);return e===`/`||e===``?await j():t?await U():g()}const J=e=>{window.history.pushState({},``,K(e)),$()};var Y=class{setItem(e,t){try{let n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(`로컬스토리지에 데이터를 저장하는 중 오류 발생:`,e)}}getItem(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(e){return console.error(`로컬스토리지에서 데이터를 가져오는 중 오류 발생:`,e),null}}removeItem(e){try{localStorage.removeItem(e)}catch(e){console.error(`로컬스토리지에서 데이터를 삭제하는 중 오류 발생:`,e)}}clear(){try{localStorage.clear()}catch(e){console.error(`로컬스토리지를 초기화하는 중 오류 발생:`,e)}}},X=new Y;const ie={CARTS:`carts`};var Z=ie;window.toastState={type:null,message:null,timeoutId:null};const Q=(e=`success`,t=`알림`)=>{window.toastState.type=e,window.toastState.message=t,window.toastState.timeoutId&&clearTimeout(window.toastState.timeoutId),window.toastState.timeoutId=setTimeout(()=>{window.toastState.type=null,window.toastState.message=null,$()},2e3),$()},ae=()=>{let e=new URLSearchParams(window.location.search),t=document.getElementById(`limit-select`);t&&(t.value=o.state.pagination.limit+``,t.onchange=t=>{let n=Number(t.target.value);e.set(`limit`,n),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`),m({...o.state.pagination,limit:n,page:1})});let n=document.getElementById(`sort-select`);n&&(n.value=o.state.filters.sort+``,n.onchange=t=>{let n=t.target.value;e.set(`sort`,n),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`),m({sort:n})});let r=document.getElementById(`search-input`);if(r){let t=e.get(`search`)||``;r.value=t,r.onkeydown=t=>{if(t.key===`Enter`){let n=t.target.value;e.set(`search`,n),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`),m({search:n,page:1})}}}let i=document.querySelectorAll(`.product-card`);i&&i.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;J(`/product/${t}`)})});let a=document.querySelectorAll(`.add-to-cart-btn`);a&&a.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.productId,r={productId:n,title:e.dataset.productTitle,image:e.dataset.productImage,lprice:e.dataset.productPrice,quantity:1,selected:!1},i=X.getItem(Z.CARTS)||[];console.log(`durlwfdsa`,i);let a=i.findIndex(e=>e.productId===n);a>-1?i[a].quantity+=s:i.push(r),X.setItem(Z.CARTS,i),l.setState({cartsProductCount:i.length}),Q(`success`,`장바구니에 추가되었습니다`)})});let s=1,u=c.state.productDetail.stock,d=document.getElementById(`quantity-decrease`),f=document.getElementById(`quantity-increase`),p=document.getElementById(`quantity-input`);d&&d.addEventListener(`click`,()=>{s>1&&(s--,p.value=s)}),f&&f.addEventListener(`click`,()=>{s<u&&s++,p.value=s}),p&&p.addEventListener(`input`,()=>{let e=parseInt(p.value,10);(isNaN(e)||e<1)&&(e=1),e>u&&(e=u),s=e,p.value=s});let h=document.getElementById(`add-to-cart-btn`);if(h){let{productId:e,image:t,lprice:n,title:r}=c.state.productDetail,i={productId:e,image:t,lprice:n,title:r,quantity:s,selected:!1};h.addEventListener(`click`,()=>{let t=X.getItem(Z.CARTS)||[],n=t.findIndex(t=>t.productId===e);n>-1?t[n].quantity+=s:t.push(i),X.setItem(Z.CARTS,t),l.setState({cartsProductCount:t.length}),Q(`success`,`장바구니에 추가되었습니다`),s=1,p.value=s})}let g=document.querySelectorAll(`.related-product-card`);g&&g.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;J(`/product/${t}`)})});let _=document.querySelectorAll(`.category1-filter-btn`);_&&_.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.category1;e.set(`category1`,n),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`),m({category1:n,page:1})})});let v=document.querySelectorAll(`.category2-filter-btn`);v&&v.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.category2;e.set(`category2`,n),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`),m({category2:n,page:1})})})},$=async()=>{document.body.querySelector(`#root`).innerHTML=await q()+oe(),ae()},oe=()=>{if(!window.toastState.type)return``;let e=`bg-green-600`;return window.toastState.type===`info`&&(e=`bg-blue-600`),window.toastState.type===`error`&&(e=`bg-red-600`),`
    <div id="toast-container" style="position: fixed; bottom: 30px; left: 0; right: 0; z-index: 9999; display: flex; justify-content: center; pointer-events: none;">
      <div class="${e} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm animate-slide-up">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p class="text-sm font-medium">${window.toastState.message}</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200" style="pointer-events:auto;">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `};window.addEventListener(`popstate`,$);async function se(){let e=new URLSearchParams(window.location.search),t=e.get(`sort`)||`price_asc`,n=e.get(`search`)||``,r=e.get(`limit`)||a,i={sort:t,search:n,limit:r};m(i),h(),o.subscribe($),s.subscribe($),c.subscribe($),l.subscribe($),u.subscribe($),$()}const ce=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-DvH8zzVn.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));ce().then(se);