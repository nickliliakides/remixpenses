import{a as k}from"/build/_shared/chunk-2V6YUO4N.js";import{a as E}from"/build/_shared/chunk-KBSTBQNH.js";import{d,i as a,n as l,p as m}from"/build/_shared/chunk-WCWGYFVK.js";import{c,g as u}from"/build/_shared/chunk-6ZWGV7J6.js";import{b as i}from"/build/_shared/chunk-LMXH6R3J.js";import{c as o}from"/build/_shared/chunk-Q3IECNXJ.js";var t=o(i());function y({id:s,title:n,amount:L}){let p=m();function h(){!confirm("Are you sure you want to delete this item?")||p.submit(null,{method:"delete",action:`/expenses/${s}`})}return p.state!=="idle"?(0,t.jsx)("article",{className:"expense-item locked",children:(0,t.jsx)("p",{children:"Deleting..."})}):(0,t.jsxs)("article",{className:"expense-item",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"expense-title",children:n}),(0,t.jsxs)("p",{className:"expense-amount",children:["\xA3",L.toFixed(2)]})]}),(0,t.jsxs)("menu",{className:"expense-actions",children:[(0,t.jsx)("button",{onClick:h,children:"Delete"}),(0,t.jsx)(a,{to:s,children:"Edit"})]})]})}var x=y;var r=o(i());function N({expenses:s}){return(0,r.jsx)("ol",{id:"expenses-list",children:s.map(n=>(0,r.jsx)("li",{children:(0,r.jsx)(x,{id:n.id,title:n.title,amount:n.amount})},n.id))})}var f=N;var w=o(E()),D=o(k()),e=o(i()),g=()=>{let s=l(),n=s&&s.length>0;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(d,{}),(0,e.jsxs)("main",{children:[(0,e.jsxs)("section",{id:"expenses-actions",children:[(0,e.jsxs)(a,{to:"add",children:[(0,e.jsx)(u,{}),(0,e.jsx)("span",{children:"Add expense"})]}),(0,e.jsxs)("a",{href:"/expenses/raw",children:[(0,e.jsx)(c,{}),(0,e.jsx)("span",{children:"Load Raw Data"})]})]}),n?(0,e.jsx)(f,{expenses:s}):(0,e.jsxs)("section",{id:"no-expenses",children:[(0,e.jsx)("h1",{children:"No expenses found"}),(0,e.jsxs)("p",{children:["Start ",(0,e.jsx)(a,{to:"add",children:"adding some"})," today."]})]})]})]})},F=g;export{F as default};
