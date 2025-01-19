import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=r=>`   
      <li class="gallery-card">
      <a class="gallery-link" href="${r.largeImageURL}"><img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /></a>       
        <div class="gallery-info">
            <p class="info-item">Likes: <span class="span-info-item">${r.likes}</span></p>
            <p class="info-item">Views: <span class="span-info-item">${r.views}</span></p>
            <p class="info-item">Comments: <span class="span-info-item">${r.comments}</span></p>
            <p class="info-item">Downloads: <span class="span-info-item">${r.downloads}</span></p>
        </div>
      </li>
    `,f=r=>fetch(`https://pixabay.com/api/?key=48309790-79d41aaa998d6ec4cf76c4434&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}),p=document.querySelector(".loader"),i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),y=()=>{p.style.display="block"},u=()=>{p.style.display="none"},h=r=>{r.preventDefault();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){l.error({message:"The field must be filled in!"});return}y(),f(s).then(o=>{if(u(),o.total===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i.reset();return}const a=o.hits.map(e=>m(e)).join("");c.innerHTML=a,g.refresh(),i.reset()}).catch(o=>{console.log(o),u()})};i.addEventListener("submit",h);let g=new d(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
