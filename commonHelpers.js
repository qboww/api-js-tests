import{a as n}from"./assets/vendor-34f890c2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=()=>n.get("https://66178982ed6b8fa43482ed8c.mockapi.io/books"),f=t=>n.get(`https://66178982ed6b8fa43482ed8c.mockapi.io/books/${t}`);l().then(t=>{const{data:r}=t;console.log(r)}).catch(t=>{console.log(t)});f(4).then(t=>{const{data:r}=t;console.log(r)}).catch(t=>{console.log(t)});
//# sourceMappingURL=commonHelpers.js.map