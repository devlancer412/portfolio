(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{1319:function(e,t,a){"use strict";var n=a(1664),l=a(9583),r=a(5893),s=a(3454);t.Z=function(){return(0,r.jsx)(n.default,{href:"/",as:s.env.BACKEND_URL,children:(0,r.jsx)("a",{className:"page-close hover:animate-pulse hover:text-[#FA6862] transition-all text-[30px] absolute right-[30px] top-[30px] z-[100] duration-300",children:(0,r.jsx)(l.G5m,{})})})}},7079:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(5893),l=function(e){return(0,n.jsxs)("h2",{className:"text-white text-[60px] sm:text-[55px] md:text-[68px] mb-[25px] relative z-0 font-black uppercase",children:[e.data.first," ",(0,n.jsx)("span",{className:"primary text-[#FA6862]",children:e.data.last}),(0,n.jsx)("span",{className:"title-bg animate-pulse text-[#46587c1f] text-[9.875vw] left-[0%] tracking-[10px] leading-[0.7] absolute right-0 top-[50%] -z-[1] -translate-y-[50%]",children:e.data.back})]})},r=function(e){return(0,n.jsx)("p",{className:"text-[18px] mb-[20px]",children:e.data})},s=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{data:e.data}),e.data.content.map((function(e,t){return(0,n.jsx)(r,{data:e},t)}))]})}},300:function(e,t,a){"use strict";var n=a(5893);t.Z=function(e){return(0,n.jsx)("div",{className:"page-title w-full sm:w-[80%] lg:w-[80.67%]",style:{marginBottom:e.mb?e.mb+"px":"0px"},children:e.children})}},7942:function(e,t,a){"use strict";var n=a(5696);t.default=void 0;var l,r=(l=a(7294))&&l.__esModule?l:{default:l},s=a(4957),o=a(9898),i=a(639);var c={};function u(e,t,a,n){if(e&&s.isLocalURL(t)){e.prefetch(t,a,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+a+(l?"%"+l:"")]=!0}}var f=function(e){var t,a=!1!==e.prefetch,l=o.useRouter(),f=r.default.useMemo((function(){var t=s.resolveHref(l,e.href,!0),a=n(t,2),r=a[0],o=a[1];return{href:r,as:e.as?s.resolveHref(l,e.as):o||r}}),[l,e.href,e.as]),d=f.href,p=f.as,h=e.children,x=e.replace,m=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=r.default.createElement("a",null,h));var w=(t=r.default.Children.only(h))&&"object"===typeof t&&t.ref,g=i.useIntersection({rootMargin:"200px"}),y=n(g,2),A=y[0],j=y[1],N=r.default.useCallback((function(e){A(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,A]);r.default.useEffect((function(){var e=j&&a&&s.isLocalURL(d),t="undefined"!==typeof b?b:l&&l.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(l,d,p,{locale:t})}),[p,d,j,b,a,l]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,n,l,r,o,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(a))&&(e.preventDefault(),t[l?"replace":"push"](a,n,{shallow:r,locale:i,scroll:o}))}(e,l,d,p,x,m,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&u(l,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:l&&l.locale,U=l&&l.isLocaleDomain&&s.getDomainLocale(p,E,l&&l.locales,l&&l.domainLocales);k.href=U||s.addBasePath(s.addLocale(p,E,l&&l.defaultLocale))}return r.default.cloneElement(t,k)};t.default=f},5277:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(5675),l=a(1319),r=a(7079),s=a(300),o=a(6791),i=a(5893),c=function(e){return(0,i.jsx)("p",{className:"px-[20px] py-[4px] bg-blur-[20px] bg-opacity-70 bg-black rounded-r-full text-gray-200 flex w-fit items-center gap-2 float-right",children:e.children})},u={src:"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/Joseph.e1698ba3.png",height:600,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42mOAAB15IFEHxKIMMFAW6tO+fXrn/y1TO8Phgqe7yiKf7Vj1//+T63YwMaYpXZ11l9fN+9+Un5UAFuHiFrvR0Nj1f+e27f+jYtP/Ozi6nWcQFRH5n5Vb9qeqrvt/eWXzXz5e7v8MbCwMF1zc/P/UNvT8Dw6N+gvU/IZBQly8QlfP+E9pRdN/VzevnwwMDDsBlQI6Px2ZT7cAAAAASUVORK5CYII="},f=JSON.parse('{"T":{"first":"Joseph","last":"Anderson","back":"About","content":["I am working as a web developer since 2018. Worked in more than 20 live projects and also with more than 10 different clients!"," I am passionate about emerging technologies and maintain a strong foundation in these fields. My career has allowed me to boost startups and businesses within the IT industry while establishing a successful employment history. First and foremost, my focus would be on fulfilling your needs."]},"N":["Full-Stack Blockchain Developer","Responsible Freelancer","Joseph Anderson"]}'),d=["animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-sky-400","animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-white","animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 bg-pink-500"],p=["relative inline-flex rounded-full h-3 w-3 bg-sky-500","relative inline-flex rounded-full h-3 w-3 bg-white","relative inline-flex rounded-full h-3 w-3 bg-pink-600"],h=function(){return(0,i.jsxs)(o.Z,{welcome:!0,children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)("div",{className:"author-image-large static md:absolute right-[15vw] top-[4vw] scale-75 md:scale-100 w-fit h-fit mx-auto",children:(0,i.jsxs)("div",{className:"border-white border-solid border-8 rounded-2xl drop-shadow-md hover:drop-shadow-xl  relative",children:[(0,i.jsx)("div",{className:"blur-[2px] brightness-90 hover:blur-[0.5px]",children:(0,i.jsx)(n.default,{alt:"joseph",src:u,className:"author"})}),(0,i.jsx)("div",{className:"absolute bottom-[2vw] left-0 flex flex-col gap-3",children:f.N.map((function(e,t){return(0,i.jsx)("div",{className:"flex justify-start",children:(0,i.jsxs)(c,{children:[(0,i.jsxs)("span",{className:"flex h-3 w-3",children:[(0,i.jsx)("span",{className:d[t]}),(0,i.jsx)("span",{className:p[t]})]}),e]})},t)}))})]})}),(0,i.jsx)("div",{className:'container w-full sm:w-[750px] md:w-[970px] lg:w-full mx-auto before:table before:content-[""] after:table after:content-[""] after:clear-both',children:(0,i.jsx)("div",{className:"w-full md:w-[50%] xl:w-[60%] float-left relative px-[15px]",children:(0,i.jsx)(s.Z,{page:"welcome",mb:75,children:(0,i.jsx)(r.Z,{data:f.T})})})})]})}},3575:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/welcome",function(){return a(5277)}])},1664:function(e,t,a){e.exports=a(7942)}},function(e){e.O(0,[445,153,791,774,888,179],(function(){return t=3575,e(e.s=t);var t}));var t=e.O();_N_E=t}]);