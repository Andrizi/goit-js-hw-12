import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m=t=>`   
      <li class="gallery-card">
      <a class="gallery-link" href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" /></a>       
        <div class="gallery-info">
            <p class="info-item">Likes: <span class="span-info-item">${t.likes}</span></p>
            <p class="info-item">Views: <span class="span-info-item">${t.views}</span></p>
            <p class="info-item">Comments: <span class="span-info-item">${t.comments}</span></p>
            <p class="info-item">Downloads: <span class="span-info-item">${t.downloads}</span></p>
        </div>
      </li>
    `,f=t=>fetch(`https://pixabay.com/api/?key=48309790-79d41aaa998d6ec4cf76c4434&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),p=document.getElementById("loader"),i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),y=()=>{p.style.display="flex"},u=()=>{p.style.display="none"},h=t=>{t.preventDefault();const s=t.currentTarget.elements.user_query.value.trim();if(s===""){l.error({message:"The field must be filled in!"});return}y(),f(s).then(a=>{if(u(),a.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i.reset();return}const o=a.hits.map(e=>m(e)).join("");c.innerHTML=o,g.refresh(),i.reset()}).catch(a=>{console.log(a),u()})};i.addEventListener("submit",h);let g=new d(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
