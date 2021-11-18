System.register(["./chunk-vendor.js"],(function(){"use strict";var t,e,s,n;return{setters:[function(r){t=r._,e=r.t,s=r.b,n=r.c}],execute:function(){let r=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));const t=this.closest("details");t&&t.addEventListener("toggle",(()=>{t.open&&this.source.focus()}))}relayKeydown(t){if(!this.isControlTab(t.target)&&t.target!==this.source||"ArrowDown"!==t.key&&"Tab"!==t.key){if("Escape"===t.key){const t=this.closest("details");t&&t.removeAttribute("open")}}else t.preventDefault(),t.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"))}isControlTab(t){return!!t&&(!!this.control&&Array.from(this.control.children).includes(t))}relayInput(t){if(!t.target)return;const e=t.target.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:e}))}routeCustomEvent(t){this.sinks[this.selectedIndex].dispatchEvent(t)}get selectedIndex(){if(!this.control)return 0;const t=this.control.querySelector('[aria-selected="true"]');if(!t)throw new Error("no selected element");return Array.from(this.control.children).indexOf(t)}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(t){this.source.value=this.storedInput[this.selectedIndex];const e=t.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=e,this.source.setAttribute("aria-label",e),this.notifySelected()}notifySelected(){const t=this.sinks[this.selectedIndex],e=new CustomEvent("tab-selected");t.dispatchEvent(e)}};t([e],r.prototype,"source",void 0),t([s],r.prototype,"sinks",void 0),t([e],r.prototype,"control",void 0),r=t([n],r)}}}));
//# sourceMappingURL=chunk-input-demux-9abe7aa7.js.map
