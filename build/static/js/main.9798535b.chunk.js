(this["webpackJsonptrello-tsc"]=this["webpackJsonptrello-tsc"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c,i,a,d,o,r,s,l,b,p,j,x,O,u,f=n(0),g=n.n(f),h=n(12),I=n.n(h),y=(n(33),n(34),n(3)),v=n(10),k=n(4),m=n(5),w=n(11),S=n(23),E=n(27),T=n(1),C=m.a.div(c||(c=Object(k.a)(["\n    height: 70px;\n    max-height: 100px;\n    background-color: white;\n    padding: 7px;\n    margin: 7px;\n    margin-bottom: 6px;\n    border-radius: 5px;\n"]))),A=m.a.div(i||(i=Object(k.a)(["\n\n"]))),D=function(t){var e=t.index,n=t.ticketId,c=t.content;return Object(T.jsx)(w.b,{draggableId:n,index:e,children:function(t){return Object(T.jsx)(C,Object(y.a)(Object(y.a)(Object(y.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(T.jsx)(A,{children:c})}))}},n)},_=n(9),N=function(){return Object(_.c)()},R=_.d,M="boardActions/MOVE_SECTION",P="boardActions/ADD_SECTION",K="boardActions/REMOVE_SECTION",V="boardActions/MOVE_TICKET_WITHIN_SAME_SECTION",z="boardActions/MOVE_TICKET_FROM_ONE_SECTION_TO_ANOTHER",H="boardActions/ADD_TICKET",B="boardActions/REMOVE_TICKET",F="sectionActions/ADD_TICKET",J=m.a.div(a||(a=Object(k.a)(["\n  height: 70px;\n  max-height: 70px;\n  background-color: white;\n  padding: 7px;\n  margin: 6px;\n  border-radius: 5px;\n"]))),W=m.a.input(d||(d=Object(k.a)(["\n  height: 30px;\n  border: unset;\n  width: 100%;\n  border-radius: 5px;\n  padding: 0 5px;\n  box-sizing: border-box;\n"]))),L=m.a.div(o||(o=Object(k.a)(["\n  background-color: rgba(75, 191, 107, 1);\n  border-radius: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  cursor: pointer;\n"]))),q=m.a.div(r||(r=Object(k.a)(["\n  text-align: center;\n  padding-top: 3px;\n  cursor: pointer;\n"]))),G=function(t){var e=t.sectionId,n=t.setShowAddTicket,c=N(),i=Object(f.useState)(""),a=Object(v.a)(i,2),d=a[0],o=a[1];return Object(f.useEffect)((function(){console.log(d)}),[d]),Object(T.jsxs)(J,{children:[Object(T.jsx)("div",{style:{width:"100%",justifyContent:"left"},children:Object(T.jsx)(W,{placeholder:"Enter Ticket Title..",value:d,onChange:function(t){o(t.target.value)}})}),Object(T.jsxs)("div",{style:{display:"flex",paddingTop:"6px",justifyContent:"space-between"},children:[Object(T.jsx)(L,{onClick:function(){var t=Date.now().toString();console.log("saved",d),c({type:F,payload:{sectionId:e,ticketDetails:{id:t,title:d}}}),c(function(t){return{type:H,payload:t}}({sectionId:e,ticketDetails:{id:t,title:d}})),n(!1)},children:"Add Ticket"}),Object(T.jsx)(q,{onClick:function(){n(!1),console.log("closed")},children:"Close"})]})]})},Q=m.a.div(s||(s=Object(k.a)(["\n  width: 300px;\n  min-width: 300px;\n  background-color: rgba(235, 236, 240, 0.5);\n  margin-left: 6px;\n  margin-top: 6px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n"]))),U=m.a.div(l||(l=Object(k.a)(["\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center\n"]))),X=m.a.h3(b||(b=Object(k.a)(["\n  margin: 5px;\n  width: 80%;\n  max-width: 15ch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),Y=m.a.div(p||(p=Object(k.a)(["\n  height: 25px;\n  background-color: rgba(235, 236, 240, 0.5);\n  display: flex;\n  padding: 5px;\n  margin: 7px;\n  margin-bottom: 6px;\n  border-radius: 5px;\n"])));function Z(t){var e=t.sectionId,n=t.index,c=N(),i=R((function(t){var n;return null===(n=t.sections.byId[e])||void 0===n?void 0:n.tickets})),a=R((function(t){return t.sections.byId})),d=R((function(t){return t.tickets.byId})),o=Object(f.useState)(!1),r=Object(v.a)(o,2),s=r[0],l=r[1];Object(f.useEffect)((function(){}),[a]),Object(f.useEffect)((function(){}),[d]);var b=null===i||void 0===i?void 0:i.map((function(t,e){return Object(T.jsx)(D,{ticketId:t,index:e,content:d[t].content},t)})),p=function(){console.log("deleted section"),c({type:K,payload:{sectionId:e}})},j=function(){console.log("Add ticket focused"),l(!0)},x=function(){return Object(T.jsx)("div",{onClick:p,style:{cursor:"pointer"},children:Object(T.jsx)(S.a,{icon:E.a})})};return Object(T.jsx)(w.b,{draggableId:e,index:n,children:function(t,n){var c;return Object(T.jsxs)(Q,Object(y.a)(Object(y.a)({className:"SectionContainer"},t.draggableProps),{},{ref:t.innerRef,children:[Object(T.jsxs)(U,Object(y.a)(Object(y.a)({},t.dragHandleProps),{},{children:[Object(T.jsx)(X,{children:null===(c=a[e])||void 0===c?void 0:c.title}),Object(T.jsx)(x,{})]})),Object(T.jsx)(w.c,{droppableId:e,type:"SECTION",children:function(t,n){return Object(T.jsxs)("div",Object(y.a)(Object(y.a)({style:{height:"100%"}},t.droppableProps),{},{ref:t.innerRef,children:[b,t.placeholder,s?Object(T.jsx)(G,{sectionId:e,setShowAddTicket:l}):Object(T.jsx)(Y,{onClick:j,children:Object(T.jsx)("span",{style:{fontSize:14,alignSelf:"center"},children:"+ Add another card..."})})]}))}})]}))}},e)}var $,tt,et,nt,ct,it,at,dt,ot,rt,st=m.a.div(j||(j=Object(k.a)(["\n  height: 70px;\n  max-height: 70px;\n\n  background-color: white;\n  padding: 7px;\n  margin: 6px;\n  border-radius: 5px;\n"]))),lt=m.a.input(x||(x=Object(k.a)(["\n  height: 30px;\n  width: 286px;\n  border: 1px solid black;\n  border-radius: 3px;\n  padding-left: 5px;\n  padding-right: 5px;\n"]))),bt=m.a.div(O||(O=Object(k.a)(["\n  width: 100px;\n  background-color: rgba(75, 191, 107, 1);\n  border-radius: 5px;\n  text-align: center;\n  padding: 3px;\n  cursor: pointer;\n"]))),pt=m.a.div(u||(u=Object(k.a)(["\n  width: 25px;\n  text-align: center;\n  margin-left: 150px;\n  padding-top: 3px;\n  cursor: pointer;\n"]))),jt=function(t){var e=t.setShowEditSection,n=N(),c=Object(f.useState)(""),i=Object(v.a)(c,2),a=i[0],d=i[1];return Object(f.useEffect)((function(){console.log(a)}),[a]),Object(T.jsxs)(st,{children:[Object(T.jsx)(lt,{placeholder:"Enter Section Name..",value:a,onChange:function(t){d(t.target.value)}}),Object(T.jsxs)("div",{style:{display:"flex",paddingTop:"6px"},children:[Object(T.jsx)(bt,{onClick:function(){var t;console.log("saved"),n((t={sectionId:Date.now().toString(),sectionTitle:a},{type:P,payload:t})),e(!1)},children:"Add Section"}),Object(T.jsx)(pt,{onClick:function(){e(!1),console.log("closed")},children:"Close"})]})]})},xt=m.a.div($||($=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  height: 96vh;\n"]))),Ot=m.a.div(tt||(tt=Object(k.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),ut=m.a.div(et||(et=Object(k.a)(["\n  width: 300px;\n  min-width: 300px;\n  height: 45px;\n  background-color: rgba(235, 236, 240, 0.5);\n  margin-left: 6px;\n  margin-top: 6px;\n  border-radius: 3px;\n  display: flex;\n  padding: 5px;\n"])));function ft(){var t,e=N(),n=R((function(t){return t.sections})),c=Object(f.useState)(!1),i=Object(v.a)(c,2),a=i[0],d=i[1],o=function(){console.log("edit section"),d(!0)},r=null===(t=n.allIds)||void 0===t?void 0:t.map((function(t,e){return Object(T.jsx)(Z,{sectionId:t,index:e},t)}));return Object(f.useEffect)((function(){console.log(n)}),[n]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Ot,{className:"board-header"}),Object(T.jsx)(w.a,{onDragEnd:function(t){if("BOARD"===t.type){var n;if(!t.destination)return;if(t.destination.droppableId===t.source.droppableId&&t.destination.index===t.source.index)return;e((c={from:t.source.index,to:null===(n=t.destination)||void 0===n?void 0:n.index},{type:M,payload:c}))}var c,i;if("SECTION"===t.type)if((null===(i=t.destination)||void 0===i?void 0:i.droppableId)===t.source.droppableId)e(function(t){return{type:V,payload:t}}({fromIndex:t.source.index,toIndex:t.destination.index,fromSectionId:t.source.droppableId,toSectionId:t.source.droppableId}));else{if(!t.destination)return;e(function(t){return{type:z,payload:t}}({fromIndex:t.source.index,toIndex:t.destination.index,fromSectionId:t.source.droppableId,toSectionId:t.destination.droppableId}))}console.log(t)},children:Object(T.jsx)(w.c,{droppableId:"parent_dropable_board",type:"BOARD",direction:"horizontal",children:function(t,e){return Object(T.jsxs)(xt,Object(y.a)(Object(y.a)({},t.droppableProps),{},{ref:t.innerRef,children:[r,t.placeholder,a?Object(T.jsx)(jt,{setShowEditSection:d}):Object(T.jsx)(ut,{onClick:o,children:Object(T.jsx)("span",{style:{fontSize:16,fontWeight:"bold",alignSelf:"center"},children:"+ ADD SECTION"})})]}))}})})]})}var gt=m.a.div(nt||(nt=Object(k.a)(["\n    width: auto;\n    background-color: rgba(0, 0, 0, 0.20);\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    justify-items: center;\n    justify-content: space-between;\n    padding: 3px;\n"]))),ht=m.a.div(ct||(ct=Object(k.a)(["\n    padding: 2px;\n"]))),It=m.a.h2(it||(it=Object(k.a)(["\n    margin-top: 0px;\n    margin-bottom: 0px;\n    color: white;\n"]))),yt=m.a.div(at||(at=Object(k.a)(["\n    width: 30px;\n    height: 30px;\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 4px;\n    margin-right: 3px;\n"]))),vt=m.a.div(dt||(dt=Object(k.a)(["\n    width: 100px;\n    height: 30px;\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 4px;\n    margin: auto;\n"]))),kt=m.a.div(ot||(ot=Object(k.a)(["\n    display: flexbox;\n    align-items: center;\n"]))),mt=m.a.div(rt||(rt=Object(k.a)(["\n    display: flexbox;\n    align-items: center;\n"])));function wt(){return Object(T.jsxs)(gt,{children:[Object(T.jsxs)(kt,{children:[Object(T.jsx)(yt,{}),Object(T.jsx)(vt,{})]}),Object(T.jsx)(ht,{children:Object(T.jsx)(It,{children:"Trellone"})}),Object(T.jsxs)(mt,{children:[Object(T.jsx)(yt,{}),Object(T.jsx)(yt,{}),Object(T.jsx)(yt,{})]})]})}var St=function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(wt,{}),Object(T.jsx)(ft,{})]})},Et=n(8),Tt=n(28),Ct=n(7),At=n(15),Dt={sections:{byId:{sec1:{id:"sec1",title:"Done",tickets:["tic1","tic2","tic3"]},sec2:{id:"sec2",title:"Do Today",tickets:["tic4","tic5","tic6"]},sec3:{id:"sec3",title:"To Do",tickets:["tic7","tic8","tic9"]},sec4:{id:"sec4",title:"Later",tickets:["tic10"]}},allIds:["sec1","sec2","sec3","sec4"]},tickets:{byId:{tic1:{id:"tic1",content:"task 1"},tic2:{id:"tic2",content:"task 2"},tic3:{id:"tic3",content:"task 3"},tic4:{id:"tic4",content:"task 4"},tic5:{id:"tic5",content:"task 5"},tic6:{id:"tic6",content:"task 6"},tic7:{id:"tic7",content:"task 7"},tic8:{id:"tic8",content:"task 8"},tic9:{id:"tic9",content:"task 9"},tic10:{id:"tic10",content:"task 10"}},allIds:["tic1","tic2","tic3","tic4","tic5","tic6","tic7","tic8","tic9","tic10"]}},_t=Dt;var Nt=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t.sections,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:var c=Object(At.a)(e.allIds);return c.splice(n.payload.from,1),c.splice(n.payload.to,0,e.allIds[n.payload.from]),Object(y.a)(Object(y.a)({},e),{},{allIds:c});case V:var i=Object(y.a)({},e.byId[n.payload.fromSectionId]),a=i.tickets,d=a[n.payload.fromIndex];return a.splice(n.payload.fromIndex,1),a.splice(n.payload.toIndex,0,d),Object(y.a)(Object(y.a)({},e),{},{byId:Object(y.a)(Object(y.a)({},e.byId),{},Object(Ct.a)({},i.id,i))});case z:var o=Object(y.a)({},e.byId[n.payload.fromSectionId]),r=Object(y.a)({},e.byId[n.payload.toSectionId]),s=o.tickets,l=r.tickets,b=s[n.payload.fromIndex];return s.splice(n.payload.fromIndex,1),l.splice(n.payload.toIndex,0,b),Object(y.a)(Object(y.a)({},e),{},{byId:Object(y.a)(Object(y.a)({},e.byId),{},(t={},Object(Ct.a)(t,o.id,o),Object(Ct.a)(t,r.id,r),t))});case P:var p={id:n.payload.sectionId,title:n.payload.sectionTitle,tickets:[]};return Object(y.a)(Object(y.a)({},e),{},{byId:Object(y.a)(Object(y.a)({},e.byId),{},Object(Ct.a)({},n.payload.sectionId,p)),allIds:[].concat(Object(At.a)(e.allIds),[n.payload.sectionId])});case K:var j=e.allIds.filter((function(t){return t!==n.payload.sectionId})),x=e.byId;return delete x[n.payload.sectionId],Object(y.a)(Object(y.a)({},e),{},{byId:x,allIds:j});case H:var O=Object(y.a)({},e.byId[n.payload.sectionId]);O.tickets=[].concat(Object(At.a)(O.tickets),[n.payload.ticketDetails.id]);var u=Object(y.a)(Object(y.a)({},e),{},{byId:Object(y.a)(Object(y.a)({},e.byId),{},Object(Ct.a)({},n.payload.sectionId,O))});return u;case B:return Object(y.a)({},e);default:return e}},Rt=Dt;var Mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt.tickets,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:var n=[].concat(Object(At.a)(t.allIds),[e.payload.ticketDetails.id]);return Object(y.a)(Object(y.a)({},t),{},{byId:Object(y.a)(Object(y.a)({},t.byId),{},Object(Ct.a)({},e.payload.ticketDetails.id,{id:e.payload.ticketDetails.id,content:e.payload.ticketDetails.title})),allIds:n});default:return t}},Pt=Object(Et.c)({sections:Nt,tickets:Mt}),Kt=Object(Et.e)(Pt,Object(Et.a)(Tt.a));I.a.render(Object(T.jsx)(g.a.StrictMode,{children:Object(T.jsx)(_.a,{store:Kt,children:Object(T.jsx)(St,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9798535b.chunk.js.map