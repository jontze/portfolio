"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[953],{953:(k,l,s)=>{s.r(l),s.d(l,{ProjectCardComponent:()=>I});var t=s(438),a=s(702),f=s(177),d=s(812);const p=[[["portfolio-card-title"]],"*"],u=["portfolio-card-title","*"];let m=(()=>{class e{constructor(){this.mouseX=(0,t.vPA)(0),this.mouseY=(0,t.vPA)(0),this.mouseStyle=(0,t.EWP)(()=>({"--mouse-x":`${this.mouseX()}px`,"--mouse-y":`${this.mouseY()}px`}))}onMouseMoveOnCard(n){this.mouseX.set(n.xPixel),this.mouseY.set(n.yPixel)}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["portfolio-card"]],standalone:!0,features:[t.aNF],ngContentSelectors:u,decls:4,vars:1,consts:[["portfolioMousePosition","",1,"relative","p-2","shadow-xl","rounded-md","bg-slate-50","dark:bg-gray-800","flex","flex-col","gap-2","after:absolute","after:w-96","after:h-96","after:-left-48","after:-top-48","after:bg-indigo-900","after:dark:bg-indigo-300","after:rounded-full","after:opacity-0","after:pointer-events-none","after:transition-opacity","after:duration-500","after:translate-x-[var(--mouse-x)]","after:translate-y-[var(--mouse-y)]","after:hover:opacity-10","after:z-30","after:blur-[100px]","overflow-hidden",3,"mouseMoveOnElement","ngStyle"],[1,"flex","flex-col","border-b","justify-center"]],template:function(r,o){1&r&&(t.NAR(p),t.j41(0,"div",0),t.bIt("mouseMoveOnElement",function(c){return o.onMouseMoveOnCard(c)}),t.j41(1,"div",1),t.SdG(2),t.k0s(),t.SdG(3,1),t.k0s()),2&r&&t.Y8G("ngStyle",o.mouseStyle())},dependencies:[d.Gc,f.B3],encapsulation:2,changeDetection:0})}return e})();const h=["*"];let v=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["portfolio-card-title"]],standalone:!0,features:[t.aNF],ngContentSelectors:h,decls:2,vars:0,consts:[[1,"flex","flex-row","justify-start","items-center","text-xl","gap-1"]],template:function(r,o){1&r&&(t.NAR(),t.j41(0,"div",0),t.SdG(1),t.k0s())},encapsulation:2,changeDetection:0})}return e})();var i=s(740),g=s(503);function C(e,y){if(1&e&&t.nrm(0,"portfolio-icon",10),2&e){const n=t.XpG();t.Y8G("icon",n.langIcon)}}let I=(()=>{class e{constructor(){this.codeIcon=i.I.Code,this.starIcon=i.I.Star,this.forkIcon=i.I.Fork,this.ghIcon=i.I.Github,this.ghState=(0,t.vPA)(a.PV.NONE)}get langIcon(){return this._langIcon}set langIcon(n){this._langIcon=Object.values(i.I).includes(n)?n:void 0}mouseOverIcon(n){this.ghState.set(n?a.PV.SPIN:a.PV.NONE)}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["portfolio-project-card"]],inputs:{title:"title",description:"description",link:"link",starCount:"starCount",forkCount:"forkCount",langIcon:"langIcon"},standalone:!0,features:[t.aNF],decls:19,vars:11,consts:[[1,"self-end",3,"icon"],["data-test","project-title",1,"pb-[0.15rem]"],["portfolioMouseOver","",1,"ml-auto",3,"isOver","icon","iconLink"],["data-test","project-card-content",1,"flex","flex-col","gap-2"],["data-test","project-description"],["data-test","project-card-footer",1,"flex","flex-row","gap-4","items-center","dark:border-t-gray-600","border-t","border-dotted","pt-1"],[1,"flex","flex-row","gap-2","items-center"],[1,"text-sm","self-end",3,"icon"],["data-test","project-stars",1,"pointer-events-none"],["data-test","project-forks",1,"pointer-events-none"],["data-test","project-lang",1,"text-sm","self-end",3,"icon"]],template:function(r,o){1&r&&(t.j41(0,"portfolio-card")(1,"portfolio-card-title"),t.nrm(2,"portfolio-icon",0),t.j41(3,"span",1),t.EFF(4),t.k0s(),t.j41(5,"portfolio-icon-link",2),t.bIt("isOver",function(c){return o.mouseOverIcon(c)}),t.k0s()(),t.j41(6,"div",3)(7,"p",4),t.EFF(8),t.k0s(),t.j41(9,"div",5)(10,"div",6),t.nrm(11,"portfolio-icon",7),t.j41(12,"span",8),t.EFF(13),t.k0s()(),t.j41(14,"div",6),t.nrm(15,"portfolio-icon",7),t.j41(16,"span",9),t.EFF(17),t.k0s()(),t.DNE(18,C,1,1,"portfolio-icon",10),t.k0s()()()),2&r&&(t.R7$(2),t.Y8G("icon",o.codeIcon),t.R7$(2),t.JRh(o.title),t.R7$(),t.Y8G("@smallSpin",o.ghState())("icon",o.ghIcon)("iconLink",o.link),t.R7$(3),t.SpI(" ",o.description," "),t.R7$(3),t.Y8G("icon",o.starIcon),t.R7$(2),t.JRh(o.starCount),t.R7$(2),t.Y8G("icon",o.forkIcon),t.R7$(2),t.JRh(o.forkCount),t.R7$(),t.vxM(18,o.langIcon?18:-1))},dependencies:[i.R,g.f,d.x$,m,v],encapsulation:2,data:{animation:[a.sd]},changeDetection:0})}return e})()}}]);