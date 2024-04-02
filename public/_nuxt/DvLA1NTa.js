import{o as d,G as y,w as c,aS as u,ar as P,b6 as _,aV as T,m as b,l as E,aT as w,au as D,a8 as S}from"./CbnsVwY1.js";import{_ as L}from"./DlAUqK2U.js";var O=t=>Object.prototype.toString.call(t).includes("Object"),h=t=>Object.prototype.toString.call(t)==="[object String]",v=t=>Number.isInteger(t);const l=(t,o)=>o(t)?!0:!O(t)||Object.keys(t).length!==2?!1:!Object.entries(t).some(([e,r])=>{const s=!["enter","leave"].includes(e),i=!o(r);return s||i}),F=t=>l(t,o=>v(o)&&o>=0),k=t=>l(t,o=>h(o)&&o.trim()!==""),z=t=>l(t,o=>v(o)&&o>=0),g=300,B="cubic-bezier(.25, .8, .5, 1)",j=0,C="y",A=g,M={inheritAttrs:!1,props:{duration:{validator:F,default:g},easing:{validator:k,default:()=>B},delay:{validator:z,default:j},noOpacity:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},mode:{type:String,default:void 0},group:{type:Boolean,default:!1},tag:{type:String,default:"span"},noMove:{type:Boolean,default:!1},moveDuration:{type:Number,default:A}},computed:{cComponent(){return this.group?b:E},cAttrs(){const{appear:t,mode:o,tag:e,duration:r}=this;return this.group?{appear:t,tag:e,duration:r,...this.$attrs}:{appear:t,mode:o,duration:r}},cHooks(){return{beforeEnter:(...t)=>{this.reduceTransition(...t),this.$emit("before-enter",...t)},beforeLeave:(...t)=>{var o;this.reduceTransition(...t),(o=this.initLeaving)==null||o.call(this,...t),this.$emit("before-leave",...t)},enter:(...t)=>{var o;(o=this.onEnter)==null||o.call(this,...t),this.$emit("enter",...t)},leave:(...t)=>{var o;(o=this.onLeave)==null||o.call(this,...t),this.$emit("leave",...t)},afterEnter:(...t)=>{var o;this.resetTransition(...t),(o=this.resetElement)==null||o.call(this,...t),this.$emit("after-enter",...t)},afterLeave:(...t)=>{var o;this.resetTransition(...t),(o=this.resetElement)==null||o.call(this,...t),this.$emit("after-leave",...t)}}}},methods:{setupTransition(t,o="enter"){var e,r,s;const i=((e=this.duration)==null?void 0:e[o])??this.duration,a=((r=this.easing)==null?void 0:r[o])??this.easing,n=((s=this.delay)==null?void 0:s[o])??this.delay;t.style.setProperty("transition-duration",`${i}ms`,"important"),t.style.setProperty("transition-timing-function",`${a}`,"important"),t.style.setProperty("transition-delay",`${n}ms`,"important")},reduceTransition(t){t.style.setProperty("transition-duration","0ms","important"),t.style.setProperty("transition-delay","0ms","important")},resetTransition(t){t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-timing-function"),t.style.removeProperty("transition-delay")},initLeaving(t){if(!this.group||this.noMove)return t;const o=getComputedStyle(t),{width:e,height:r}=o,{marginLeft:s,marginTop:i}=o;return t.style.setProperty("left",`${t.offsetLeft-parseFloat(s)}px`,"important"),t.style.setProperty("top",`${t.offsetTop-parseFloat(i)}px`,"important"),t.style.setProperty("width",`${parseFloat(e)}px`,"important"),t.style.setProperty("height",`${parseFloat(r)}px`,"important"),t.style.setProperty("position","absolute","important"),t},setMoveDuration(){var t;this.group&&this.$el&&((t=this.$el.style)==null||t.setProperty("--move-duration",`${this.moveDuration}ms`))}},watch:{moveDuration(){this.setMoveDuration()},group(){this.setMoveDuration()}},mounted(){this.setMoveDuration()}},H=t=>l(t,o=>h(o)&&["x","y"].includes(o)),R=(t,o)=>{const e=t.__vccOpts||t;for(const[r,s]of o)e[r]=s;return e},G={name:"transition-expand",mixins:[M],props:{axis:{validator:H,default:C}},data:()=>({}),computed:{},methods:{async onEnter(t){await this.$nextTick(),await this.$nextTick(),this.getSizes(t),this.collapseElement(t,"enter"),t.offsetTop,this.setupTransition(t,"enter"),this.expandElement(t,"enter")},onLeave(t){this.getSizes(t),this.expandElement(t,"leave"),t.offsetTop,this.setupTransition(t,"leave"),this.collapseElement(t,"leave")},expandElement(t,o="enter"){var e;const r=((e=this.axis)==null?void 0:e[o])??this.axis,s=r==="x"?"left":"top",i=r==="x"?"right":"bottom",a=t.visual.size[r],n=t.visual.margin[r],p=t.visual.padding[r];this.noOpacity||t.style.setProperty("opacity",t.visual.opacity),delete t.visual,t.style.setProperty(r==="x"?"width":"height",`${parseFloat(a)}px`),t.style.setProperty(`padding-${s}`,`${parseFloat(p[0])}px`),t.style.setProperty(`padding-${i}`,`${parseFloat(p[1])}px`),t.style.setProperty(`margin-${s}`,`${parseFloat(n[0])}px`),t.style.setProperty(`margin-${i}`,`${parseFloat(n[1])}px`)},collapseElement(t,o="enter"){var e;const r=((e=this.axis)==null?void 0:e[o])??this.axis,s=r==="x"?"width":"height",i=r==="x"?"left":"top",a=r==="x"?"right":"bottom";this.noOpacity||t.style.setProperty("opacity",0),t.style.setProperty(s,"0px"),t.style.setProperty(`padding-${i}`,"0px"),t.style.setProperty(`padding-${a}`,"0px"),t.style.setProperty(`margin-${i}`,"0px"),t.style.setProperty(`margin-${a}`,"0px")},resetElement(t){t.style.removeProperty("opacity"),t.style.removeProperty("width"),t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-right"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("padding-left"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-right"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("margin-left")},getSizes(t){const o=getComputedStyle(t),{opacity:e}=o,{width:r,height:s}=o,{paddingTop:i,paddingRight:a,paddingBottom:n,paddingLeft:p}=o,{marginTop:f,marginRight:m,marginBottom:x,marginLeft:$}=o;t.visual={opacity:e,size:{x:r,y:s},padding:{x:[p,a],y:[i,n]},margin:{x:[$,m],y:[f,x]}}}}};function I(t,o,e,r,s,i){return d(),y(T(t.cComponent),P({name:"expand"},t.cAttrs,_(t.cHooks)),{default:c(()=>[u(t.$slots,"default")]),_:3},16)}const N=R(G,[["render",I]]),V={name:"TransitionExpand",inheritAttrs:!1,components:{TheTransition:N}};function K(t,o,e,r,s,i){const a=w("the-transition");return d(),y(a,D(S(t.$attrs)),{default:c(()=>[u(t.$slots,"default")]),_:3},16)}const Q=L(V,[["render",K]]);export{Q as _};
