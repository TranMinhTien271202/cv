import{d,o as s,c as o,a as e,u as c,g,t as a,b as i,_ as f,e as x,f as p,s as b,h as k,F as m,i as v,j as y}from"./index.4ce51d52.js";const w={class:"mb-5 flex items-start"},$=["src"],B={class:"ml-3 w-full space-y-5"},C={class:"items-start justify-between sm:flex"},E={class:"mb-1 space-y-1.5"},V={class:"font-medium dark:text-night-50"},I={class:"flex space-x-5"},N={class:"flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},S={class:"max-w-sm"},j={class:"items-start space-y-2"},F={class:"flex gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},L={key:0,class:"border-b border-dashed border-gray-200 dark:border-night-600"},R=d({__name:"EducationCardItem",props:{item:null,separator:{type:Boolean}},setup(t){return(n,r)=>(s(),o("div",w,[e("img",{src:c(g)(t.item.collegeLogo),alt:"Avatar",class:"h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"},null,8,$),e("div",B,[e("div",C,[e("div",E,[e("div",V,a(t.item.college),1),e("div",I,[e("div",N,[e("span",S,a(t.item.course),1)])])]),e("div",j,[e("div",F,[i(f,{icon:"CalendarIcon",class:"h-4 w-4 shrink-0"}),e("span",null,a(t.item.start)+" \u2013 "+a(t.item.end),1)])])]),t.separator?(s(),o("div",L)):x("",!0)])]))}}),A={class:"card"},D={class:"mb-5 text-lg font-semibold dark:text-night-50"},P=d({__name:"EducationCard",setup(t){const n=p(),{resume:r}=b(n),_=k(()=>r.value.education.length);return(u,q)=>(s(),o("div",A,[e("h2",D,a(u.$t("education")),1),(s(!0),o(m,null,v(c(r).education,(h,l)=>(s(),y(R,{key:l,item:h,separator:c(_)>l+1},null,8,["item","separator"]))),128))]))}}),T={},G=d({__name:"EducationView",setup(t){return(n,r)=>(s(),o(m,null,[i(P),i(T)],64))}});export{G as default};