System.register(["./chunk-vendor.js"],(function(){"use strict";var t,e,n;return{setters:[function(r){t=r.a,e=r.J,n=r.G}],execute:function(){t("tab-container-changed",".js-branches-tags-tabs",(async function(t){const r=t.detail.relatedTarget,c=t.currentTarget;if(!c)return;let o,i;for(const u of c.querySelectorAll("[data-controls-ref-menu-id]")){if(!(u instanceof e||u instanceof n))return;const t=u.getAttribute("data-controls-ref-menu-id"),c=r.id===t;u.hidden=!c,c?i=u:o||(o=u.input?u.input.value:"")}const s=i&&i.input;s&&(i&&void 0!==o&&(s.value=o),s.focus())})),t("click",".js-onboarding-list-all",(function(t){t.preventDefault(),document.querySelector(".js-task-list-container ul").hidden=!1;const e=document.querySelector(".js-task-list-container h1");e&&(e.hidden=!1),document.querySelector(".js-onboarding-guidance").hidden=!0}))}}}));
//# sourceMappingURL=chunk-overview-9689b54f.js.map
