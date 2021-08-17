(this["webpackJsonpdopejob-v2"]=this["webpackJsonpdopejob-v2"]||[]).push([[7],{519:function(e,a,t){"use strict";var r=t(0),l=t.n(r),c=t(128),n=t(510),o=t(400),i=t(508),m=t(17),d=t(65),s=t(399),g=t(491),p=["className","color","outline","size"],b=Object(s.a)((function(e){return{primaryBackground:{background:e.palette.primary.main,color:e.palette.background.paper},secondaryBackground:{background:e.palette.secondary.main,color:e.palette.background.paper},errorBackground:{background:e.palette.error.main,color:e.palette.background.paper},warningBackground:{background:e.palette.warning.dark,color:e.palette.background.paper},infoBackground:{background:e.palette.info.main,color:e.palette.background.paper},successBackground:{background:e.palette.success.dark,color:e.palette.background.paper},greyBackground:{background:e.palette.grey[500],color:e.palette.background.paper},primaryOutline:{background:e.palette.background.paper,color:e.palette.primary.main,border:"2px solid "+e.palette.primary.main},secondaryOutline:{background:e.palette.background.paper,color:e.palette.secondary.main,border:"2px solid "+e.palette.secondary.main},errorOutline:{background:e.palette.background.paper,color:e.palette.error.main,border:"2px solid "+e.palette.error.main},warningOutline:{background:e.palette.background.paper,color:e.palette.warning.dark,border:"2px solid "+e.palette.warning.dark},infoOutline:{background:e.palette.background.paper,color:e.palette.info.main,border:"2px solid "+e.palette.info.main},successOutline:{background:e.palette.background.paper,color:e.palette.success.dark,border:"2px solid "+e.palette.success.dark},greyOutline:{background:e.palette.background.paper,color:e.palette.grey[500],border:"2px solid "+e.palette.grey[500]},badge:{width:e.spacing(3.5),height:e.spacing(3.5)},xs:{width:e.spacing(4.25),height:e.spacing(4.25)},sm:{width:e.spacing(5),height:e.spacing(5)},md:{width:e.spacing(7),height:e.spacing(7)},lg:{width:e.spacing(9),height:e.spacing(9)},xl:{width:e.spacing(10.25),height:e.spacing(10.25)}}})),E=function(e){var a=e.className,t=e.color,r=e.outline,c=e.size,n=Object(d.a)(e,p),o=b(),i=[];return i=t?r?[o[t+"Outline"]].concat(Object(m.a)(i)):[o[t+"Background"]].concat(Object(m.a)(i)):i,i=c?[o[c]].concat(Object(m.a)(i)):i,a&&(i=a?[].concat(Object(m.a)(i),[a]):i),l.a.createElement(g.a,Object.assign({className:i.join(" ")},n))};a.a=function(e){var a=e.title,t=e.link,r=e.icon,m=Object(c.a)();return l.a.createElement(n.a,{title:a||"Reference",placement:"left"},l.a.createElement(o.a,{disableRipple:!0},!r&&l.a.createElement(E,{component:i.a,href:t,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0},l.a.createElement("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{clipPath:"url(#clip0)"},l.a.createElement("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:m.palette.primary[800]}),l.a.createElement("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:m.palette.primary.main}),l.a.createElement("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:m.palette.primary[800]}),l.a.createElement("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:m.palette.primary.main})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip0"},l.a.createElement("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"}))))),r&&l.a.createElement(E,{component:i.a,href:t,target:"_blank",size:"badge",color:"primary",outline:!0},r)))}},532:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),c=t(128),n=t(224),o=t(497),i=t(82),m=t(490),d=t(134),s=t(105),g=t(519),p=t(18),b=function(e){var a=e.bgcolor,t=e.title,r=e.data,d=e.dark,s=Object(c.a)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{sx:{mb:3}},l.a.createElement(o.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:a,color:d?s.palette.grey[800]:"#ffffff"}},t&&l.a.createElement(i.a,{variant:"subtitle1",color:"inherit"},t),!t&&l.a.createElement(o.a,{sx:{p:1.15}}))),r&&l.a.createElement(m.a,{container:!0,justifyContent:"space-between",alignItems:"center"},l.a.createElement(m.a,{item:!0},l.a.createElement(i.a,{variant:"subtitle2"},r.label)),l.a.createElement(m.a,{item:!0},l.a.createElement(i.a,{variant:"subtitle1",sx:{textTransform:"uppercase"}},r.color))))};a.default=function(){var e=Object(c.a)();return l.a.createElement(s.a,{title:"Color Palette",secondary:l.a.createElement(g.a,{link:"https://next.material-ui.com/system/palette/"})},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Primary Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.primary.light,data:{label:"Shade-50",color:e.palette.primary.light},title:"primary.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.primary[200],data:{label:"Shade-200",color:e.palette.primary[200]},title:"primary[200]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.primary.main,data:{label:"Shade-500",color:e.palette.primary.main},title:"primary.main"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.primary.dark,data:{label:"Shade-600",color:e.palette.primary.dark},title:"primary.dark"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.primary[800],data:{label:"Shade-800",color:e.palette.primary[800]},title:"primary[800]"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Secondary Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.secondary.light,data:{label:"Shade-50",color:e.palette.secondary.light},title:"secondary.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.secondary[200],data:{label:"Shade-200",color:e.palette.secondary[200]},title:"secondary[200]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.secondary.main,data:{label:"Shade-500",color:e.palette.secondary.main},title:"secondary.main"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.secondary.dark,data:{label:"Shade-600",color:e.palette.secondary.dark},title:"secondary.dark"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.secondary[800],data:{label:"Shade-800",color:e.palette.secondary[800]},title:"secondary[800]"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Success Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.success.light,data:{label:"Shade-100",color:e.palette.success.light},title:"success.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.success[200],data:{label:"Shade-200",color:e.palette.success[200]},title:"success[200]"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.success.main,data:{label:"Shade-400",color:e.palette.success.main},title:"success.main"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.success.dark,data:{label:"Shade-700",color:e.palette.success.dark},title:"success.dark"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Orange Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.orange.light,data:{label:"Shade-50",color:e.palette.orange.light},title:"orange.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.orange.main,data:{label:"Shade-200",color:e.palette.orange.main},title:"orange.main"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.orange.dark,data:{label:"Shade-800",color:e.palette.orange.dark},title:"orange.dark"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Error Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.error.light,data:{label:"Shade-50",color:e.palette.error.light},title:"error.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.error.main,data:{label:"Shade-200",color:e.palette.error.main},title:"error.main"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.error.dark,data:{label:"Shade-800",color:e.palette.error.dark},title:"error.dark"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Warning Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.warning.light,data:{label:"Shade-50",color:e.palette.warning.light},title:"warning.light",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.warning.main,data:{label:"Shade-100",color:e.palette.warning.main},title:"warning.main",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.warning.dark,data:{label:"Shade-500",color:e.palette.warning.dark},title:"warning.dark"}))))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(d.a,{title:"Grey Color"},l.a.createElement(m.a,{container:!0,spacing:p.q},l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[50],data:{label:"Shade-50",color:e.palette.grey[50]},title:"grey[50]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[100],data:{label:"Shade-100",color:e.palette.grey[100]},title:"grey[100]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[200],data:{label:"Shade-200",color:e.palette.grey[200]},title:"grey[200]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[300],data:{label:"Shade-300",color:e.palette.grey[300]},title:"grey[300]",dark:!0})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[500],data:{label:"Shade-500",color:e.palette.grey[500]},title:"grey[500]"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[600],data:{label:"Shade-600",color:e.palette.grey[600]},title:"grey[600]"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[700],data:{label:"Shade-700",color:e.palette.grey[700]},title:"grey[700]"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:e.palette.grey[900],data:{label:"Shade-900",color:e.palette.grey[900]},title:"grey[900]"})),l.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:2},l.a.createElement(b,{bgcolor:"#fff",data:{label:"Pure White",color:"#ffffff"},title:"Pure White",dark:!0})))))))}}}]);
//# sourceMappingURL=7.9ca6c879.chunk.js.map