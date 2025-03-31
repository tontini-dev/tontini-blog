"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{3060:(e,t,o)=>{o.d(t,{$n:()=>tp,AM:()=>os,BJ:()=>ox,Dr:()=>rt,EY:()=>to,GD:()=>t5,M4:()=>B,NP:()=>F,Nj:()=>o7,Qx:()=>w,W1:()=>o6,XS:()=>tX,Xy:()=>V,ZL:()=>t3,Zp:()=>tg,az:()=>te,ks:()=>oB,m_:()=>oU,nY:()=>tY,oz:()=>rn,qW:()=>o0,rX:()=>re,sb:()=>tG,so:()=>ti,wb:()=>ra,xA:()=>tj,y$:()=>tl});var r=o(5155),n=o(3377),i=o(2115),a=o(4987),d=o(9288),l=o(6674),s=o(7949),c=o(3588),u=o(330),f=o(2475),p=o(4945),h=o(6183),g=o(760),b=o(8460),m=o(7650),v=o(6295);let w=(0,d.me)(),y=[],x={},$={card:{initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},children:{hidden:{opacity:0},visible:{opacity:1}},transition:{type:"spring",visualDuration:.2,bounce:.25}};function k(e){return 0===e?0:`${e/16}rem`}function j(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function I(e,t){return void 0===e?t||y:Array.isArray(e)?e:[e]}function S(e,t,o=y){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:r,space:n}=(0,l.JW)(e);return j(r,o,e=>{var o;return o=k(n[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function R(e,t){let{$size:o,$weight:r}=t,{font:n,media:i}=(0,l.JW)(t.theme),{family:a,sizes:d,weights:s}=n[e],c=r&&s[r]||s.regular,u=d[2],f={position:"relative",fontFamily:a,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,...j(i,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:r,iconSize:n,letterSpacing:i,lineHeight:a}=e,d=t+o,l=a-d,s=2*Math.floor(1.125*r/2)+1;return{fontSize:k(r),lineHeight:`calc(${a} / ${r})`,letterSpacing:k(i),transform:`translateY(${k(o)})`,"&:before":{marginTop:`calc(${k(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:k((l-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:k((l-n)/2)}}})(d[e]||u))]:(R.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),R.warned=!0),[f])}function C(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$align,e=>({textAlign:e}))}function z(e,t){let o;let r=(0,n.c)(3);r[0]!==t||r[1]!==e?(o=()=>[I(e,t),JSON.stringify(e??t)],r[0]=t,r[1]=e,r[2]=o):o=r[2];let[a,d]=(0,i.useState)(o),[l,s]=a,c=JSON.stringify(e??t);return c!==s&&d([I(e,t),c]),l}function E(){return y}function N(e,t){let o,r;let a=(0,n.c)(6);a[0]!==t||a[1]!==e.current?(o=()=>{e.current?.setCustomValidity(t||"")},a[0]=t,a[1]=e.current,a[2]=o):o=a[2],a[3]!==t||a[4]!==e?(r=[t,e],a[3]=t,a[4]=e,a[5]=r):r=a[5],(0,i.useEffect)(o,r)}let A="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:b.tb,_=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(o,r){let n=t.get(o)||[],i=e.get(o);return t.has(o)||(t.set(o,n),i=({subscribe(e,t){let o=new A(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(o,e=>{for(let t of n)t(e)})),n.push(r),()=>{let e=n.indexOf(r);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function W(e){let t,o;let r=(0,n.c)(3),[a,d]=(0,i.useState)(null);return r[0]!==e?(t=()=>{if(e)return _.subscribe(e,d)},o=[e],r[0]=e,r[1]=t,r[2]=o):(t=r[1],o=r[2]),(0,i.useEffect)(t,o),a}function M(e,t){let{subscribe:o,getSnapshot:r}=(0,i.useMemo)(()=>{let t;let o=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=o();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>o().matches}},[e]);return(0,i.useDebugValue)(e),(0,i.useSyncExternalStore)(o,r,t)}let H=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function L(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,i.createContext)(t):(H[o]=H[o]||(0,i.createContext)(t),H[o])}let T=L("@sanity/ui/context/theme",null);function F(e){let t,o,l,s;let c=(0,n.c)(15),u=(0,i.useContext)(T),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),g=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==g?(e={version:0,theme:h,scheme:p,tone:g},c[0]=h,c[1]=p,c[2]=g,c[3]=e):e=c[3],t=e}let b=t;t:{let e;if(!h){o=null;break t}c[4]!==h||c[5]!==p||c[6]!==g?(e=(0,d.sR)(h,p,g),c[4]=h,c[5]=p,c[6]=g,c[7]=e):e=c[7],o=e}let m=o;if(!m){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,r.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==m?(l=(0,r.jsx)(a.NP,{theme:m,children:f}),c[9]=f,c[10]=m,c[11]=l):l=c[11],c[12]!==l||c[13]!==b?(s=(0,r.jsx)(T.Provider,{value:b,children:l}),c[12]=l,c[13]=b,c[14]=s):s=c[14],s}function O(){let e=(0,i.useContext)(T);if(!e)throw Error("useRootTheme(): missing context value");return e}function J(e){let t;let o=(0,n.c)(5),{children:i,scheme:a,tone:d}=e,l=O(),s=a||l.scheme;return o[0]!==i||o[1]!==l.theme||o[2]!==s||o[3]!==d?(t=(0,r.jsx)(F,{scheme:s,theme:l.theme,tone:d,children:i}),o[0]=i,o[1]=l.theme,o[2]=s,o[3]=d,o[4]=t):t=o[4],t}function B(){let e;let t=(0,n.c)(2),o=(0,a.DP)();return t[0]!==o?(e=(0,l.JW)(o),t[0]=o,t[1]=e):e=t[1],e}function P(){return 0}function D(){let e,t;let o=(0,n.c)(2),{media:r}=B();return o[0]!==r?(t=function(e){let t;let o=e.length,r=()=>{if(!t){t=[];for(let n=o;n>-1;n-=1){var r;let o=0===(r=n)?`screen and (max-width: ${e[r]-1}px)`:r===e.length?`screen and (min-width: ${e[r-1]}px)`:`screen and (min-width: ${e[r-1]}px) and (max-width: ${e[r]-1}px)`;t.push({index:n,mq:window.matchMedia(o)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of r())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of r()){let r=()=>{o.matches&&e()};o.addEventListener("change",r),t.push(()=>o.removeEventListener("change",r))}return()=>{for(let e of t)e()}}}}(r),o[0]=r,o[1]=t):t=o[1],e=t,(0,i.useSyncExternalStore)(e.subscribe,e.getSnapshot,P)}function V(e){return M("(prefers-color-scheme: dark)",void 0===e?G:e)}function G(){return!1}function Y(e){return M("(prefers-reduced-motion: reduce)",void 0===e?X:e)}function X(){return!1}function q(e){let{card:t,media:o}=(0,l.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$border,e=>e?{"&&":{border:r}}:{"&&":{border:0}})}function K(e){let{card:t,media:o}=(0,l.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderTop,e=>e?{"&&":{borderTop:r}}:{"&&":{borderTop:0}})}function U(e){let{card:t,media:o}=(0,l.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderRight,e=>e?{"&&":{borderRight:r}}:{"&&":{borderRight:0}})}function Z(e){let{card:t,media:o}=(0,l.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderBottom,e=>e?{"&&":{borderBottom:r}}:{"&&":{borderBottom:0}})}function Q(e){let{card:t,media:o}=(0,l.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderLeft,e=>e?{"&&":{borderLeft:r}}:{"&&":{borderLeft:0}})}F.displayName="ThemeProvider",J.displayName="ThemeColorProvider";let ee={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},et={content:"content-box",border:"border-box"},eo={stretch:"stretch",fill:"100%"};function er(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function en(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$sizing,e=>({boxSizing:et[e]}))}function ei(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$height,e=>({height:eo[e]}))}function ea(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$overflow,e=>({overflow:e}))}let ed={"&&:not([hidden])":{display:"flex"}};function el(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$align,e=>({alignItems:e}))}function es(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$gap,e=>({gap:e?k(o[e]):void 0}))}function ec(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$wrap,e=>({flexWrap:e}))}function eu(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$justify,e=>({justifyContent:e}))}function ef(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$direction,e=>({flexDirection:e}))}let ep={minWidth:0,minHeight:0};function eh(){return[ep,eg]}function eg(e){let{media:t}=(0,l.JW)(e.theme);return e.$flex?j(t,e.$flex,e=>({flex:e})):y}function eb(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function em(e){let{base:t,border:o,focusRing:r}=e,n=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&eb(o),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let ev={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},ew={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},ey={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function ex(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function e$(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$autoRows,e=>({gridAutoRows:e&&ey[e]}))}function ek(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$autoCols,e=>({gridAutoColumns:e&&ew[e]}))}function ej(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function eI(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function eS(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$gap,e=>({gridGap:e?k(o[e]):void 0}))}function eR(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$gapX,e=>({columnGap:e?k(o[e]):void 0}))}function eC(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$gapY,e=>({rowGap:e?k(o[e]):void 0}))}let ez={auto:"auto",full:"1 / -1"},eE={auto:"auto",full:"1 / -1"};function eN(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:ez[e]})}function eA(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$rowStart,e=>({gridRowStart:e}))}function e_(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$rowEnd,e=>({gridRowEnd:e}))}function eW(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:eE[e]})}function eM(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$columnStart,e=>({gridColumnStart:e}))}function eH(e){let{media:t}=(0,l.JW)(e.theme);return j(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function eL(e){let{$fontSize:t,$iconLeft:o,$iconRight:r,$padding:n,$space:i}=e,{font:a,media:d,space:s}=(0,l.JW)(e.theme),c=Math.max(n.length,i.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===n[e]?u[e-1]:n[e],f[e]=void 0===i[e]?f[e-1]:i[e];return j(d,u,(e,t)=>{let n=a.text.sizes[p[t]]||a.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,d=s[u[t]],l=s[f[t]],c={paddingTop:k(d-n.ascenderHeight),paddingRight:k(d),paddingBottom:k(d-n.descenderHeight),paddingLeft:k(d)};return r&&(c.paddingRight=k(d+i+l)),o&&(c.paddingLeft=k(d+i+l)),c})}function eT(e){return eL({...e,$iconRight:!0})}let eF=(0,a.AH)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function eO(){return eF}function eJ(e){let{$scheme:t,$tone:o,$weight:r}=e,{color:n,font:i}=(0,l.JW)(e.theme);return(0,a.AH)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${i.text.family};
    font-weight: ${r&&i.text.weights[r]||i.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${n.input.default.enabled.fg};
      --input-placeholder-color: ${n.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${n.input.default.enabled.fg};
        --input-placeholder-color: ${n.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${n.input.default.disabled.fg};
        --input-placeholder-color: ${n.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${n.input.invalid.enabled.fg};
        --input-placeholder-color: ${n.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${n.input.default.readOnly.fg};
        --input-placeholder-color: ${n.input.default.readOnly.placeholder};
      }
    }
  `}function eB(e){let{font:t,media:o}=(0,l.JW)(e.theme);return j(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:k(o.fontSize),lineHeight:o.lineHeight/o.fontSize}})}function eP(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:r,$tone:n,$unstableDisableFocusRing:i}=e,{color:d,input:s}=(0,l.JW)(e.theme);return(0,a.AH)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${r}'][data-tone='${n}'] {
      --card-bg-color: ${d.input.default.enabled.bg};
      --card-fg-color: ${d.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${eb({color:d.input.default.enabled.border,width:s.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${d.input.invalid.enabled.bg};
        --card-fg-color: ${d.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${eb({color:d.input.invalid.enabled.border,width:s.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${i?void 0:em({border:{color:d.input.default.enabled.border,width:s.border.width},focusRing:s.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${i?void 0:em({focusRing:s.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${d.input.default.disabled.bg} !important;
        --card-fg-color: ${d.input.default.disabled.fg} !important;
        --card-icon-color: ${d.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eb({color:d.input.default.disabled.border,width:s.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${d.input.invalid.disabled.bg} !important;
        --card-fg-color: ${d.input.invalid.disabled.fg} !important;
        --card-icon-color: ${d.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eb({color:d.input.invalid.disabled.border,width:s.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${d.input.default.readOnly.bg} !important;
        --card-fg-color: ${d.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${d.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${d.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${d.input.default.hovered.bg};
          --card-fg-color: ${d.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${d.input.invalid.hovered.bg};
          --card-fg-color: ${d.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eb({color:d.input.default.hovered.border,width:s.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eb({color:d.input.invalid.hovered.border,width:s.border.width})};
        }
      }
    }
  `}function eD(e){let{media:t,radius:o}=(0,l.JW)(e.theme);return j(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=k(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function eV(e,t){return`${e.map(k).join(" ")} ${t}`}let eG=a.I4.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,eY=a.I4.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return R("label",e)},C,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,l.JW)(e.theme);return(0,a.AH)`
    text-transform: uppercase;

    ${t&&(0,a.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,a.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),eX=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f;let p=(0,n.c)(22);p[0]!==e?({accent:o,align:i,children:a,muted:l,size:s,textOverflow:c,weight:u,...d}=e,p[0]=e,p[1]=o,p[2]=i,p[3]=a,p[4]=d,p[5]=l,p[6]=s,p[7]=c,p[8]=u):(o=p[1],i=p[2],a=p[3],d=p[4],l=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==l&&l,g=void 0===s?2:s,b=a;if("ellipsis"===c){let e;p[9]!==b?(e=(0,r.jsx)(eG,{children:b}),p[9]=b,p[10]=e):e=p[10],b=e}else{let e;p[11]!==b?(e=(0,r.jsx)("span",{children:b}),p[11]=b,p[12]=e):e=p[12],b=e}let m=z(i),v=z(g);return p[13]!==o||p[14]!==b||p[15]!==h||p[16]!==t||p[17]!==d||p[18]!==m||p[19]!==v||p[20]!==u?(f=(0,r.jsx)(eY,{"data-ui":"Label",...d,$accent:o,$align:m,$muted:h,$size:v,$weight:u,ref:t,children:b}),p[13]=o,p[14]=b,p[15]=h,p[16]=t,p[17]=d,p[18]=m,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});eX.displayName="ForwardRef(Label)";let eq={root:function(e){let{$color:t}=e,{avatar:o}=(0,l.JW)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:em({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}},arrow:function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}},bgStroke:function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}},stroke:function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}},initials:function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}},image:function(){return{position:"relative"}}},eK=a.I4.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,l.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:k(o.size),height:k(o.size),borderRadius:k(o.size/2),"&>svg":{width:k(o.size),height:k(o.size),borderRadius:k(o.size/2)}}})},eq.root),eU=a.I4.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(eq.arrow),eZ=a.I4.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(eq.bgStroke),eQ=a.I4.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(eq.stroke),e0=a.I4.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(eq.initials),e1=(0,a.I4)(eX).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),e2=a.I4.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(eq.image);function e4(e){return 1===e?1:2===e?3:5*(3===e)}(0,i.forwardRef)(function(e,t){let o,a,d,l,c,u,f,p,h,g,b,m,v,w,y,x,$,k,j,I,S,R,C;let E=(0,n.c)(52);E[0]!==e?({__unstable_hideInnerStroke:o,as:l,color:h,src:p,title:m,initials:c,onImageLoadError:u,arrowPosition:d,animateArrowFrom:a,status:g,size:b,...f}=e,E[0]=e,E[1]=o,E[2]=a,E[3]=d,E[4]=l,E[5]=c,E[6]=u,E[7]=f,E[8]=p,E[9]=h,E[10]=g,E[11]=b,E[12]=m):(o=E[1],a=E[2],d=E[3],l=E[4],c=E[5],u=E[6],f=E[7],p=E[8],h=E[9],g=E[10],b=E[11],m=E[12]);let N=void 0===h?"gray":h,A=void 0===g?"online":g,_=void 0===b?1:b,{avatar:W}=B(),M=s.isValidElementType(l)?l:"div",H=z(_),L=(W.sizes[H[0]]||W.sizes[0]).size,T=L/2,F=(0,i.useId)(),[O,J]=(0,i.useState)(a||d||"inside"),[P,D]=(0,i.useState)(!1),V=`avatar-image-${F}`;E[13]!==O||E[14]!==d?(v=()=>{if(O===d)return;let e=requestAnimationFrame(()=>J(d));return()=>cancelAnimationFrame(e)},w=[O,d],E[13]=O,E[14]=d,E[15]=v,E[16]=w):(v=E[15],w=E[16]),(0,i.useEffect)(v,w),E[17]!==p?(y=()=>{p&&D(!1)},x=[p],E[17]=p,E[18]=y,E[19]=x):(y=E[18],x=E[19]),(0,i.useEffect)(y,x),E[20]!==u?($=()=>{D(!0),u&&u(Error("Avatar: the image failed to load"))},E[20]=u,E[21]=$):$=E[21];let G=$;E[22]!==H?(j=H.map(e4),E[22]=H,E[23]=j):j=E[23],k=j;let Y="string"==typeof M?M:void 0;return E[24]!==N?(I=(0,r.jsx)(eU,{children:(0,r.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,r.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:N})})}),E[24]=N,E[25]=I):I=E[25],E[26]!==o||E[27]!==T||E[28]!==L||E[29]!==G||E[30]!==P||E[31]!==V||E[32]!==p?(S=!P&&p&&(0,r.jsxs)(e2,{viewBox:`0 0 ${L} ${L}`,fill:"none",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:V,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,r.jsx)("image",{href:p,width:"1",height:"1",onError:G})})}),(0,r.jsx)("circle",{cx:T,cy:T,r:T,fill:`url(#${V})`}),!o&&(0,r.jsx)(eZ,{cx:T,cy:T,rx:T,ry:T,vectorEffect:"non-scaling-stroke"}),(0,r.jsx)(eQ,{cx:T,cy:T,rx:T,ry:T,vectorEffect:"non-scaling-stroke"})]}),E[26]=o,E[27]=T,E[28]=L,E[29]=G,E[30]=P,E[31]=V,E[32]=p,E[33]=S):S=E[33],E[34]!==P||E[35]!==c||E[36]!==k||E[37]!==p?(R=(P||!p)&&c&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e0,{children:(0,r.jsx)(e1,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),E[34]=P,E[35]=c,E[36]=k,E[37]=p,E[38]=R):R=E[38],E[39]!==O||E[40]!==M||E[41]!==N||E[42]!==t||E[43]!==f||E[44]!==H||E[45]!==A||E[46]!==Y||E[47]!==I||E[48]!==S||E[49]!==R||E[50]!==m?(C=(0,r.jsxs)(eK,{as:M,"data-as":Y,"data-ui":"Avatar",...f,$color:N,$size:H,"aria-label":m,"data-arrow-position":O,"data-status":A,ref:t,title:m,children:[I,S,R]}),E[39]=O,E[40]=M,E[41]=N,E[42]=t,E[43]=f,E[44]=H,E[45]=A,E[46]=Y,E[47]=I,E[48]=S,E[49]=R,E[50]=m,E[51]=C):C=E[51],C}).displayName="ForwardRef(Avatar)";let e3=a.I4.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,l.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:k(o.size/2),minWidth:k(o.size),height:k(o.size)}:x})},function(e){let{space:t}=(0,l.JW)(e.theme);return(0,a.AH)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${k(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),e5=(0,i.forwardRef)(function(e,t){let o,i,a,d;let l=(0,n.c)(9),{count:s,size:c}=e,u=z(void 0===c?1:c);return l[0]!==u?(i=u.map(e6),l[0]=u,l[1]=i):i=l[1],o=i,l[2]!==s||l[3]!==o?(a=(0,r.jsx)(eX,{as:"span",size:o,weight:"medium",children:s}),l[2]=s,l[3]=o,l[4]=a):a=l[4],l[5]!==t||l[6]!==u||l[7]!==a?(d=(0,r.jsx)(e3,{$size:u,"data-ui":"AvatarCounter",ref:t,children:a}),l[5]=t,l[6]=u,l[7]=a,l[8]=d):d=l[8],d});function e6(e){return 1===e?1:2===e?3:5*(3===e)}e5.displayName="ForwardRef(AvatarCounter)";let e7=(0,a.AH)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,e8=a.I4.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,l.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:k(o.distance)}}:x})},function(){return e7});(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c;let u=(0,n.c)(15);u[0]!==e?({children:o,maxLength:d,size:l,...a}=e,u[0]=e,u[1]=o,u[2]=a,u[3]=d,u[4]=l):(o=u[1],a=u[2],d=u[3],l=u[4]);let f=void 0===d?4:d,p=void 0===l?1:l,h=i.Children.toArray(o).filter(i.isValidElement),g=Math.max(f,0),b=z(p),m=h.length,v=m-(g-1),w=v>1?h.slice(v,m):h,y=0===m&&(0,r.jsx)("div",{children:(0,r.jsx)(e5,{count:m,size:b})}),x=0!==m&&v>1&&(0,r.jsx)("div",{children:(0,r.jsx)(e5,{count:v,size:b})});u[5]!==b?(s=(e,t)=>(0,r.jsx)("div",{children:(0,i.cloneElement)(e,{size:b})},String(t)),u[5]=b,u[6]=s):s=u[6];let $=w.map(s);return u[7]!==e8||u[8]!==t||u[9]!==a||u[10]!==b||u[11]!==y||u[12]!==x||u[13]!==$?(c=(0,r.jsxs)(e8,{"data-ui":"AvatarStack",...a,ref:t,$size:b,children:[y,x,$]}),u[7]=e8,u[8]=t,u[9]=a,u[10]=b,u[11]=y,u[12]=x,u[13]=$,u[14]=c):c=u[14],c}).displayName="ForwardRef(AvatarStack)";let e9=a.I4.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return ee},eh,function(){return[en,ei,ea,er]},function(){return[eN,eA,e_,eW,eM,eH]},function(e){let{theme:t}=e;return[S(t,["margin"],e.$margin),S(t,["marginLeft","marginRight"],e.$marginX),S(t,["marginTop","marginBottom"],e.$marginY),S(t,["marginTop"],e.$marginTop),S(t,["marginRight"],e.$marginRight),S(t,["marginBottom"],e.$marginBottom),S(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},function(e){let{theme:t}=e;return[S(t,["padding"],e.$padding),S(t,["paddingLeft","paddingRight"],e.$paddingX),S(t,["paddingTop","paddingBottom"],e.$paddingY),S(t,["paddingTop"],e.$paddingTop),S(t,["paddingRight"],e.$paddingRight),S(t,["paddingBottom"],e.$paddingBottom),S(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}),te=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p,h,g,b,m,v,w,y,x,$,k,j,I,S,R,C,E,N,A;let _=(0,n.c)(59);_[0]!==e?({as:R,column:o,columnStart:a,columnEnd:i,display:C,flex:d,height:l,margin:E,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:g,padding:N,paddingX:y,paddingY:x,paddingTop:w,paddingRight:v,paddingBottom:b,paddingLeft:m,row:k,rowStart:I,rowEnd:j,sizing:S,...$}=e,_[0]=e,_[1]=o,_[2]=i,_[3]=a,_[4]=d,_[5]=l,_[6]=s,_[7]=c,_[8]=u,_[9]=f,_[10]=p,_[11]=h,_[12]=g,_[13]=b,_[14]=m,_[15]=v,_[16]=w,_[17]=y,_[18]=x,_[19]=$,_[20]=k,_[21]=j,_[22]=I,_[23]=S,_[24]=R,_[25]=C,_[26]=E,_[27]=N):(o=_[1],i=_[2],a=_[3],d=_[4],l=_[5],s=_[6],c=_[7],u=_[8],f=_[9],p=_[10],h=_[11],g=_[12],b=_[13],m=_[14],v=_[15],w=_[16],y=_[17],x=_[18],$=_[19],k=_[20],j=_[21],I=_[22],S=_[23],R=_[24],C=_[25],E=_[26],N=_[27]);let W=void 0===R?"div":R,M=void 0===C?"block":C,H=void 0===E?0:E,L=void 0===N?0:N,T="string"==typeof W?W:void 0,F=z(o),O=z(a),J=z(i),B=z(M),P=z(d),D=z(l),V=z(H),G=z(p),Y=z(h),X=z(f),q=z(u),K=z(s),U=z(c),Z=z(g),Q=z(L),ee=z(y),et=z(x),eo=z(w),er=z(v),en=z(b),ei=z(m),ea=z(k),ed=z(I),el=z(j),es=z(S);return _[28]!==W||_[29]!==e.children||_[30]!==t||_[31]!==$||_[32]!==D||_[33]!==V||_[34]!==G||_[35]!==Y||_[36]!==X||_[37]!==q||_[38]!==K||_[39]!==U||_[40]!==Z||_[41]!==Q||_[42]!==ee||_[43]!==et||_[44]!==eo||_[45]!==er||_[46]!==en||_[47]!==ei||_[48]!==ea||_[49]!==ed||_[50]!==el||_[51]!==es||_[52]!==T||_[53]!==F||_[54]!==O||_[55]!==J||_[56]!==B||_[57]!==P?(A=(0,r.jsx)(e9,{"data-as":T,"data-ui":"Box",...$,$column:F,$columnStart:O,$columnEnd:J,$display:B,$flex:P,$height:D,$margin:V,$marginX:G,$marginY:Y,$marginTop:X,$marginRight:q,$marginBottom:K,$marginLeft:U,$overflow:Z,$padding:Q,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:er,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:ed,$rowEnd:el,$sizing:es,as:W,ref:t,children:e.children}),_[28]=W,_[29]=e.children,_[30]=t,_[31]=$,_[32]=D,_[33]=V,_[34]=G,_[35]=Y,_[36]=X,_[37]=q,_[38]=K,_[39]=U,_[40]=Z,_[41]=Q,_[42]=ee,_[43]=et,_[44]=eo,_[45]=er,_[46]=en,_[47]=ei,_[48]=ea,_[49]=ed,_[50]=el,_[51]=es,_[52]=T,_[53]=F,_[54]=O,_[55]=J,_[56]=B,_[57]=P,_[58]=A):A=_[58],A});te.displayName="ForwardRef(Box)";let tt=a.I4.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return R("text",e)},C,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,l.JW)(e.theme);return(0,a.AH)`
    color: var(--card-fg-color);

    ${t&&(0,a.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,a.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),to=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p;let h=(0,n.c)(22);h[0]!==e?({accent:d,align:o,children:i,muted:l,size:s,textOverflow:c,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=i,h[3]=a,h[4]=d,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],i=h[2],a=h[3],d=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==d&&d,b=void 0!==l&&l,m=void 0===s?2:s,v=i;if("ellipsis"===c){let e;h[9]!==v?(e=(0,r.jsx)(eG,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=z(o),y=z(m);return h[11]!==v?(f=(0,r.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==b||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,r.jsx)(tt,{"data-ui":"Text",...a,$accent:g,$align:w,$muted:b,ref:t,$size:y,$weight:u,children:f}),h[13]=g,h[14]=b,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});to.displayName="ForwardRef(Text)";let tr=(0,a.I4)(te).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(eD,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}});(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u;let f=(0,n.c)(17);if(f[0]!==e){let{children:t,fontSize:r,mode:n,padding:c,radius:u,tone:p,...h}=e;o=t,a=r,d=c,l=u,s=p,i=h,f[0]=e,f[1]=o,f[2]=i,f[3]=a,f[4]=d,f[5]=l,f[6]=s}else o=f[1],i=f[2],a=f[3],d=f[4],l=f[5],s=f[6];let p=void 0===a?1:a,h=void 0===d?1:d,g=void 0===s?"default":s,b=z(void 0===l?"full":l),m=z(h);return f[7]!==o||f[8]!==p?(c=(0,r.jsx)(to,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==i||f[12]!==b||f[13]!==m||f[14]!==c||f[15]!==g?(u=(0,r.jsx)(tr,{"data-ui":"Badge",...i,$tone:g,$radius:b,padding:m,ref:t,children:c}),f[10]=t,f[11]=i,f[12]=b,f[13]=m,f[14]=c,f[15]=g,f[16]=u):u=f[16],u}).displayName="ForwardRef(Badge)";let tn=(0,a.I4)(te).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(eh,function(){return[ed,el,es,ec,eu,ef]}),ti=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u;let f=(0,n.c)(17);f[0]!==e?({align:o,as:i,direction:s,gap:a,justify:d,wrap:c,...l}=e,f[0]=e,f[1]=o,f[2]=i,f[3]=a,f[4]=d,f[5]=l,f[6]=s,f[7]=c):(o=f[1],i=f[2],a=f[3],d=f[4],l=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=z(o),g=z(p),b=z(a),m=z(d),v=z(c);return f[8]!==i||f[9]!==t||f[10]!==l||f[11]!==h||f[12]!==g||f[13]!==b||f[14]!==m||f[15]!==v?(u=(0,r.jsx)(tn,{"data-ui":"Flex",...l,$align:h,$direction:g,$gap:b,$justify:m,$wrap:v,forwardedAs:i,ref:t}),f[8]=i,f[9]=t,f[10]=l,f[11]=h,f[12]=g,f[13]=b,f[14]=m,f[15]=v,f[16]=u):u=f[16],u});ti.displayName="ForwardRef(Flex)";let ta=(0,a.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,td=(0,a.I4)(to).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${ta} 500ms linear infinite;}`,tl=(0,i.forwardRef)(function(e,t){let o,i;let a=(0,n.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,r.jsx)(u.Nl1,{}),a[0]=o):o=a[0],a[1]!==e||a[2]!==t?(i=(0,r.jsx)(td,{"data-ui":"Spinner",...e,ref:t,children:o}),a[1]=e,a[2]=t,a[3]=i):i=a[3],i});function ts(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function tc(...e){return e.filter(Boolean).join(",")}tl.displayName="ForwardRef(Spinner)";let tu=a.I4.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(eD,function(e){let{$width:t}=e,{style:o}=(0,l.JW)(e.theme);return(0,a.AH)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,a.AH)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:r,style:n}=(0,l.JW)(e.theme),i="ghost"===e.$mode,a=r.button[t]||r.button.default,d=a[e.$tone]||a.default,s={width:o.border.width,color:"var(--card-border-color)"},c=void 0;return[ts(r,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:eb(s),'&:disabled, &[data-disabled="true"]':ts(r,d.disabled),"&:not([data-disabled='true'])":{boxShadow:tc(eb(s),i?c:void 0),"&:focus":{boxShadow:em({base:r,border:{width:2,color:r.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:tc(eb(s),i?c:void 0)},"@media (hover: hover)":{"&:hover":ts(r,d.hovered),"&:active":ts(r,d.pressed),"&[data-hovered]":ts(r,d.hovered)},"&[data-selected]":ts(r,d.pressed)}},n?.button?.root].filter(Boolean)}),tf=a.I4.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,tp=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,u,f,p,h,g,b,m,v,w,y,x,$,k,j,I,S,R,C,E,N,A,_,W,M,H,L,T;let F=(0,n.c)(66);F[0]!==e?({children:d,disabled:l,fontSize:w,icon:o,iconRight:a,justify:y,loading:s,mode:x,padding:$,paddingX:g,paddingY:b,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:j,text:C,textAlign:E,textWeight:N,tone:I,type:S,muted:R,width:A,...m}=e,F[0]=e,F[1]=o,F[2]=a,F[3]=d,F[4]=l,F[5]=s,F[6]=u,F[7]=f,F[8]=p,F[9]=h,F[10]=g,F[11]=b,F[12]=m,F[13]=v,F[14]=w,F[15]=y,F[16]=x,F[17]=$,F[18]=k,F[19]=j,F[20]=I,F[21]=S,F[22]=R,F[23]=C,F[24]=E,F[25]=N,F[26]=A):(o=F[1],a=F[2],d=F[3],l=F[4],s=F[5],u=F[6],f=F[7],p=F[8],h=F[9],g=F[10],b=F[11],m=F[12],v=F[13],w=F[14],y=F[15],x=F[16],$=F[17],k=F[18],j=F[19],I=F[20],S=F[21],R=F[22],C=F[23],E=F[24],N=F[25],A=F[26]);let O=void 0===w?1:w,J=void 0===y?"center":y,P=void 0===x?"default":x,D=void 0===$?3:$,V=void 0===k?2:k,G=void 0===j?3:j,Y=void 0===I?"default":I,X=void 0===S?"button":S,q=void 0!==R&&R,{button:K}=B(),U=z(J),Z=z(D),Q=z(g),ee=z(b),et=z(h),eo=z(u),er=z(f),en=z(p),ei=z(V),ea=z(G);F[27]!==Z||F[28]!==eo||F[29]!==er||F[30]!==en||F[31]!==et||F[32]!==Q||F[33]!==ee?(W={padding:Z,paddingX:Q,paddingY:ee,paddingTop:et,paddingBottom:eo,paddingLeft:er,paddingRight:en},F[27]=Z,F[28]=eo,F[29]=er,F[30]=en,F[31]=et,F[32]=Q,F[33]=ee,F[34]=W):W=F[34],_=W;let ed=!!(s||l),el=v?"":void 0,es=!!(s||l);return F[35]!==s?(M=!!s&&(0,r.jsx)(tf,{children:(0,r.jsx)(tl,{})}),F[35]=s,F[36]=M):M=F[36],F[37]!==o||F[38]!==a||F[39]!==_||F[40]!==K||F[41]!==O||F[42]!==U||F[43]!==q||F[44]!==ea||F[45]!==C||F[46]!==E||F[47]!==N?(H=(o||C||a)&&(0,r.jsx)(te,{as:"span",..._,children:(0,r.jsxs)(ti,{as:"span",justify:U,gap:ea,children:[o&&(0,r.jsxs)(to,{size:O,children:[(0,i.isValidElement)(o)&&o,(0,c.isValidElementType)(o)&&(0,r.jsx)(o,{})]}),C&&(0,r.jsx)(te,{children:(0,r.jsx)(to,{muted:q,align:E,size:O,textOverflow:"ellipsis",weight:N??K.textWeight,children:C})}),a&&(0,r.jsxs)(to,{size:O,children:[(0,i.isValidElement)(a)&&a,(0,c.isValidElementType)(a)&&(0,r.jsx)(a,{})]})]})}),F[37]=o,F[38]=a,F[39]=_,F[40]=K,F[41]=O,F[42]=U,F[43]=q,F[44]=ea,F[45]=C,F[46]=E,F[47]=N,F[48]=H):H=F[48],F[49]!==_||F[50]!==d?(L=d&&(0,r.jsx)(te,{as:"span",..._,children:d}),F[49]=_,F[50]=d,F[51]=L):L=F[51],F[52]!==P||F[53]!==ei||F[54]!==t||F[55]!==m||F[56]!==ed||F[57]!==el||F[58]!==es||F[59]!==M||F[60]!==H||F[61]!==L||F[62]!==Y||F[63]!==X||F[64]!==A?(T=(0,r.jsxs)(tu,{"data-ui":"Button",...m,$mode:P,$radius:ei,$tone:Y,"data-disabled":ed,"data-selected":el,disabled:es,ref:t,type:X,$width:A,children:[M,H,L]}),F[52]=P,F[53]=ei,F[54]=t,F[55]=m,F[56]=ed,F[57]=el,F[58]=es,F[59]=M,F[60]=H,F[61]=L,F[62]=Y,F[63]=X,F[64]=A,F[65]=T):T=F[65],T});tp.displayName="ForwardRef(Button)";let th=(0,a.I4)(te).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[q,K,U,Z,Q]},eD,function(e){let{card:t,media:o,shadow:r}=(0,l.JW)(e.theme);return j(o,e.$shadow,e=>(function(e,t=1){if(!e)return x;let o=`0 0 0 ${k(t)} var(--card-shadow-outline-color)`,r=eV(e.umbra,"var(--card-shadow-umbra-color)"),n=eV(e.penumbra,"var(--card-shadow-penumbra-color)"),i=eV(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${r}, ${n}, ${i}`}})(r[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,l.JW)(e.theme);return(0,a.AH)`
    ${t&&(0,a.AH)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:r}=e,{card:n,color:i,style:d}=(0,l.JW)(e.theme),s={width:n.border.width,color:"var(--card-border-color)"};return(0,a.AH)`
    color-scheme: ${i._dark?"dark":"light"};

    ${ts(i,i,t)}

    background-color: ${r?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${ts(i,i.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${ts(i,i.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${ts(i,i.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${ts(i,i.selectable.default.hovered,t)}
            }

            &:active {
              ${ts(i,i.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?em({base:i,border:s,focusRing:n.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${ts(i,i.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${ts(i,i.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${ts(i,i.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${ts(i,i.selectable.default.hovered,t)}
            }

            &:active {
              ${ts(i,i.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?em({base:i,border:s,focusRing:n.focusRing}):void 0};
        }
      }
    }

    ${d?.card?.root}
  `}(e)]}),tg=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,u,f,p,h,g,b,m,v,w,y,x,$;let k=(0,n.c)(42);k[0]!==e?({__unstable_checkered:m,__unstable_focusRing:v,as:o,border:i,borderTop:s,borderRight:l,borderBottom:a,borderLeft:d,muted:u,pressed:f,radius:w,scheme:h,selected:g,shadow:b,tone:y,...p}=e,k[0]=e,k[1]=o,k[2]=i,k[3]=a,k[4]=d,k[5]=l,k[6]=s,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=g,k[12]=b,k[13]=m,k[14]=v,k[15]=w,k[16]=y):(o=k[1],i=k[2],a=k[3],d=k[4],l=k[5],s=k[6],u=k[7],f=k[8],p=k[9],h=k[10],g=k[11],b=k[12],m=k[13],v=k[14],w=k[15],y=k[16]);let j=void 0!==m&&m,I=void 0!==v&&v,S=void 0===w?0:w,R=void 0===y?"default":y,C=(0,c.isValidElementType)(o)?o:"div",E=O(),N="inherit"===R?E.tone:R,A="string"==typeof C?C:void 0,_=E.scheme,W=z(i),M=z(s),H=z(l),L=z(a),T=z(d),F=z(S),B=z(b),P=j?"":void 0,D=f?"":void 0,V=g?"":void 0;return k[17]!==C||k[18]!==j||k[19]!==I||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==E.scheme||k[24]!==g||k[25]!==T||k[26]!==F||k[27]!==B||k[28]!==P||k[29]!==D||k[30]!==V||k[31]!==A||k[32]!==W||k[33]!==M||k[34]!==H||k[35]!==L||k[36]!==N?(x=(0,r.jsx)(th,{"data-as":A,"data-scheme":_,"data-ui":"Card","data-tone":N,...p,$border:W,$borderTop:M,$borderRight:H,$borderBottom:L,$borderLeft:T,$checkered:j,$focusRing:I,$muted:u,$radius:F,$shadow:B,$tone:N,"data-checkered":P,"data-pressed":D,"data-selected":V,forwardedAs:C,ref:t,selected:g}),k[17]=C,k[18]=j,k[19]=I,k[20]=u,k[21]=t,k[22]=p,k[23]=E.scheme,k[24]=g,k[25]=T,k[26]=F,k[27]=B,k[28]=P,k[29]=D,k[30]=V,k[31]=A,k[32]=W,k[33]=M,k[34]=H,k[35]=L,k[36]=N,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==N?($=(0,r.jsx)(J,{scheme:h,tone:N,children:x}),k[38]=h,k[39]=x,k[40]=N,k[41]=$):$=k[41],$});tg.displayName="ForwardRef(Card)";let tb=a.I4.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,a.AH)`
    position: relative;
    display: inline-block;
  `}),tm=a.I4.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:r}=(0,l.JW)(e.theme),{focusRing:n}=o.checkbox;return(0,a.AH)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${k(o.checkbox.size)};
      width: ${k(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${eb({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${k(r[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${eb({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${em({focusRing:n})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${em({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eb({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${em({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${eb({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${eb({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `});function tv({theme:e}){let{color:{syntax:t}}=(0,l.JW)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,f,p,h,g,b,m,v,w;let y=(0,n.c)(25);y[0]!==e?({checked:o,className:a,disabled:l,indeterminate:s,customValidity:d,readOnly:c,style:p,...f}=e,y[0]=e,y[1]=o,y[2]=a,y[3]=d,y[4]=l,y[5]=s,y[6]=c,y[7]=f,y[8]=p):(o=y[1],a=y[2],d=y[3],l=y[4],s=y[5],c=y[6],f=y[7],p=y[8]);let x=(0,i.useRef)(null);y[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,y[9]=h):h=y[9],(0,i.useImperativeHandle)(t,h),y[10]!==s?(g=()=>{x.current&&(x.current.indeterminate=s||!1)},b=[s],y[10]=s,y[11]=g,y[12]=b):(g=y[11],b=y[12]),(0,i.useEffect)(g,b),N(x,d);let $=!l&&c?"":void 0,k=d?"":void 0,j=l||c;return y[13]!==o||y[14]!==c||y[15]!==f||y[16]!==$||y[17]!==k||y[18]!==j?(m=(0,r.jsx)(tm,{"data-read-only":$,"data-error":k,...f,checked:o,disabled:j,type:"checkbox",readOnly:c,ref:x}),y[13]=o,y[14]=c,y[15]=f,y[16]=$,y[17]=k,y[18]=j,y[19]=m):m=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,r.jsxs)("span",{children:[(0,r.jsx)(u.Nrt,{}),(0,r.jsx)(u.YPx,{})]}),y[20]=v):v=y[20],y[21]!==a||y[22]!==p||y[23]!==m?(w=(0,r.jsxs)(tb,{className:a,"data-ui":"Checkbox",style:p,children:[m,v]}),y[21]=a,y[22]=p,y[23]=m,y[24]=w):w=y[24],w}).displayName="ForwardRef(Checkbox)";let tw=(0,i.lazy)(()=>o.e(826).then(o.bind(o,1826))),ty=a.I4.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,a.AH)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${tv}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return R("code",e)});(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p;let h=(0,n.c)(20);h[0]!==e?({children:o,language:a,size:l,weight:s,...d}=e,h[0]=e,h[1]=o,h[2]=a,h[3]=d,h[4]=l,h[5]=s):(o=h[1],a=h[2],d=h[3],l=h[4],s=h[5]);let g=z(void 0===l?2:l);return h[6]!==o?(c=(0,r.jsx)("code",{children:o}),h[6]=o,h[7]=c):c=h[7],h[8]!==o||h[9]!==a?(u=(0,r.jsx)(tw,{language:a,value:o}),h[8]=o,h[9]=a,h[10]=u):u=h[10],h[11]!==c||h[12]!==u?(f=(0,r.jsx)(i.Suspense,{fallback:c,children:u}),h[11]=c,h[12]=u,h[13]=f):f=h[13],h[14]!==t||h[15]!==d||h[16]!==g||h[17]!==f||h[18]!==s?(p=(0,r.jsx)(ty,{"data-ui":"Code",...d,$size:g,$weight:s,ref:t,children:f}),h[14]=t,h[15]=d,h[16]=g,h[17]=f,h[18]=s,h[19]=p):p=h[19],p}).displayName="ForwardRef(Code)";let tx={width:"100%",margin:"0 auto"},t$=(0,a.I4)(te).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return tx},function(e){let{container:t,media:o}=(0,l.JW)(e.theme);return j(o,e.$width,e=>({maxWidth:"auto"===e?"none":k(t[e])}))});(0,i.forwardRef)(function(e,t){let o,i,a,d;let l=(0,n.c)(9);l[0]!==e?({as:o,width:a,...i}=e,l[0]=e,l[1]=o,l[2]=i,l[3]=a):(o=l[1],i=l[2],a=l[3]);let s=z(void 0===a?2:a);return l[4]!==o||l[5]!==t||l[6]!==i||l[7]!==s?(d=(0,r.jsx)(t$,{"data-ui":"Container",...i,$width:s,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=i,l[7]=s,l[8]=d):d=l[8],d}).displayName="ForwardRef(Container)";let tk=(0,a.I4)(te).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[ev,ex,e$,ek,ej,eI,eS,eR,eC]}),tj=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p,h,g;let b=(0,n.c)(26);b[0]!==e?({as:o,autoRows:d,autoCols:i,autoFlow:a,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:l,...p}=e,b[0]=e,b[1]=o,b[2]=i,b[3]=a,b[4]=d,b[5]=l,b[6]=s,b[7]=c,b[8]=u,b[9]=f,b[10]=p,b[11]=h):(o=b[1],i=b[2],a=b[3],d=b[4],l=b[5],s=b[6],c=b[7],u=b[8],f=b[9],p=b[10],h=b[11]);let m="string"==typeof o?o:void 0,v=z(d),w=z(i),y=z(a),x=z(s),$=z(c),k=z(u),j=z(f),I=z(h);return b[12]!==o||b[13]!==l||b[14]!==t||b[15]!==p||b[16]!==m||b[17]!==v||b[18]!==w||b[19]!==y||b[20]!==x||b[21]!==$||b[22]!==k||b[23]!==j||b[24]!==I?(g=(0,r.jsx)(tk,{"data-as":m,"data-ui":"Grid",...p,$autoRows:v,$autoCols:w,$autoFlow:y,$columns:x,$gap:$,$gapX:k,$gapY:j,$rows:I,forwardedAs:o,ref:t,children:l}),b[12]=o,b[13]=l,b[14]=t,b[15]=p,b[16]=m,b[17]=v,b[18]=w,b[19]=y,b[20]=x,b[21]=$,b[22]=k,b[23]=j,b[24]=I,b[25]=g):g=b[25],g});tj.displayName="ForwardRef(Grid)";let tI=a.I4.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,l.JW)(e.theme);return(0,a.AH)`
    ${t&&(0,a.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,a.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},C,function(e){return R("heading",e)});(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p;let h=(0,n.c)(22);h[0]!==e?({accent:d,align:o,children:i,muted:l,size:s,textOverflow:c,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=i,h[3]=a,h[4]=d,h[5]=l,h[6]=s,h[7]=c,h[8]=u):(o=h[1],i=h[2],a=h[3],d=h[4],l=h[5],s=h[6],c=h[7],u=h[8]);let g=void 0!==d&&d,b=void 0!==l&&l,m=void 0===s?2:s,v=i;if("ellipsis"===c){let e;h[9]!==v?(e=(0,r.jsx)(eG,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=z(o),y=z(m);return h[11]!==v?(f=(0,r.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==b||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,r.jsx)(tI,{"data-ui":"Heading",...a,$accent:g,$align:w,$muted:b,$size:y,$weight:u,ref:t,children:f}),h[13]=g,h[14]=b,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p}).displayName="ForwardRef(Heading)";let tS=(0,a.I4)(te).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$space,e=>{let t=k(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),tR=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u;let f=(0,n.c)(12);f[0]!==e?({as:o,children:a,space:l,...d}=e,f[0]=e,f[1]=o,f[2]=a,f[3]=d,f[4]=l):(o=f[1],a=f[2],d=f[3],l=f[4]),f[5]!==a?(c=i.Children.map(a,tC),f[5]=a,f[6]=c):c=f[6],s=c;let p=z(l);return f[7]!==o||f[8]!==s||f[9]!==d||f[10]!==p?(u=(0,r.jsx)(tS,{"data-ui":"Inline",...d,$space:p,forwardedAs:o,ref:t,children:s}),f[7]=o,f[8]=s,f[9]=d,f[10]=p,f[11]=u):u=f[11],u});function tC(e){return e&&(0,r.jsx)("div",{children:e})}tR.displayName="ForwardRef(Inline)";let tz=a.I4.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(eD,function(){return(0,a.AH)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),tE=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u;let f=(0,n.c)(17);f[0]!==e?({children:o,fontSize:a,padding:d,radius:l,...i}=e,f[0]=e,f[1]=o,f[2]=i,f[3]=a,f[4]=d,f[5]=l):(o=f[1],i=f[2],a=f[3],d=f[4],l=f[5]);let p=void 0===a?0:a,h=void 0===d?1:d,g=z(void 0===l?2:l);return f[6]!==o||f[7]!==p?(s=(0,r.jsx)(to,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,r.jsx)(te,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==i||f[14]!==g||f[15]!==c?(u=(0,r.jsx)(tz,{"data-ui":"KBD",...i,$radius:g,ref:t,children:c}),f[12]=t,f[13]=i,f[14]=g,f[15]=c,f[16]=u):u=f[16],u});tE.displayName="ForwardRef(KBD)";let tN={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[r]=t.split("-"),n=o.floating.width,i=o.floating.height,a=e.shift?.x||0,d=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:l,originY:s}=["bottom","top"].includes(r)?{originX:tA(.5-a/n,0,1),originY:+("bottom"!==r)}:{originX:+("left"===r),originY:tA(.5-d/i,0,1)};return{data:{originX:l,originY:s}}}};function tA(e,t,o){return Math.min(Math.max(e,t),o)}function t_(e,t,o){let r=t.x-e.x,n=t.y-e.y;return tW(e,t,Math.min(1,o/Math.sqrt(r*r+n*n)))}function tW(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let tM=a.I4.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,a.AH)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),tH=a.I4.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,tL=a.I4.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,tT=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f;let p=(0,n.c)(24);p[0]!==e?({width:d,height:o,radius:a,...i}=e,p[0]=e,p[1]=o,p[2]=i,p[3]=a,p[4]=d):(o=p[1],i=p[2],a=p[3],d=p[4]);let h=void 0===a?0:a,{card:g}=B(),b=g.shadow.outline,m=(function(e){let t=e.length,o=[];for(let r=0;r<t;r+=1){let t=e[r],n=e[r-1],i=e[r+1];if(n&&t.radius){let e=t_(t,n,t.radius),r=t_(t,i,t.radius),a=tW(e,t,.5),d=tW(t,r,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:r,startControl:a,endControl:d})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:h,y:0,radius:h},{x:d/2,y:o-1,radius:h},{x:d-h,y:0,radius:h},{x:d,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${m}`,w=`${m} M ${d} -1 M 0 -1 Z`,y=`0 0 ${d} ${d}`;p[5]!==b||p[6]!==d?(l=(0,r.jsx)("mask",{id:"stroke-mask",children:(0,r.jsx)("rect",{x:0,y:b,width:d,height:d,fill:"white"})}),p[5]=b,p[6]=d,p[7]=l):l=p[7];let x=2*b;return p[8]!==v||p[9]!==x?(s=(0,r.jsx)(tH,{d:v,mask:"url(#stroke-mask)",strokeWidth:x}),p[8]=v,p[9]=x,p[10]=s):s=p[10],p[11]!==w?(c=(0,r.jsx)(tL,{d:w}),p[11]=w,p[12]=c):c=p[12],p[13]!==y||p[14]!==l||p[15]!==s||p[16]!==c||p[17]!==d?(u=(0,r.jsxs)("svg",{width:d,height:d,viewBox:y,children:[l,s,c]}),p[13]=y,p[14]=l,p[15]=s,p[16]=c,p[17]=d,p[18]=u):u=p[18],p[19]!==t||p[20]!==i||p[21]!==u||p[22]!==d?(f=(0,r.jsx)(tM,{...i,$w:d,ref:t,children:u}),p[19]=t,p[20]=i,p[21]=u,p[22]=d,p[23]=f):f=p[23],f});tT.displayName="ForwardRef(Arrow)";let tF=L("@sanity/ui/context/boundaryElement",null);function tO(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}let tJ={version:0,element:null};function tB(){let e=(0,i.useContext)(tF);if(e&&(!tO(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||tJ}function tP(e){if(!tO(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g;let b=(0,n.c)(18),m=B();b[0]!==e?({children:a,media:o,...d}=e,b[0]=e,b[1]=o,b[2]=a,b[3]=d):(o=b[1],a=b[2],d=b[3]);let v=o??m.media,[w,y]=(0,i.useState)(null),x=W(w);if(l=x?.border.width??window.innerWidth,b[4]!==v||b[5]!==l){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]>t&&o.push(r);return o}(v,l);c=e.length?e.join(" "):void 0,b[4]=v,b[5]=l,b[6]=c}else c=b[6];if(s=c,b[7]!==v||b[8]!==l){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&o.push(r);return o}(v,l);f=e.length?e.join(" "):void 0,b[7]=v,b[8]=l,b[9]=f}else f=b[9];return u=f,b[10]!==w?(p=()=>w,h=[w],b[10]=w,b[11]=p,b[12]=h):(p=b[11],h=b[12]),(0,i.useImperativeHandle)(t,p,h),b[13]!==a||b[14]!==s||b[15]!==u||b[16]!==d?(g=(0,r.jsx)("div",{"data-ui":"ElementQuery",...d,"data-eq-max":s,"data-eq-min":u,ref:y,children:a}),b[13]=a,b[14]=s,b[15]=u,b[16]=d,b[17]=g):g=b[17],g}).displayName="ForwardRef(ElementQuery)";let tD=L("@sanity/ui/context/layer",null);function tV(){let e=(0,n.c)(2),t=(0,i.useContext)(tD);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=tP(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function tG(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function tY(e){return tG(e)&&"A"===e.nodeName}function tX(e){let t,o,a,d,l,s,c,u;let f=(0,n.c)(19),{children:p,zOffset:h}=e,g=(0,i.useContext)(tD);f[0]!==g?(t=g&&tP(g),f[0]=g,f[1]=t):t=f[1];let b=t,m=b?.registerChild,v=(b?.level??0)+1,w=z(void 0===h?0:h),y=w.length-1,x=Math.min(D(),y),$=b?b.zIndex+w[x]:w[x];f[2]===Symbol.for("react.memo_cache_sentinel")?(o={},f[2]=o):o=f[2];let[,k]=(0,i.useState)(o),[j,I]=(0,i.useState)(0),S=0===j;f[3]!==m||f[4]!==k?(a=e=>{let t=m?.(e);return void 0!==e?k(t=>{let o=t[e]??0,r={...t,[e]:o+1};return I(Object.keys(r).length),r}):I(tK),()=>{void 0!==e?k(t=>{let o={...t};return 1===o[e]?(delete o[e],I(Object.keys(o).length)):o[e]=o[e]-1,o}):I(tq),t?.()}},f[3]=m,f[4]=k,f[5]=a):a=f[5];let R=a;return f[6]!==v||f[7]!==m?(d=()=>m?.(v),l=[v,m],f[6]=v,f[7]=m,f[8]=d,f[9]=l):(d=f[8],l=f[9]),(0,i.useEffect)(d,l),f[10]!==S||f[11]!==v||f[12]!==R||f[13]!==j||f[14]!==$?(c={version:0,isTopLayer:S,level:v,registerChild:R,size:j,zIndex:$},f[10]=S,f[11]=v,f[12]=R,f[13]=j,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,r.jsx)(tD.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function tq(e){return e-1}function tK(e){return e+1}tX.displayName="LayerProvider";let tU=a.I4.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),tZ=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g;let b=(0,n.c)(22);b[0]!==e?({children:o,onActivate:a,onFocus:d,style:s,...l}=e,b[0]=e,b[1]=o,b[2]=a,b[3]=d,b[4]=l,b[5]=s):(o=b[1],a=b[2],d=b[3],l=b[4],s=b[5]);let m=void 0===s?x:s,{zIndex:v,isTopLayer:w}=tV(),y=(0,i.useRef)(null),$=(0,i.useRef)(null),k=(0,i.useRef)(w);b[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,b[6]=c):c=b[6],(0,i.useImperativeHandle)(t,c),b[7]!==w||b[8]!==a?(u=()=>{k.current!==w&&w&&a?.({activeElement:y.current}),k.current=w},f=[w,a],b[7]=w,b[8]=a,b[9]=u,b[10]=f):(u=b[9],f=b[10]),(0,i.useEffect)(u,f),b[11]!==w||b[12]!==d?(p=e=>{d?.(e);let t=$.current,o=document.activeElement;!w||!t||!o||tG(o)&&(t.contains(o)||t===o)&&(y.current=o)},b[11]=w,b[12]=d,b[13]=p):p=b[13];let j=p;return b[14]!==m||b[15]!==v?(h={...m,zIndex:v},b[14]=m,b[15]=v,b[16]=h):h=b[16],b[17]!==o||b[18]!==j||b[19]!==l||b[20]!==h?(g=(0,r.jsx)(tU,{...l,"data-ui":"Layer",onFocus:j,ref:$,style:h,children:o}),b[17]=o,b[18]=j,b[19]=l,b[20]=h,b[21]=g):g=b[21],g}),tQ=(0,i.forwardRef)(function(e,t){let o,i,a,d,l;let s=(0,n.c)(11);s[0]!==e?({children:o,zOffset:a,...i}=e,s[0]=e,s[1]=o,s[2]=i,s[3]=a):(o=s[1],i=s[2],a=s[3]);let c=void 0===a?1:a;return s[4]!==o||s[5]!==t||s[6]!==i?(d=(0,r.jsx)(tZ,{...i,ref:t,children:o}),s[4]=o,s[5]=t,s[6]=i,s[7]=d):d=s[7],s[8]!==d||s[9]!==c?(l=(0,r.jsx)(tX,{zOffset:c,children:d}),s[8]=d,s[9]=c,s[10]=l):l=s[10],l});tQ.displayName="ForwardRef(Layer)";let t0="@sanity/ui/context/portal",t1=Symbol.for(`${t0}/element`);H[t1]=null;let t2=L(t0,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(H[t1]||(H[t1]=document.createElement("div"),H[t1].setAttribute("data-portal",""),document.body.appendChild(H[t1])),H[t1])}});function t4(){let e=(0,i.useContext)(t2);if(!e)throw Error("usePortal(): missing context value");if(!tO(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function t3(e){let t;let o=(0,n.c)(3),{children:r,__unstable_name:i}=e,a=t4(),d=(i?a.elements&&a.elements[i]:a.element)||a.elements?.default;return d?(o[0]!==r||o[1]!==d?(t=(0,m.createPortal)(r,d),o[0]=r,o[1]=d,o[2]=t):t=o[2],t):null}function t5(e){let t,o,a;let d=(0,n.c)(7),{boundaryElement:l,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,i.useRef)(e);return function(e,t){if(!e||!t)return e===t;let o=Object.keys(e),r=Object.keys(t);return o.length===r.length&&o.every(o=>e[o]===t[o])}(t.current,e)||(t.current=e),t.current}(u),p=(0,i.useSyncExternalStore)(t8,t7,t6),h=l||null,g=c||p;return d[0]!==f||d[1]!==h||d[2]!==g?(o={version:0,boundaryElement:h,element:g,elements:f},d[0]=f,d[1]=h,d[2]=g,d[3]=o):o=d[3],t=o,d[4]!==s||d[5]!==t?(a=(0,r.jsx)(t2.Provider,{value:t,children:s}),d[4]=s,d[5]=t,d[6]=a):a=d[6],a}function t6(){return null}function t7(){return document.body}t3.displayName="Portal",t5.displayName="PortalProvider";let t8=()=>()=>{},t9=a.I4.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,i.forwardRef)(function(e,t){let o;let i=(0,n.c)(4),{as:a,children:d}=e;return i[0]!==a||i[1]!==d||i[2]!==t?(o=(0,r.jsx)(t9,{"aria-hidden":!0,as:a,"data-ui":"SrOnly",ref:t,children:d}),i[0]=a,i[1]=d,i[2]=t,i[3]=o):o=i[3],o}).displayName="ForwardRef(SrOnly)";let oe=a.I4.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,ot=a.I4.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`;function oo(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(o=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g,b,m,v,w,y,x,$,k,j;let I=(0,n.c)(56);I[0]!==e?({as:s,gap:c,getItemKey:o,items:u,onChange:a,renderItem:d,...l}=e,I[0]=e,I[1]=o,I[2]=a,I[3]=d,I[4]=l,I[5]=s,I[6]=c,I[7]=u):(o=I[1],a=I[2],d=I[3],l=I[4],s=I[5],c=I[6],u=I[7]);let S=void 0===s?"div":s,R=void 0===c?0:c;I[8]!==u?(f=void 0===u?[]:u,I[8]=u,I[9]=f):f=I[9];let C=f,{space:z}=B(),E=(0,i.useRef)(null),N=(0,i.useRef)(null),[_,W]=(0,i.useState)(0),[M,H]=(0,i.useState)(0),[L,T]=(0,i.useState)(-1);I[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>E.current,I[10]=p):p=I[10],(0,i.useImperativeHandle)(t,p),I[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&T(e.offsetHeight)},I[11]=h):h=I[11],I[12]!==d?(g=[d],I[12]=d,I[13]=g):g=I[13],(0,i.useEffect)(h,g),I[14]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{if(!E.current)return;let e=function(e){let t=e;for(;t&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(t);)t=t.parentNode;return t}(E.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{W(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let o=new A(e=>{H(e[0].contentRect.height)});return o.observe(e),t(),()=>{e.removeEventListener("scroll",t),o.unobserve(e),o.disconnect()}}let t=()=>{W(window.scrollY)},o=()=>{H(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),H(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},m=[],I[14]=b,I[15]=m):(b=I[14],m=I[15]),(0,i.useEffect)(b,m);let F=C.length,O=L?F*(L+z[R])-z[R]:0,J=O?Math.max(Math.floor(_/O*F)-2,0):0,P=O?Math.ceil((_+M)/O*F)+1:0;I[16]!==J||I[17]!==R||I[18]!==L||I[19]!==a||I[20]!==M||I[21]!==_||I[22]!==z||I[23]!==P?(w=()=>{a&&a({fromIndex:J,gap:z[R],itemHeight:L,scrollHeight:M,scrollTop:_,toIndex:P})},v=[J,R,L,a,M,_,z,P],I[16]=J,I[17]=R,I[18]=L,I[19]=a,I[20]=M,I[21]=_,I[22]=z,I[23]=P,I[24]=v,I[25]=w):(v=I[24],w=I[25]),(0,i.useEffect)(w,v);e:{let e;if(!d||0===C.length){y=null;break e}if(-1===L){let e,t;I[26]!==C[0]||I[27]!==d?(e=d(C[0]),I[26]=C[0],I[27]=d,I[28]=e):e=I[28],I[29]!==e?(t=[(0,r.jsx)(ot,{children:e},0)],I[29]=e,I[30]=t):t=I[30],y=t;break e}if(I[31]!==J||I[32]!==R||I[33]!==o||I[34]!==L||I[35]!==C||I[36]!==d||I[37]!==z||I[38]!==P){let t;I[40]!==J||I[41]!==R||I[42]!==o||I[43]!==L||I[44]!==d||I[45]!==z?(t=(e,t)=>{let n=J+t,i=d(e),a=o?o(e,n):n;return(0,r.jsx)(ot,{style:{top:n*(L+z[R])},children:i},a)},I[40]=J,I[41]=R,I[42]=o,I[43]=L,I[44]=d,I[45]=z,I[46]=t):t=I[46],e=C.slice(J,P).map(t),I[31]=J,I[32]=R,I[33]=o,I[34]=L,I[35]=C,I[36]=d,I[37]=z,I[38]=P,I[39]=e}else e=I[39];y=e}let D=y;return I[47]!==O?($={height:O},I[47]=O,I[48]=$):$=I[48],x=$,I[49]!==D||I[50]!==x?(k=(0,r.jsx)("div",{ref:N,style:x,children:D}),I[49]=D,I[50]=x,I[51]=k):k=I[51],I[52]!==S||I[53]!==l||I[54]!==k?(j=(0,r.jsx)(oe,{as:S,"data-ui":"VirtualList",...l,ref:E,children:k}),I[52]=S,I[53]=l,I[54]=k,I[55]=j):j=I[55],j}).displayName="ForwardRef(VirtualList)";let or=[0,0,0,0],on={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},oi=(0,a.I4)(h.P.create(tg)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,oa=(0,a.I4)(h.P.create(ti)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,od=(0,i.memo)((0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p,h,g,b,m,v,w,y,x,k,j,I,S,R,C,z,E,N,A,_,W,M,H,L,T;let F=(0,n.c)(66);F[0]!==e?({__unstable_margins:c,animate:o,arrow:i,arrowRef:a,arrowX:d,arrowY:l,children:s,padding:h,placement:g,originX:u,originY:f,overflow:p,radius:b,scheme:v,shadow:w,strategy:y,style:x,tone:k,width:j,x:I,y:S,...m}=e,F[0]=e,F[1]=o,F[2]=i,F[3]=a,F[4]=d,F[5]=l,F[6]=s,F[7]=c,F[8]=u,F[9]=f,F[10]=p,F[11]=h,F[12]=g,F[13]=b,F[14]=m,F[15]=v,F[16]=w,F[17]=y,F[18]=x,F[19]=k,F[20]=j,F[21]=I,F[22]=S):(o=F[1],i=F[2],a=F[3],d=F[4],l=F[5],s=F[6],c=F[7],u=F[8],f=F[9],p=F[10],h=F[11],g=F[12],b=F[13],m=F[14],v=F[15],w=F[16],y=F[17],x=F[18],k=F[19],j=F[20],I=F[21],S=F[22]);let{zIndex:O}=tV(),J=(I??0)+(R=c||or)[3],B=(S??0)+R[0],P=o?"transform":void 0;F[23]!==u||F[24]!==f||F[25]!==y||F[26]!==x||F[27]!==P||F[28]!==j||F[29]!==J||F[30]!==B||F[31]!==O?(z={left:J,originX:u,originY:f,position:y,top:B,width:j,zIndex:O,willChange:P,...x},F[23]=u,F[24]=f,F[25]=y,F[26]=x,F[27]=P,F[28]=j,F[29]=J,F[30]=B,F[31]=O,F[32]=z):z=F[32],C=z;let D=null!==d?d:void 0,V=null!==l?l:void 0;F[33]!==D||F[34]!==V?(N={left:D,top:V,right:void 0,bottom:void 0},F[33]=D,F[34]=V,F[35]=N):N=F[35],E=N;let G=m;return F[36]!==o?(A=o?["hidden","initial"]:void 0,F[36]=o,F[37]=A):A=F[37],F[38]!==o?(_=o?["visible","scaleIn"]:void 0,F[38]=o,F[39]=_):_=F[39],F[40]!==o?(W=o?["hidden","scaleOut"]:void 0,F[40]=o,F[41]=W):W=F[41],F[42]!==s||F[43]!==h?(M=(0,r.jsx)(ti,{direction:"column",flex:1,padding:h,children:s}),F[42]=s,F[43]=h,F[44]=M):M=F[44],F[45]!==p||F[46]!==M?(H=(0,r.jsx)(oa,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,variants:$.children,transition:$.transition,children:M}),F[45]=p,F[46]=M,F[47]=H):H=F[47],F[48]!==i||F[49]!==a||F[50]!==E?(L=i&&(0,r.jsx)(tT,{ref:a,style:E,width:19,height:8,radius:2}),F[48]=i,F[49]=a,F[50]=E,F[51]=L):L=F[51],F[52]!==g||F[53]!==b||F[54]!==t||F[55]!==C||F[56]!==v||F[57]!==w||F[58]!==_||F[59]!==W||F[60]!==H||F[61]!==L||F[62]!==G||F[63]!==A||F[64]!==k?(T=(0,r.jsxs)(oi,{"data-ui":"Popover",...G,"data-placement":g,radius:b,ref:t,scheme:v,shadow:w,sizing:"border",style:C,tone:k,variants:$.card,transition:$.transition,initial:A,animate:_,exit:W,children:[H,L]}),F[52]=g,F[53]=b,F[54]=t,F[55]=C,F[56]=v,F[57]=w,F[58]=_,F[59]=W,F[60]=H,F[61]=L,F[62]=G,F[63]=A,F[64]=k,F[65]=T):T=F[65],T}));od.displayName="Memo(ForwardRef(PopoverCard))";let ol=()=>{let e;let t=(0,n.c)(2),{zIndex:o}=tV();return t[0]!==o?(e=(0,r.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:o}}),t[0]=o,t[1]=e):e=t[1],e},os=(0,i.memo)((0,i.forwardRef)(function(e,t){let{container:o,layer:n}=B(),a=tB(),{__unstable_margins:d=or,animate:l=!1,arrow:s=!1,boundaryElement:c=a.element,children:u,constrainSize:h=!1,content:b,disabled:m,fallbackPlacements:v=e.fallbackPlacements??on[e.placement??"bottom"],matchReferenceWidth:w,floatingBoundary:y=e.boundaryElement??a.element,modal:x,onActivate:$,open:k,overflow:j="hidden",padding:I,placement:S="bottom",portal:R,preventOverflow:C=!0,radius:E=3,referenceBoundary:N=e.boundaryElement??a.element,referenceElement:A,scheme:_,shadow:M=3,tone:H="inherit",width:L="auto",zOffset:T=n.popover.zOffset,updateRef:F,...O}=e,J=!Y()&&l,P=W(c)?.border,V=z(I),G=z(E),X=z(M),q=z(L),K=z(T),U=(0,i.useRef)(null),Z=(0,i.useRef)(null),Q="viewport";(0,i.useImperativeHandle)(t,()=>U.current);let ee=D(),et=h||C?P?.width:void 0,eo=function(e){let{container:t,mediaIndex:o,width:r}=e,n=r[o],i=void 0===n?r[r.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:ee,width:q}),er=(0,i.useRef)(eo);(0,i.useEffect)(()=>{er.current=eo},[eo]);let en=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(void 0!==o||void 0!==t)return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:et,currentWidth:eo}),ei=(0,i.useRef)(en);(0,i.useEffect)(()=>{ei.current=en},[en]);let ea=(0,i.useRef)(void 0);(0,i.useEffect)(()=>{let e=U.current;if(!k||!e)return;let t=ea.current;w?void 0!==t&&(e.style.width=`${t}px`):void 0!==eo&&(e.style.width=`${eo}px`),"number"==typeof en&&(e.style.maxWidth=`${en}px`)},[eo,w,en,k]);let ed=(0,i.useMemo)(()=>{let e=[];return(h||C)&&e.push((0,p.UU)({boundary:y||void 0,fallbackPlacements:v,padding:4,rootBoundary:Q})),e.push((0,p.cY)({mainAxis:4})),(h||w)&&e.push(function(e){let{apply:t,margins:o,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:d,rects:l}=n,{floating:s,reference:c}=l,u=await (0,f.__)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"}),p=1/0,h=1/0,g=s.width,b=s.height;a.includes("top")&&(p=g-(u.left+u.right),h=b-u.top),a.includes("right")&&(p=g-u.right,h=b-(u.top+u.bottom)),a.includes("bottom")&&(p=g-(u.left+u.right),h=b-u.bottom),a.includes("left")&&(p=g-u.left,h=b-(u.top+u.bottom)),t({availableWidth:p-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:c.width-o[1]-o[3]});let m=await d.getDimensions(i.floating),v=m.height;return g!==m.width||b!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:r}){ea.current=r;let n=er.current,i=ei.current;w?o.floating.style.width=`${r}px`:void 0!==n&&(o.floating.style.width=`${n}px`),h&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:y||void 0,margins:d,padding:4})),C&&e.push((0,p.BN)({boundary:y||void 0,rootBoundary:Q,padding:4})),s&&e.push((0,p.UE)({element:Z,padding:4})),J&&e.push(tN),e.push((0,p.jD)({boundary:N||void 0,padding:4,strategy:"referenceHidden"})),e},[J,s,h,v,y,d,w,C,N]),{x:el,y:es,middlewareData:ec,placement:eu,refs:ef,strategy:ep,update:eh}=(0,p.we)({middleware:ed,placement:S,whileElementsMounted:f.ll,elements:A?{reference:A}:void 0}),eg=ec.hide?.referenceHidden,eb=ec.arrow?.x,em=ec.arrow?.y,ev=ec["@sanity/ui/origin"]?.originX,ew=ec["@sanity/ui/origin"]?.originY,ey=(0,i.useCallback)(e=>{Z.current=e},[]),ex=(0,i.useCallback)(e=>{U.current=e,ef.setFloating(e)},[ef]),e$=(0,i.useCallback)(e=>{ef.setReference(e);let t=oo(u);"function"==typeof t?t(e):t&&(t.current=e)},[u,ef]),ek=(0,i.useMemo)(()=>A?u:u?(0,i.cloneElement)(u,{ref:e$}):null,[u,A,e$]);if((0,i.useEffect)(()=>{F&&("function"==typeof F?F(eh):F&&(F.current=eh))},[eh,F]),m)return u||(0,r.jsx)(r.Fragment,{});let ej=(0,r.jsxs)(tX,{zOffset:K,children:[x&&(0,r.jsx)(ol,{}),(0,r.jsx)(od,{...O,__unstable_margins:d,animate:J,arrow:s,arrowRef:ey,arrowX:eb,arrowY:em,hidden:eg,overflow:j,padding:V,placement:eu,radius:G,ref:ex,scheme:_,shadow:X,originX:ev,originY:ew,strategy:ep,tone:H,width:w?ea.current:eo,x:el,y:es,children:b})]}),eI=k&&(R?(0,r.jsx)(t3,{__unstable_name:"string"==typeof R?R:void 0,children:ej}):ej);return(0,r.jsxs)(r.Fragment,{children:[J?(0,r.jsx)(g.N,{children:eI}):eI,ek]})}));os.displayName="Memo(ForwardRef(Popover))";let oc=a.I4.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,a.AH)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),ou=a.I4.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,l.JW)(e.theme),r=(o.radio.size-o.radio.markSize)/2;return(0,a.AH)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${k(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${k(o.radio.size)};
      width: ${k(o.radio.size)};
      border-radius: ${k(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${eb({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${k(r)};
        left: ${k(r)};
        height: ${k(o.radio.markSize)};
        width: ${k(o.radio.markSize)};
        border-radius: ${k(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${em({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${eb({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eb({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `});function of(e){let{font:t}=(0,l.JW)(e.theme);return(0,a.AH)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function op(e){let{color:t,input:o}=(0,l.JW)(e.theme);return(0,a.AH)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${eb({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${eb({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${em({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${eb({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${eb({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function oh(e){let{$fontSize:t}=e,{font:o,media:r}=(0,l.JW)(e.theme);return j(r,t,e=>{var t;return{fontSize:k((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:k(t.lineHeight)}})}(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h;let g=(0,n.c)(19);g[0]!==e?({className:o,disabled:d,style:c,customValidity:a,readOnly:l,...s}=e,g[0]=e,g[1]=o,g[2]=a,g[3]=d,g[4]=l,g[5]=s,g[6]=c):(o=g[1],a=g[2],d=g[3],l=g[4],s=g[5],c=g[6]);let b=(0,i.useRef)(null);g[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>b.current,g[7]=u):u=g[7],(0,i.useImperativeHandle)(t,u),N(b,a);let m=!d&&l?"":void 0,v=a?"":void 0,w=d||l;return g[8]!==l||g[9]!==s||g[10]!==m||g[11]!==v||g[12]!==w?(f=(0,r.jsx)(ou,{"data-read-only":m,"data-error":v,...s,disabled:w,readOnly:l,ref:b,type:"radio"}),g[8]=l,g[9]=s,g[10]=m,g[11]=v,g[12]=w,g[13]=f):f=g[13],g[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,r.jsx)("span",{}),g[14]=p):p=g[14],g[15]!==o||g[16]!==c||g[17]!==f?(h=(0,r.jsxs)(oc,{className:o,"data-ui":"Radio",style:c,children:[f,p]}),g[15]=o,g[16]=c,g[17]=f,g[18]=h):h=g[18],h}).displayName="ForwardRef(Radio)";let og={root:function(){return(0,a.AH)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `},input:function(){return[eD,of,op,oh,eT]},iconBox:function(e){let{color:t}=(0,l.JW)(e.theme);return(0,a.AH)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}},ob=a.I4.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(og.root),om=a.I4.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(og.input),ov=(0,a.I4)(te).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(og.iconBox);(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,f,p,h,g,b,m,v,w,y;let x=(0,n.c)(29);x[0]!==e?({children:o,customValidity:a,disabled:d,fontSize:c,padding:f,radius:p,readOnly:l,space:h,...s}=e,x[0]=e,x[1]=o,x[2]=a,x[3]=d,x[4]=l,x[5]=s,x[6]=c,x[7]=f,x[8]=p,x[9]=h):(o=x[1],a=x[2],d=x[3],l=x[4],s=x[5],c=x[6],f=x[7],p=x[8],h=x[9]);let $=void 0===c?2:c,k=void 0===f?3:f,j=void 0===p?2:p,I=void 0===h?3:h,S=(0,i.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>S.current,x[10]=g):g=x[10],(0,i.useImperativeHandle)(t,g),N(S,a);let R=!d&&l?"":void 0,C=z($),E=z(k),A=z(j),_=z(I),W=d||l;return x[11]!==o||x[12]!==s||x[13]!==W||x[14]!==R||x[15]!==C||x[16]!==E||x[17]!==A||x[18]!==_?(b=(0,r.jsx)(om,{"data-read-only":R,"data-ui":"Select",...s,$fontSize:C,$padding:E,$radius:A,$space:_,disabled:W,ref:S,children:o}),x[11]=o,x[12]=s,x[13]=W,x[14]=R,x[15]=C,x[16]=E,x[17]=A,x[18]=_,x[19]=b):b=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(m=(0,r.jsx)(u.D3D,{}),x[20]=m):m=x[20],x[21]!==$?(v=(0,r.jsx)(to,{size:$,children:m}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(w=(0,r.jsx)(ov,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=w):w=x[25],x[26]!==b||x[27]!==w?(y=(0,r.jsxs)(ob,{"data-ui":"Select",children:[b,w]}),x[26]=b,x[27]=w,x[28]=y):y=x[28],y}).displayName="ForwardRef(Select)";let ow={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},oy=(0,a.I4)(te).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return ow},function(e){let{media:t,space:o}=(0,l.JW)(e.theme);return j(t,e.$space,e=>({gridGap:k(o[e])}))}),ox=(0,i.forwardRef)(function(e,t){let o,i,a,d;let l=(0,n.c)(10);l[0]!==e?({as:o,space:a,...i}=e,l[0]=e,l[1]=o,l[2]=i,l[3]=a):(o=l[1],i=l[2],a=l[3]);let s="string"==typeof o?o:void 0,c=z(a);return l[4]!==o||l[5]!==t||l[6]!==i||l[7]!==s||l[8]!==c?(d=(0,r.jsx)(oy,{"data-as":s,"data-ui":"Stack",...i,$space:c,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=i,l[7]=s,l[8]=c,l[9]=d):d=l[9],d});ox.displayName="ForwardRef(Stack)";let o$=a.I4.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,a.AH)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),ok=a.I4.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,a.AH)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oj=a.I4.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,l.JW)(e.theme);return(0,a.AH)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${k(o.switch.width)};
    height: ${k(o.switch.height)};
    border-radius: ${k(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${em({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oI=a.I4.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,l.JW)(e.theme);return(0,a.AH)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${k(t.switch.width)};
    height: ${k(t.switch.height)};
    border-radius: ${k(t.switch.height/2)};
  `}),oS=a.I4.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,l.JW)(e.theme),r=o.switch.width,n=o.switch.height,i=o.switch.padding,d=n-2*o.switch.padding,s=r-2*i-d,c=r/2-d/2-i,u=!0!==t&&!0===e.$checked;return(0,a.AH)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${k(i)};
    top: ${k(i)};
    height: ${k(d)};
    width: ${k(d)};
    border-radius: ${k(d/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,a.AH)`
      transform: translate3d(${s}px, 0, 0);
    `}

    ${t&&(0,a.AH)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `});(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g,b,m,v;let w=(0,n.c)(26);w[0]!==e?({checked:o,className:a,disabled:d,indeterminate:l,readOnly:s,style:u,...c}=e,w[0]=e,w[1]=o,w[2]=a,w[3]=d,w[4]=l,w[5]=s,w[6]=c,w[7]=u):(o=w[1],a=w[2],d=w[3],l=w[4],s=w[5],c=w[6],u=w[7]);let y=(0,i.useRef)(null);w[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>y.current,w[8]=f):f=w[8],(0,i.useImperativeHandle)(t,f),w[9]!==l?(p=()=>{y.current&&(y.current.indeterminate=l||!1)},h=[l],w[9]=l,w[10]=p,w[11]=h):(p=w[10],h=w[11]),(0,i.useEffect)(p,h);let x=!d&&s?"":void 0,$=!0!==l&&o,k=d||s;return w[12]!==c||w[13]!==x||w[14]!==$||w[15]!==k?(g=(0,r.jsx)(ok,{"data-read-only":x,...c,checked:$,disabled:k,type:"checkbox",ref:y}),w[12]=c,w[13]=x,w[14]=$,w[15]=k,w[16]=g):g=w[16],w[17]===Symbol.for("react.memo_cache_sentinel")?(b=(0,r.jsx)(oI,{}),w[17]=b):b=w[17],w[18]!==o||w[19]!==l?(m=(0,r.jsxs)(oj,{"aria-hidden":!0,"data-name":"representation",children:[b,(0,r.jsx)(oS,{$checked:o,$indeterminate:l})]}),w[18]=o,w[19]=l,w[20]=m):m=w[20],w[21]!==a||w[22]!==u||w[23]!==g||w[24]!==m?(v=(0,r.jsxs)(o$,{className:a,"data-ui":"Switch",style:u,children:[g,m]}),w[21]=a,w[22]=u,w[23]=g,w[24]=m,w[25]=v):v=w[25],v}).displayName="ForwardRef(Switch)";let oR=a.I4.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(eO),oC=a.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,oz=a.I4.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(eL,eJ,eB),oE=a.I4.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(eD,eP);(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g,b,m;let v=(0,n.c)(29);v[0]!==e?({border:l,customValidity:a,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...d}=e,v[0]=e,v[1]=o,v[2]=a,v[3]=d,v[4]=l,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(o=v[1],a=v[2],d=v[3],l=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let w=void 0===l||l,y=void 0!==s&&s,x=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,j=(0,i.useRef)(null),I=O();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>j.current,v[10]=h):h=v[10],(0,i.useImperativeHandle)(t,h),N(j,a);let S=I.scheme,R=I.tone,C=z(x),E=z($),A=I.scheme,_=z(0);v[11]!==y||v[12]!==d||v[13]!==I.scheme||v[14]!==I.tone||v[15]!==_||v[16]!==C||v[17]!==E||v[18]!==p?(g=(0,r.jsx)(oz,{"data-as":"textarea","data-scheme":S,"data-tone":R,...d,$fontSize:C,$padding:E,$scheme:A,$space:_,$tone:I.tone,$weight:p,disabled:y,ref:j}),v[11]=y,v[12]=d,v[13]=I.scheme,v[14]=I.tone,v[15]=_,v[16]=C,v[17]=E,v[18]=p,v[19]=g):g=v[19];let W=z(k),M=w?"":void 0;return v[20]!==o||v[21]!==I.scheme||v[22]!==I.tone||v[23]!==W||v[24]!==M?(b=(0,r.jsx)(oE,{$radius:W,$unstableDisableFocusRing:o,$scheme:I.scheme,$tone:I.tone,"data-border":M,"data-scheme":I.scheme,"data-tone":I.tone}),v[20]=o,v[21]=I.scheme,v[22]=I.tone,v[23]=W,v[24]=M,v[25]=b):b=v[25],v[26]!==g||v[27]!==b?(m=(0,r.jsx)(oR,{"data-ui":"TextArea",children:(0,r.jsxs)(oC,{children:[g,b]})}),v[26]=g,v[27]=b,v[28]=m):m=v[28],m}).displayName="ForwardRef(TextArea)";let oN={zIndex:2},oA=(0,a.I4)(tg).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(eO),o_=a.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,oW=(0,a.I4)(tg).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,oM=(0,a.I4)(tg).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,oH=a.I4.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(eL,eJ,eB),oL=a.I4.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(eD,eP),oT=(0,a.I4)(te).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,oF=(0,a.I4)(te).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,oO=(0,a.I4)(tg).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,oJ=(0,a.I4)(tp).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),oB=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,f,p,h,g,b,m,v,w,y,$,k,j,I,S,R,C,E,A,_,W,M,H,L,T,F,J,B,P,D,V,G,Y,X;let q=(0,n.c)(84);q[0]!==e?({__unstable_disableFocusRing:d,border:m,clearButton:l,disabled:v,fontSize:w,icon:o,iconRight:a,onClear:f,padding:y,prefix:p,radius:$,readOnly:h,space:k,suffix:b,customValidity:s,type:j,weight:I,...g}=e,q[0]=e,q[1]=o,q[2]=a,q[3]=d,q[4]=l,q[5]=s,q[6]=f,q[7]=p,q[8]=h,q[9]=g,q[10]=b,q[11]=m,q[12]=v,q[13]=w,q[14]=y,q[15]=$,q[16]=k,q[17]=j,q[18]=I):(o=q[1],a=q[2],d=q[3],l=q[4],s=q[5],f=q[6],p=q[7],h=q[8],g=q[9],b=q[10],m=q[11],v=q[12],w=q[13],y=q[14],$=q[15],k=q[16],j=q[17],I=q[18]);let K=void 0===m||m,U=void 0!==v&&v,Z=void 0===w?2:w,Q=void 0===y?3:y,ee=void 0===$?2:$,et=void 0===k?3:k,eo=void 0===j?"text":j,er=(0,i.useRef)(null),en=O(),ei=z(Z),ea=z(Q),ed=z(ee),el=z(et),es=!!l,ec=!!o,eu=!!a,ef=!!b,ep=!!p;q[19]===Symbol.for("react.memo_cache_sentinel")?(S=()=>er.current,q[19]=S):S=q[19],(0,i.useImperativeHandle)(t,S),N(er,s),q[20]!==f?(R=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),er.current?.focus()},q[20]=f,q[21]=R):R=q[21];let eh=R;q[22]!==p||q[23]!==ed?(E=p&&(0,r.jsx)(oW,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ed,sizing:"border",tone:"inherit",children:(0,r.jsx)("span",{children:p})}),q[22]=p,q[23]=ed,q[24]=E):E=q[24],C=E;let eg=K?"":void 0;q[25]!==o||q[26]!==ei||q[27]!==ea?(_=o&&(0,r.jsx)(oT,{padding:ea,children:(0,r.jsxs)(to,{size:ei,children:[(0,i.isValidElement)(o)&&o,(0,c.isValidElementType)(o)&&(0,r.jsx)(o,{})]})}),q[25]=o,q[26]=ei,q[27]=ea,q[28]=_):_=q[28],q[29]!==es||q[30]!==a||q[31]!==ei||q[32]!==ea?(W=!es&&a&&(0,r.jsx)(oF,{padding:ea,children:(0,r.jsxs)(to,{size:ei,children:[(0,i.isValidElement)(a)&&a,(0,c.isValidElementType)(a)&&(0,r.jsx)(a,{})]})}),q[29]=es,q[30]=a,q[31]=ei,q[32]=ea,q[33]=W):W=q[33],q[34]!==ep||q[35]!==ef||q[36]!==d||q[37]!==ed||q[38]!==en.scheme||q[39]!==en.tone||q[40]!==eg||q[41]!==_||q[42]!==W?(M=(0,r.jsxs)(oL,{$hasPrefix:ep,$unstableDisableFocusRing:d,$hasSuffix:ef,$radius:ed,$scheme:en.scheme,$tone:en.tone,"data-border":eg,"data-scheme":en.scheme,"data-tone":en.tone,children:[_,W]}),q[34]=ep,q[35]=ef,q[36]=d,q[37]=ed,q[38]=en.scheme,q[39]=en.tone,q[40]=eg,q[41]=_,q[42]=W,q[43]=M):M=q[43],A=M,q[44]!==ea?(L=ea.map(oD),q[44]=ea,q[45]=L):L=q[45],H=L,q[46]!==ea?(F=ea.map(oV),q[46]=ea,q[47]=F):F=q[47],T=F,J="object"==typeof l?l:x,q[48]!==l||q[49]!==H||q[50]!==T||q[51]!==J||q[52]!==s||q[53]!==U||q[54]!==ei||q[55]!==eh||q[56]!==ed||q[57]!==h?(P=!U&&!h&&l&&(0,r.jsx)(oO,{forwardedAs:"span",padding:H,style:oN,tone:s?"critical":"inherit",children:(0,r.jsx)(oJ,{"aria-label":"Clear","data-qa":"clear-button",fontSize:ei,icon:u.USm,mode:"bleed",padding:T,radius:ed,...J,onClick:eh,onMouseDown:oP})}),q[48]=l,q[49]=H,q[50]=T,q[51]=J,q[52]=s,q[53]=U,q[54]=ei,q[55]=eh,q[56]=ed,q[57]=h,q[58]=P):P=q[58],B=P,q[59]!==ed||q[60]!==b?(V=b&&(0,r.jsx)(oM,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ed,sizing:"border",tone:"inherit",children:(0,r.jsx)("span",{children:b})}),q[59]=ed,q[60]=b,q[61]=V):V=q[61],D=V;let eb=eu||es;return q[62]!==ec||q[63]!==U||q[64]!==ei||q[65]!==ea||q[66]!==h||q[67]!==g||q[68]!==en.scheme||q[69]!==en.tone||q[70]!==el||q[71]!==eb||q[72]!==eo||q[73]!==I?(G=(0,r.jsx)(oH,{"data-as":"input","data-scheme":en.scheme,"data-tone":en.tone,...g,$fontSize:ei,$iconLeft:ec,$iconRight:eb,$padding:ea,$scheme:en.scheme,$space:el,$tone:en.tone,$weight:I,disabled:U,readOnly:h,ref:er,type:eo}),q[62]=ec,q[63]=U,q[64]=ei,q[65]=ea,q[66]=h,q[67]=g,q[68]=en.scheme,q[69]=en.tone,q[70]=el,q[71]=eb,q[72]=eo,q[73]=I,q[74]=G):G=q[74],q[75]!==B||q[76]!==A||q[77]!==G?(Y=(0,r.jsxs)(o_,{children:[G,A,B]}),q[75]=B,q[76]=A,q[77]=G,q[78]=Y):Y=q[78],q[79]!==C||q[80]!==en.tone||q[81]!==D||q[82]!==Y?(X=(0,r.jsxs)(oA,{"data-ui":"TextInput",tone:en.tone,children:[C,Y,D]}),q[79]=C,q[80]=en.tone,q[81]=D,q[82]=Y,q[83]=X):X=q[83],X});function oP(e){e.preventDefault(),e.stopPropagation()}function oD(e){return 0===e?0:1===e||2===e?1:e-2}function oV(e){return 0===e||1===e?0:2===e?1:e-1}oB.displayName="ForwardRef(TextInput)";let oG={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},oY=(0,a.I4)(h.P.create(tg)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,oX=(0,i.memo)((0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f,p,h,g,b,m,v,w,y,x,k,j,I,S,R,C;let z=(0,n.c)(48);z[0]!==e?({animate:o,arrow:i,arrowRef:a,arrowX:d,arrowY:l,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:b,shadow:m,style:v,...g}=e,z[0]=e,z[1]=o,z[2]=i,z[3]=a,z[4]=d,z[5]=l,z[6]=s,z[7]=c,z[8]=u,z[9]=f,z[10]=p,z[11]=h,z[12]=g,z[13]=b,z[14]=m,z[15]=v):(o=z[1],i=z[2],a=z[3],d=z[4],l=z[5],s=z[6],c=z[7],u=z[8],f=z[9],p=z[10],h=z[11],g=z[12],b=z[13],m=z[14],v=z[15]);let E=o?"transform":void 0;z[16]!==c||z[17]!==u||z[18]!==v||z[19]!==E?(y={originX:c,originY:u,willChange:E,...v},z[16]=c,z[17]=u,z[18]=v,z[19]=E,z[20]=y):y=z[20],w=y;let N=null!==d?d:void 0,A=null!==l?l:void 0;z[21]!==N||z[22]!==A?(k={left:N,top:A,right:void 0,bottom:void 0},z[21]=N,z[22]=A,z[23]=k):k=z[23],x=k;let _=g;return z[24]!==o?(j=o?["hidden","initial"]:void 0,z[24]=o,z[25]=j):j=z[25],z[26]!==o?(I=o?["visible","scaleIn"]:void 0,z[26]=o,z[27]=I):I=z[27],z[28]!==o?(S=o?["hidden","scaleOut"]:void 0,z[28]=o,z[29]=S):S=z[29],z[30]!==i||z[31]!==a||z[32]!==x?(R=i&&(0,r.jsx)(tT,{ref:a,style:x,width:15,height:6,radius:2}),z[30]=i,z[31]=a,z[32]=x,z[33]=R):R=z[33],z[34]!==s||z[35]!==f||z[36]!==p||z[37]!==h||z[38]!==t||z[39]!==w||z[40]!==b||z[41]!==m||z[42]!==S||z[43]!==R||z[44]!==_||z[45]!==j||z[46]!==I?(C=(0,r.jsxs)(oY,{"data-ui":"Tooltip__card",..._,"data-placement":p,padding:f,radius:h,ref:t,scheme:b,shadow:m,style:w,variants:$.card,transition:$.transition,initial:j,animate:I,exit:S,children:[s,R]}),z[34]=s,z[35]=f,z[36]=p,z[37]=h,z[38]=t,z[39]=w,z[40]=b,z[41]=m,z[42]=S,z[43]=R,z[44]=_,z[45]=j,z[46]=I,z[47]=C):C=z[47],C}));oX.displayName="Memo(ForwardRef(TooltipCard))";let oq=L("@sanity/ui/context/tooltipDelayGroup",null),oK=(0,a.I4)(tQ).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,oU=(0,i.forwardRef)(function(e,t){let o=tB(),{layer:a}=B(),{animate:d=!1,arrow:l=!1,boundaryElement:s=o?.element,children:c,content:u,disabled:h,fallbackPlacements:b=e.fallbackPlacements??oG[e.placement??"bottom"],padding:m=2,placement:w="bottom",portal:y,radius:x=2,scheme:$,shadow:k=2,zOffset:j=a.tooltip.zOffset,delay:I,...S}=e,R=!Y()&&d,C=z(b),E=(0,i.useRef)(null),[N,A]=(0,i.useState)(null),_=(0,i.useRef)(null),W="viewport",[M,H]=(0,i.useState)(0);(0,i.useImperativeHandle)(t,()=>E.current);let L=t4(),T="string"==typeof y?L.elements?.[y]||null:L.element,F=(0,i.useMemo)(()=>{let e=[];return e.push((0,p.UU)({boundary:s||void 0,fallbackPlacements:C,padding:4,rootBoundary:W})),e.push((0,p.cY)({mainAxis:4})),e.push((0,p.BN)({boundary:s||void 0,rootBoundary:W,padding:4})),l&&e.push((0,p.UE)({element:_,padding:4})),R&&e.push(tN),e},[R,l,s,C]),{floatingStyles:O,placement:J,middlewareData:P,refs:D,update:V}=(0,p.we)({middleware:F,placement:w,whileElementsMounted:f.ll,elements:{reference:N}}),G=P.arrow?.x,X=P.arrow?.y,q=P["@sanity/ui/origin"]?.originX,K=P["@sanity/ui/origin"]?.originY,U=(0,i.useId)(),[Z,Q]=function(e){let t,o;let r=(0,n.c)(3),[a,d]=(0,i.useState)(e),l=(0,i.useRef)(void 0);r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{d(e)};if(l.current&&(clearTimeout(l.current),l.current=void 0),!t)return o();l.current=setTimeout(o,t)},r[0]=t):t=r[0];let s=t;return r[1]!==a?(o=[a,s],r[1]=a,r[2]=o):o=r[2],o}(!1),ee=(0,i.useContext)(oq),et=Z||ee?.openTooltipId===U,eo=null!==ee,er="number"==typeof I?I:I?.open||0,en="number"==typeof I?I:I?.close||0,ei=eo?ee.openDelay:er,ea=eo?ee.closeDelay:en,ed=(0,i.useCallback)((e,t)=>{if(eo){if(e){let o=t?0:ei;ee.setIsGroupActive(e,o),ee.setOpenTooltipId(U,o)}else{let o=ea>200?ea:200;ee.setIsGroupActive(e,o),ee.setOpenTooltipId(null,t?0:ea)}}else Q(e,t?0:e?ei:ea)},[eo,ee,ei,U,ea,Q]),el=(0,i.useCallback)(e=>{ed(!1),c?.props?.onBlur?.(e)},[c?.props,ed]),es=(0,i.useCallback)(e=>{ed(!1,!0),c?.props.onClick?.(e)},[c?.props,ed]),ec=(0,i.useCallback)(e=>{ed(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ed]),eu=(0,i.useCallback)(e=>{ed(!0),c?.props?.onFocus?.(e)},[c?.props,ed]),ef=(0,i.useCallback)(e=>{ed(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ed]),ep=(0,i.useCallback)(e=>{ed(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ed]);(function(e){let t,o,r;let a=(0,n.c)(8),{handleIsOpenChange:d,referenceElement:l,showTooltip:s}=e;a[0]!==d||a[1]!==l?(t=(e,t)=>{l&&(l===e||e instanceof Node&&l.contains(e)||(d(!1),t()))},a[0]=d,a[1]=l,a[2]=t):t=a[2];let c=(0,v.J)(t);a[3]!==c||a[4]!==s?(o=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},a[3]=c,a[4]=s,a[5]=o):o=a[5],a[6]!==s?(r=[s],a[6]=s,a[7]=r):r=a[7],(0,i.useEffect)(o,r)})({handleIsOpenChange:ed,referenceElement:N,showTooltip:et}),(0,i.useEffect)(()=>{h&&et&&ed(!1)},[h,ed,et]),(0,i.useEffect)(()=>{!u&&et&&ed(!1)},[u,ed,et]),(0,i.useEffect)(()=>{if(et)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ed(!1,!0)}},[ed,et]),(0,i.useLayoutEffect)(()=>{H(Math.min(...s?[s.offsetWidth]:[],T?.offsetWidth||document.body.offsetWidth)-8)},[s,T]);let eh=(0,i.useCallback)(e=>{_.current=e,V()},[V]),eg=(0,i.useCallback)(e=>{E.current=e,D.setFloating(e)},[D]),eb=(0,i.useMemo)(()=>c?(0,i.cloneElement)(c,{onBlur:el,onFocus:eu,onMouseEnter:ef,onMouseLeave:ep,onClick:es,onContextMenu:ec,ref:A}):null,[c,el,es,ec,eu,ef,ep]);if((0,i.useImperativeHandle)(c?oo(c):null,()=>N,[N]),!eb)return(0,r.jsx)(r.Fragment,{});if(h)return eb;let em=(0,r.jsx)(oK,{"data-ui":"Tooltip",...S,ref:eg,style:{...O,maxWidth:M>0?`${M}px`:void 0},zOffset:j,children:(0,r.jsx)(oX,{...S,animate:R,arrow:l,arrowRef:eh,arrowX:G,arrowY:X,originX:q,originY:K,padding:m,placement:J,radius:x,ref:eg,scheme:$,shadow:k,children:u})}),ev=et&&(y?(0,r.jsx)(t3,{__unstable_name:"string"==typeof y?y:void 0,children:em}):em);return(0,r.jsxs)(r.Fragment,{children:[R?(0,r.jsx)(g.N,{children:ev}):ev,eb]})});oU.displayName="ForwardRef(Tooltip)";let oZ=a.I4.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,oQ=(0,a.I4)(tE).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,o0=(0,i.forwardRef)(function(e,t){let o,i,a,d,l,s,c,u,f;let p=(0,n.c)(24);p[0]!==e?({fontSize:o,keys:i,padding:a,radius:d,space:s,...l}=e,p[0]=e,p[1]=o,p[2]=i,p[3]=a,p[4]=d,p[5]=l,p[6]=s):(o=p[1],i=p[2],a=p[3],d=p[4],l=p[5],s=p[6]);let h=z(void 0===s?.5:s);if(!i||0===i.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,r.jsx)(r.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==i||p[10]!==a||p[11]!==d){let e;p[13]!==o||p[14]!==a||p[15]!==d?(e=(e,t)=>(0,r.jsx)(oQ,{fontSize:o,padding:a,radius:d,children:e},t),p[13]=o,p[14]=a,p[15]=d,p[16]=e):e=p[16],c=i.map(e),p[8]=o,p[9]=i,p[10]=a,p[11]=d,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,r.jsx)(tR,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==l||p[22]!==u?(f=(0,r.jsx)(oZ,{"data-ui":"Hotkeys",...l,ref:t,children:u}),p[20]=t,p[21]=l,p[22]=u,p[23]=f):f=p[23],f});o0.displayName="ForwardRef(Hotkeys)";let o1=L("@sanity/ui/context/menu",null);function o2(e){var t;return tY(e)&&"true"!==e.getAttribute("data-disabled")||tG(t=e)&&"BUTTON"===t.nodeName&&!e.disabled}function o4(e){return e.filter(o2)}let o3=[],o5=(0,a.I4)(te).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,o6=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g,b,m,w,y,x,$,k,j,I,S,R,C,z;let N=(0,n.c)(50);if(N[0]!==e){let{children:t,focusFirst:r,focusLast:n,onClickOutside:i,onEscape:m,onItemClick:v,onItemSelect:w,onKeyDown:y,originElement:x,padding:$,registerElement:k,shouldFocus:j,space:I,...S}=e;a=t,d=i,l=m,s=v,c=w,u=y,f=x,g=$,p=k,o=j,b=I,h=S,N[0]=e,N[1]=o,N[2]=a,N[3]=d,N[4]=l,N[5]=s,N[6]=c,N[7]=u,N[8]=f,N[9]=p,N[10]=h,N[11]=g,N[12]=b}else o=N[1],a=N[2],d=N[3],l=N[4],s=N[5],c=N[6],u=N[7],f=N[8],p=N[9],h=N[10],g=N[11],b=N[12];let A=void 0===g?1:g,_=void 0===b?1:b,W=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),M=(0,i.useRef)(null);N[13]===Symbol.for("react.memo_cache_sentinel")?(m=()=>M.current,N[13]=m):m=N[13],(0,i.useImperativeHandle)(t,m);let{isTopLayer:H}=tV();N[14]!==u||N[15]!==f||N[16]!==W?(w={onKeyDown:u,originElement:f,shouldFocus:W,rootElementRef:M},N[14]=u,N[15]=f,N[16]=W,N[17]=w):w=N[17];let{activeElement:L,activeIndex:T,handleItemMouseEnter:F,handleItemMouseLeave:O,handleKeyDown:J,mount:B}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:r,rootElementRef:n}=e,a=(0,i.useRef)([]),[d,l]=(0,i.useState)(-1),s=(0,i.useRef)(d),c=(0,i.useMemo)(()=>a.current[d]||null,[d]),u=!!n.current,f=(0,i.useCallback)(e=>{l(e),s.current=e},[]),p=(0,i.useCallback)((e,t)=>e?(-1===a.current.indexOf(e)&&(a.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let r of t)o.set(r,function(e,t){let o=[],r=t;for(;r!==e;){let t=r.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(r);if(o.unshift(n),t===e)break;r=t}return o}(e,r));t.sort((e,t)=>{let r=o.get(e)||o3,n=o.get(t)||o3,i=Math.max(r.length,n.length);for(let e=0;e<i;e+=1){let t=r[e]||-1,o=n[e]||-1;if(t!==o)return t-o}return 0})}(n.current,a.current)),t&&f(a.current.indexOf(e)),()=>{let t=a.current.indexOf(e);t>-1&&a.current.splice(t,1)}):()=>{},[n,f]),h=(0,i.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=o4(a.current)[0];if(!t)return;f(a.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=o4(a.current),o=t[t.length-1];if(!o)return;f(a.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=o4(a.current),o=t.length;if(0===o)return;let r=a.current[s.current],n=t.indexOf(r),i=t[n=(n-1+o)%o];f(a.current.indexOf(i));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=o4(a.current),o=t.length;if(0===o)return;let r=a.current[s.current],n=t.indexOf(r),i=t[n=(n+1)%o];f(a.current.indexOf(i));return}t&&t(e)},[t,o,f]),g=(0,i.useCallback)(e=>{let t=e.currentTarget;f(a.current.indexOf(t))},[f]),b=(0,i.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,i.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===d){if("first"===r){let e=o4(a.current)[0];e&&f(a.current.indexOf(e))}if("last"===r){let e=o4(a.current),t=e[e.length-1];t&&f(a.current.indexOf(t))}return}(a.current[d]||null)?.focus()});return()=>cancelAnimationFrame(e)},[d,u,f,r]),{activeElement:c,activeIndex:d,handleItemMouseEnter:g,handleItemMouseLeave:b,handleKeyDown:h,mount:p}}(w),P=(0,i.useRef)(null);N[18]!==p?(y=e=>{P.current&&(P.current(),P.current=null),M.current=e,M.current&&p&&(P.current=p(M.current))},N[18]=p,N[19]=y):y=N[19];let D=y;return N[20]!==T||N[21]!==c?(x=()=>{c&&c(T)},$=[T,c],N[20]=T,N[21]=c,N[22]=x,N[23]=$):(x=N[22],$=N[23]),(0,i.useEffect)(x,$),N[24]===Symbol.for("react.memo_cache_sentinel")?(k=()=>[M.current],N[24]=k):k=N[24],function(e,t,o){let r,a,d;let l=(0,n.c)(9),s=void 0===t?E:t;void 0!==l[0]||l[1]!==s||l[2]!==e?(r=t=>{if(!e)return;let o=t.target;if(!(o instanceof Node))return;let r=void 0;if(!r||r.contains(o)){for(let e of s().flat())if(e&&(o===e||e.contains(o)))return;e(t)}},l[0]=o,l[1]=s,l[2]=e,l[3]=r):r=l[3];let c=(0,v.J)(r),u=!!e;l[4]!==u||l[5]!==c?(a=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},l[4]=u,l[5]=c,l[6]=a):a=l[6],l[7]!==u?(d=[u],l[7]=u,l[8]=d):d=l[8],(0,i.useEffect)(a,d),(0,i.useDebugValue)(e?"MouseDown On":"MouseDown Off")}(H&&d,k),N[25]!==H||N[26]!==l?(j=e=>{H&&"Escape"===e.key&&(e.stopPropagation(),l&&l())},N[25]=H,N[26]=l,N[27]=j):j=N[27],function(e){let t,o,r;let a=(0,n.c)(5);a[0]!==e?(t=t=>e(t),a[0]=e,a[1]=t):t=a[1];let d=(0,v.J)(t);a[2]!==d?(o=()=>{let e=e=>d(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},a[2]=d,a[3]=o):o=a[3],a[4]===Symbol.for("react.memo_cache_sentinel")?(r=[],a[4]=r):r=a[4],(0,i.useEffect)(o,r)}(j),N[28]!==L||N[29]!==T||N[30]!==F||N[31]!==O||N[32]!==B||N[33]!==d||N[34]!==l||N[35]!==s||N[36]!==p?(S={version:0,activeElement:L,activeIndex:T,mount:B,onClickOutside:d,onEscape:l,onItemClick:s,onItemMouseEnter:F,onItemMouseLeave:O,registerElement:p,onMouseEnter:F,onMouseLeave:O},N[28]=L,N[29]=T,N[30]=F,N[31]=O,N[32]=B,N[33]=d,N[34]=l,N[35]=s,N[36]=p,N[37]=S):S=N[37],I=S,N[38]!==a||N[39]!==_?(R=(0,r.jsx)(ox,{space:_,children:a}),N[38]=a,N[39]=_,N[40]=R):R=N[40],N[41]!==J||N[42]!==D||N[43]!==A||N[44]!==h||N[45]!==R?(C=(0,r.jsx)(o5,{"data-ui":"Menu",...h,onKeyDown:J,padding:A,ref:D,role:"menu",tabIndex:-1,children:R}),N[41]=J,N[42]=D,N[43]=A,N[44]=h,N[45]=R,N[46]=C):C=N[46],N[47]!==C||N[48]!==I?(z=(0,r.jsx)(o1.Provider,{value:I,children:C}),N[47]=C,N[48]=I,N[49]=z):z=N[49],z});o6.displayName="ForwardRef(Menu)";let o7=a.I4.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;o7.displayName="MenuDivider";let o8=(0,a.I4)(te).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(eD,function(){return(0,a.AH)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:r}=(0,l.JW)(e.theme),n=o.selectable[t];return(0,a.AH)`
    ${ts(o,n.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${ts(o,n.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${ts(o,n.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${ts(o,n.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${ts(o,n.hovered)}
            }

            &:active {
              ${ts(o,n.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${ts(o,n.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${ts(o,n.pressed)}
        }

        &[data-selected] {
          ${ts(o,n.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${ts(o,n.hovered)}
            }
            &:active {
              ${ts(o,n.pressed)}
            }
          }
        }
      }
    }

    ${r?.card?.root}
  `});function o9(){let e=(0,i.useContext)(o1);if(!e)throw Error("useMenu(): missing context value");if(!tO(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function re(e){let t,o,a,d,l,s,f,p,h,g,b,m,v,w,y,x,$,k,j,I,S,R,C,E,N,A,_,W,M,H,L,T,F,J,B;let P=(0,n.c)(79);P[0]!==e?({as:f,children:o,fontSize:p,icon:t,menu:a,onClick:d,padding:h,popover:l,radius:g,space:b,text:v,tone:m,...s}=e,P[0]=e,P[1]=t,P[2]=o,P[3]=a,P[4]=d,P[5]=l,P[6]=s,P[7]=f,P[8]=p,P[9]=h,P[10]=g,P[11]=b,P[12]=m,P[13]=v):(t=P[1],o=P[2],a=P[3],d=P[4],l=P[5],s=P[6],f=P[7],p=P[8],h=P[9],g=P[10],b=P[11],m=P[12],v=P[13]);let D=void 0===f?"button":f,V=void 0===p?1:p,G=void 0===h?3:h,Y=void 0===g?2:g,X=void 0===b?3:b,q=void 0===m?"default":m,K=o9(),{scheme:U}=O(),{activeElement:Z,mount:Q,onClickOutside:ee,onEscape:et,onItemClick:eo,onItemMouseEnter:er,registerElement:en}=K,ei=er??K.onMouseEnter,[ea,ed]=(0,i.useState)(null),[el,es]=(0,i.useState)(!1),[ec,eu]=(0,i.useState)(null),ef=!!Z&&Z===ea,[ep,eh]=(0,i.useState)(!1);P[14]!==ei?(w=e=>{eh(!1),ei(e),es(!0)},P[14]=ei,P[15]=w):w=P[15];let eg=w;P[16]!==ea?(y=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),es(!1),requestAnimationFrame(()=>{ea?.focus()}))},P[16]=ea,P[17]=y):y=P[17];let eb=y;P[18]!==d?(x=e=>{d?.(e),eu("first"),es(!0)},P[18]=d,P[19]=x):x=P[19];let em=x;P[20]!==eo?($=()=>{es(!1),eo?.()},P[20]=eo,P[21]=$):$=P[21];let ev=$;P[22]===Symbol.for("react.memo_cache_sentinel")?(k=()=>eh(!0),P[22]=k):k=P[22];let ew=k;P[23]!==Q||P[24]!==ea?(j=()=>Q(ea),I=[Q,ea],P[23]=Q,P[24]=ea,P[25]=j,P[26]=I):(j=P[25],I=P[26]),(0,i.useEffect)(j,I),P[27]!==ef?(S=()=>{ef||es(!1)},R=[ef],P[27]=ef,P[28]=S,P[29]=R):(S=P[28],R=P[29]),(0,i.useEffect)(S,R),P[30]!==el?(C=()=>{el||eh(!1)},E=[el],P[30]=el,P[31]=C,P[32]=E):(C=P[31],E=P[32]),(0,i.useEffect)(C,E),P[33]!==ec?(N=()=>{if(!ec)return;let e=requestAnimationFrame(()=>eu(null));return()=>cancelAnimationFrame(e)},A=[ec],P[33]=ec,P[34]=N,P[35]=A):(N=P[34],A=P[35]),(0,i.useEffect)(N,A),P[36]!==o||P[37]!==ev||P[38]!==eb||P[39]!==a||P[40]!==ee||P[41]!==et||P[42]!==en||P[43]!==ec?(_=(0,r.jsx)(o6,{...a,onClickOutside:ee,onEscape:et,onItemClick:ev,onKeyDown:eb,onMouseEnter:ew,registerElement:en,shouldFocus:ec,children:o}),P[36]=o,P[37]=ev,P[38]=eb,P[39]=a,P[40]=ee,P[41]=et,P[42]=en,P[43]=ec,P[44]=_):_=P[44];let ey=_;P[45]===Symbol.for("react.memo_cache_sentinel")?(W=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){eu("first"),es(!0),eh(!0);return}},P[45]=W):W=P[45];let ex=W,e$="button"===D?ep:void 0,ek="button"!==D?ep:void 0,ej=!ep&&ef?"":void 0,eI=z(Y),eS="button"===D?"button":void 0;return P[46]!==t||P[47]!==V?(M=t&&(0,r.jsxs)(to,{size:V,children:[(0,i.isValidElement)(t)&&t,(0,c.isValidElementType)(t)&&(0,r.jsx)(t,{})]}),P[46]=t,P[47]=V,P[48]=M):M=P[48],P[49]!==V||P[50]!==v?(H=(0,r.jsx)(te,{flex:1,children:(0,r.jsx)(to,{size:V,textOverflow:"ellipsis",weight:"medium",children:v})}),P[49]=V,P[50]=v,P[51]=H):H=P[51],P[52]===Symbol.for("react.memo_cache_sentinel")?(L=(0,r.jsx)(u.vKP,{}),P[52]=L):L=P[52],P[53]!==V?(T=(0,r.jsx)(to,{size:V,children:L}),P[53]=V,P[54]=T):T=P[54],P[55]!==G||P[56]!==X||P[57]!==M||P[58]!==H||P[59]!==T?(F=(0,r.jsxs)(ti,{gap:X,padding:G,children:[M,H,T]}),P[55]=G,P[56]=X,P[57]=M,P[58]=H,P[59]=T,P[60]=F):F=P[60],P[61]!==D||P[62]!==em||P[63]!==eg||P[64]!==s||P[65]!==U||P[66]!==e$||P[67]!==ek||P[68]!==ej||P[69]!==eI||P[70]!==eS||P[71]!==F||P[72]!==q?(J=(0,r.jsx)(o8,{"data-as":D,"data-ui":"MenuGroup",forwardedAs:D,...s,"aria-pressed":e$,"data-pressed":ek,"data-selected":ej,$radius:eI,$tone:q,$scheme:U,onClick:em,onKeyDown:ex,onMouseEnter:eg,ref:ed,tabIndex:-1,type:eS,children:F}),P[61]=D,P[62]=em,P[63]=eg,P[64]=s,P[65]=U,P[66]=e$,P[67]=ek,P[68]=ej,P[69]=eI,P[70]=eS,P[71]=F,P[72]=q,P[73]=J):J=P[73],P[74]!==ey||P[75]!==el||P[76]!==l||P[77]!==J?(B=(0,r.jsx)(os,{...l,content:ey,"data-ui":"MenuGroup__popover",open:el,children:J}),P[74]=ey,P[75]=el,P[76]=l,P[77]=J,P[78]=B):B=P[78],B}o8.displayName="Selectable",re.displayName="MenuGroup";let rt=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,u,f,p,h,g,b,m,v,w,y,x,$,k,j,I,S,R,C,E,N,A,_,W,M,H,L,T,F;let J=(0,n.c)(74);J[0]!==e?({as:x,children:d,disabled:l,fontSize:$,hotkeys:s,icon:o,iconRight:a,onClick:u,padding:k,paddingX:b,paddingY:m,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:j,selected:y,space:I,text:R,tone:S,...w}=e,J[0]=e,J[1]=o,J[2]=a,J[3]=d,J[4]=l,J[5]=s,J[6]=u,J[7]=f,J[8]=p,J[9]=h,J[10]=g,J[11]=b,J[12]=m,J[13]=v,J[14]=w,J[15]=y,J[16]=x,J[17]=$,J[18]=k,J[19]=j,J[20]=I,J[21]=S,J[22]=R):(o=J[1],a=J[2],d=J[3],l=J[4],s=J[5],u=J[6],f=J[7],p=J[8],h=J[9],g=J[10],b=J[11],m=J[12],v=J[13],w=J[14],y=J[15],x=J[16],$=J[17],k=J[18],j=J[19],I=J[20],S=J[21],R=J[22]);let B=void 0===x?"button":x,P=void 0===$?1:$,D=void 0===k?3:k,V=void 0===j?2:j,G=void 0===I?3:I,Y=void 0===S?"default":S,{scheme:X}=O(),q=o9(),{activeElement:K,mount:U,onItemClick:Z,onItemMouseEnter:Q,onItemMouseLeave:ee}=q,et=Q??q.onMouseEnter,eo=ee??q.onMouseLeave,[er,en]=(0,i.useState)(null),ei=!!K&&K===er,ea=(0,i.useRef)(null);J[23]===Symbol.for("react.memo_cache_sentinel")?(C=()=>ea.current,J[23]=C):C=J[23],(0,i.useImperativeHandle)(t,C),J[24]!==U||J[25]!==er||J[26]!==y?(E=()=>U(er,y),N=[U,er,y],J[24]=U,J[25]=er,J[26]=y,J[27]=E,J[28]=N):(E=J[27],N=J[28]),(0,i.useEffect)(E,N),J[29]!==l||J[30]!==u||J[31]!==Z?(A=e=>{l||(u&&u(e),Z&&Z())},J[29]=l,J[30]=u,J[31]=Z,J[32]=A):A=J[32];let ed=A;J[33]!==D||J[34]!==f||J[35]!==p||J[36]!==h||J[37]!==g||J[38]!==b||J[39]!==m?(W={padding:D,paddingX:b,paddingY:m,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p},J[33]=D,J[34]=f,J[35]=p,J[36]=h,J[37]=g,J[38]=b,J[39]=m,J[40]=W):W=J[40],_=W;let el=z(P);J[41]!==el?(M=el.map(ro),J[41]=el,J[42]=M):M=J[42];let es=M;J[43]===Symbol.for("react.memo_cache_sentinel")?(H=e=>{ea.current=e,en(e)},J[43]=H):H=J[43];let ec=H,eu="button"===B&&v,ef="button"!==B&&v?"":void 0,ep=ei?"":void 0,eh=l?"":void 0,eg=z(V),eb=z(0),em=l?"default":Y,ev="button"===B?"button":void 0;return J[44]!==o||J[45]!==a||J[46]!==P||J[47]!==s||J[48]!==es||J[49]!==_||J[50]!==G||J[51]!==R?(L=(o||R||a)&&(0,r.jsxs)(ti,{as:"span",gap:G,align:"center",..._,children:[o&&(0,r.jsxs)(to,{size:P,children:[(0,i.isValidElement)(o)&&o,(0,c.isValidElementType)(o)&&(0,r.jsx)(o,{})]}),R&&(0,r.jsx)(te,{flex:1,children:(0,r.jsx)(to,{size:P,textOverflow:"ellipsis",weight:"medium",children:R})}),s&&(0,r.jsx)(o0,{fontSize:es,keys:s,style:{marginTop:-4,marginBottom:-4}}),a&&(0,r.jsxs)(to,{size:P,children:[(0,i.isValidElement)(a)&&a,(0,c.isValidElementType)(a)&&(0,r.jsx)(a,{})]})]}),J[44]=o,J[45]=a,J[46]=P,J[47]=s,J[48]=es,J[49]=_,J[50]=G,J[51]=R,J[52]=L):L=J[52],J[53]!==d||J[54]!==_?(T=d&&(0,r.jsx)(te,{as:"span",..._,children:d}),J[53]=d,J[54]=_,J[55]=T):T=J[55],J[56]!==B||J[57]!==l||J[58]!==ed||J[59]!==et||J[60]!==eo||J[61]!==w||J[62]!==X||J[63]!==eu||J[64]!==ef||J[65]!==ep||J[66]!==eh||J[67]!==eg||J[68]!==eb||J[69]!==em||J[70]!==ev||J[71]!==L||J[72]!==T?(F=(0,r.jsxs)(o8,{"data-ui":"MenuItem",role:"menuitem",...w,"aria-pressed":eu,"data-pressed":ef,"data-selected":ep,"data-disabled":eh,forwardedAs:B,$radius:eg,$padding:eb,$tone:em,$scheme:X,disabled:l,onClick:ed,onMouseEnter:et,onMouseLeave:eo,ref:ec,tabIndex:-1,type:ev,children:[L,T]}),J[56]=B,J[57]=l,J[58]=ed,J[59]=et,J[60]=eo,J[61]=w,J[62]=X,J[63]=eu,J[64]=ef,J[65]=ep,J[66]=eh,J[67]=eg,J[68]=eb,J[69]=em,J[70]=ev,J[71]=L,J[72]=T,J[73]=F):F=J[73],F});function ro(e){return e-1}rt.displayName="ForwardRef(MenuItem)";let rr=(0,a.I4)(tp).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,rn=(0,i.forwardRef)(function(e,t){let o,a,d,l,s,c,u,f,p,h,g,b,m,v,w,y;let x=(0,n.c)(30);x[0]!==e?({icon:a,id:d,focused:o,fontSize:p,label:l,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=a,x[3]=d,x[4]=l,x[5]=s,x[6]=c,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],a=x[2],d=x[3],l=x[4],s=x[5],c=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,j=(0,i.useRef)(null),I=(0,i.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(g=()=>j.current,x[11]=g):g=x[11],(0,i.useImperativeHandle)(t,g),x[12]===Symbol.for("react.memo_cache_sentinel")?(b=()=>{I.current=!1},x[12]=b):b=x[12];let S=b;x[13]!==c?(m=e=>{I.current=!0,c&&c(e)},x[13]=c,x[14]=m):m=x[14];let R=m;x[15]!==o?(v=()=>{o&&!I.current&&(j.current&&j.current.focus(),I.current=!0)},w=[o],x[15]=o,x[16]=v,x[17]=w):(v=x[16],w=x[17]),(0,i.useEffect)(v,w);let C=f?"true":"false",z=f?0:-1;return x[18]!==$||x[19]!==R||x[20]!==a||x[21]!==d||x[22]!==l||x[23]!==s||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==C||x[28]!==z?(y=(0,r.jsx)(rr,{"data-ui":"Tab",...u,"aria-selected":C,fontSize:$,icon:a,id:d,mode:"bleed",onClick:s,onBlur:S,onFocus:R,padding:k,ref:j,role:"tab",selected:f,tabIndex:z,text:l,type:"button"}),x[18]=$,x[19]=R,x[20]=a,x[21]=d,x[22]=l,x[23]=s,x[24]=k,x[25]=u,x[26]=f,x[27]=C,x[28]=z,x[29]=y):y=x[29],y});rn.displayName="ForwardRef(Tab)";let ri=(0,a.I4)(tR).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,ra=(0,i.forwardRef)(function(e,t){let o,a,d,l,s;let c=(0,n.c)(15);c[0]!==e?({children:o,...a}=e,c[0]=e,c[1]=o,c[2]=a):(o=c[1],a=c[2]);let[u,f]=(0,i.useState)(-1);if(c[3]!==o||c[4]!==u){let e;let t=i.Children.toArray(o).filter(i.isValidElement);c[6]!==u?(e=(e,t)=>(0,i.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],d=t.map(e),c[3]=o,c[4]=u,c[5]=d}else d=c[5];let p=d,h=p.length;c[8]!==h?(l=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=l):l=c[9];let g=l;return c[10]!==g||c[11]!==t||c[12]!==a||c[13]!==p?(s=(0,r.jsx)(ri,{"data-ui":"TabList",...a,onKeyDown:g,ref:t,role:"tablist",children:p}),c[10]=g,c[11]=t,c[12]=a,c[13]=p,c[14]=s):s=c[14],s});ra.displayName="ForwardRef(TabList)"}}]);