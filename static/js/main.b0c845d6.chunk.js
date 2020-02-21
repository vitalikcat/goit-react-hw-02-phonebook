(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={h1:"ContactForm_h1__1ALV0",form:"ContactForm_form__smZV2",label:"ContactForm_label__2rt28",input:"ContactForm_input__2ZwsU",button:"ContactForm_button__2wGkf"}},12:function(t,e,n){t.exports={p:"Filter_p__Rxlat"}},15:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=n(14),i=n(2),u=n(4),s=n(5),m=n(7),b=n(6),h=n(8),d=n(3),f=n(1),p=n.n(f),C=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(d.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(i.a)({},n.state)),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("div",null,c.a.createElement("form",{className:p.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:p.a.label},"Name",c.a.createElement("input",{className:p.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",{className:p.a.label},"Number",c.a.createElement("input",{className:p.a.input,type:"text",name:"number",value:n,onChange:this.handleChange})),c.a.createElement("button",{className:p.a.button,type:"submit"},"Add contact")))}}]),e}(a.Component),v=n(9),_=n.n(v),E=function(t){var e=t.items,n=t.onDeleteContact;return c.a.createElement("div",null,e.length>0&&c.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement("li",{className:_.a.li,key:e},"".concat(a,": ").concat(r),c.a.createElement("button",{className:_.a.button,onClick:function(){return n(e)}},"Delete"))}))))},g=n(12),j=n.n(g),y=function(t){var e=t.onChangeFilter,n=t.filter,a=t.contacts;return c.a.createElement("div",null,c.a.createElement("p",{className:j.a.p},"Find contacts by name"),a.length>=2&&c.a.createElement("input",{type:"text",name:"filter",value:n,onChange:e}))},O=n(13),w=n.n(O),N=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleInputChange=function(t){var e=t.target.value;n.setState({filter:e})},n.addContact=function(t){var e=t.name;if(n.state.contacts.some((function(t){return t.name===e})))alert("".concat(e," is already in contacts."));else{var a=Object(i.a)({id:w()()},t);n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))}},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(C,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(y,{onChangeFilter:this.handleInputChange,filter:n,contacts:this.state.contacts}),c.a.createElement(E,{items:a,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);o.a.render(c.a.createElement(N,null),document.getElementById("root"))},9:function(t,e,n){t.exports={button:"ContactList_button__1MK8l",li:"ContactList_li__26rwz"}}},[[15,1,2]]]);
//# sourceMappingURL=main.b0c845d6.chunk.js.map