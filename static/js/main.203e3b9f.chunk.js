(this["webpackJsonpconcert-accountant"]=this["webpackJsonpconcert-accountant"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(32),c=a.n(l),s=(a(39),a(3)),i=a(4),o=a(6),u=a(5),m=(a(40),a(14)),d=a.n(m);a(41);d.a.initializeApp({apiKey:"AIzaSyBymJrYdY1TNmwZwPPOIY02q6t3EBz3WUU",authDomain:"concert-accountant-cca1f.firebaseapp.com",databaseURL:"https://concert-accountant-cca1f.firebaseio.com",projectId:"concert-accountant-cca1f",storageBucket:"concert-accountant-cca1f.appspot.com",messagingSenderId:"357158929786",appId:"1:357158929786:web:6fefa320d3defb953ec2c3"});d.a;var p=a(10),v=a(7),h=a.n(v),E=a(11),f=(a(59),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleRadioChange=function(t){var a="true"===t.target.value;e.setState({userNew:a,userEmailError:!1,userCityError:!1})},e.validateInput=function(t){var a=t.name,r=a+"Error";!{userName:/^[a-z0-9]([._](?![._])|[a-z0-9])[a-z0-9]{3,8}$/,userEmail:/^([a-z0-9_ .-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,userPassword:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,userCity:/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/}[a].test(t.value)?(t.className="fieldError",e.setState(Object(E.a)({},r,!0))):(t.className="fieldSuccess",console.log(r),e.setState(Object(E.a)({},r,!1)))},e.handleInputChange=function(t){e.validateInput(t.target),e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.userNameError||e.state.userEmailError||e.state.userPasswordError||e.state.userCityError||e.setState({isLoggedIn:!0})},e.state={isLoggedOn:!1,userNew:!0,userName:"",userEmail:"",userPassword:"",userCity:"",userNameError:!1,userEmailError:!1,userPasswordError:!1,userCityError:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userNew,a=e.userName,l=e.userEmail,c=e.userPassword,s=e.userCity,i=e.userNameError,o=e.userEmailError,u=e.userPasswordError,m=e.userCityError,d=n.a.createElement("span",{className:"form__space"});return n.a.createElement("div",{className:"Form"},n.a.createElement("form",null,n.a.createElement("fieldset",{onChange:this.handleRadioChange,value:t},n.a.createElement("div",{className:t?"form--active radio":"radio"},n.a.createElement("label",{htmlFor:"signUp"},"Sign Up"),n.a.createElement("input",{className:"sr-only",type:"radio",name:"userNew",id:"signUp",value:"true"})),n.a.createElement("div",{className:t?"radio":"form--active radio"},n.a.createElement("label",{htmlFor:"logIn"},"Log In"),n.a.createElement("input",{className:"sr-only",type:"radio",name:"userNew",id:"logIn",value:"false"}))),n.a.createElement("div",{className:"form__container"},n.a.createElement("label",{htmlFor:"userName"},"Username"),n.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userName",value:a}),i?n.a.createElement("p",null,"Username must be between 5 and 8 characters"):d,t?n.a.createElement(r.Fragment,null,n.a.createElement("label",{htmlFor:"userEmail"},"Email address"),n.a.createElement("input",{onChange:this.handleInputChange,type:"email",name:"userEmail",value:l}),o?n.a.createElement("p",null,"Please enter a valid email address"):d):null,n.a.createElement("label",{htmlFor:"userPassword"},"Password"),n.a.createElement("input",{onChange:this.handleInputChange,type:"password",name:"userPassword",value:c}),u?n.a.createElement("p",null,"Password must be between 6 and 8 characters"):d,t?n.a.createElement(r.Fragment,null,n.a.createElement("label",{htmlFor:"userCity"},"Home city"),n.a.createElement("input",{onChange:this.handleInputChange,type:"text",name:"userCity",id:s}),m?n.a.createElement("p",null,"Please remove special characters"):d):null,n.a.createElement("button",{onClick:this.handleSubmit},t?"Sign Up":"Login"))))}}]),a}(r.Component)),g=(a(60),r.Component,a(61),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={currentCity:"Toronto",event:[],modalEvent:"",filteredResults:[],isFiltered:!1,filterPrice:"0"},e}return Object(i.a)(a,[{key:"dateConvert",value:function(e){var t=new Date(e);return(t=new Date(t.setTime(t.getTime()+864e5))).toDateString()}},{key:"collectPrice",value:function(e){return e.priceRanges?{type:e.priceRanges[0].type,currency:e.priceRanges[0].currency,min:"".concat(e.priceRanges[0].min.toFixed(2)),max:"".concat(e.priceRanges[0].max.toFixed(2))}:{type:!1,currency:!1,min:"N/A",max:"N/A"}}},{key:"mapToAppData",value:function(e){var t=this;return e.map((function(e){var a=e.id,r=e.name,n=e._embedded.venues[0].name,l=e._embedded.venues[0].city.name,c=e._embedded.venues[0].country.name,s="".concat(l,", ").concat(c),i=e.dates.start.localDate,o=t.dateConvert(i);return{eventID:a,name:r,venue:n,location:{city:l,country:c,cityCountry:s},date:{dateStr:i,dateNum:Date.parse(i),dateFormat:o},imgUrl:e.images[2].url,price:t.collectPrice(e)}}))}},{key:"handleChange",value:function(e){this.filterResults(e.target.value),this.setState({filterPrice:parseFloat(e.target.value)})}},{key:"renderConcertCell",value:function(e){return n.a.createElement("div",{key:e.eventID,className:"concertCell"},n.a.createElement("div",{className:"imageContainer"},n.a.createElement(p.b,{to:"/concert-accountant/event/".concat(e.eventID)},n.a.createElement("img",{src:e.imgUrl,alt:e.name}))),n.a.createElement("div",{className:"concertInfo"},n.a.createElement("h2",null,e.name),n.a.createElement("p",null,e.date.dateFormat),"N/A"===e.price.min?n.a.createElement("p",null,"No prices currently available."):n.a.createElement("p",null,"Prices starting as low as $",e.price.min)))}},{key:"filterResults",value:function(){var e=this.state.event,t=parseFloat(this.state.filterPrice),a=e.filter((function(e){return parseFloat(e.price.min)<=parseFloat(t)}));this.setState({filteredResults:a})}},{key:"showFiltered",value:function(){var e=!0;e="0"!=this.state.filterPrice,this.setState({isFiltered:e}),this.filterResults()}},{key:"componentDidMount",value:function(){var e=this;h()({url:"https://app.ticketmaster.com/discovery/v2/events",method:"GET",responseType:"JSON",params:{apikey:"Mh0RGGBfkgADAASrXM25WfhUueio9rgV",locale:"en-us",segmentName:"music",city:this.state.currentCity}}).then((function(t){var a=t.data._embedded.events,r=e.mapToAppData(a);e.setState({event:r})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"budgetFilter"},n.a.createElement("p",null,"Filter results for your budget: "),n.a.createElement("select",{value:this.state.filterPrice,onChange:function(t){return e.handleChange(t)}},n.a.createElement("option",{value:"0"},"All"),n.a.createElement("option",{value:"25"},"$25 or Less"),n.a.createElement("option",{value:"50"},"$50 or Less"),n.a.createElement("option",{value:"75"},"$75 or Less"),n.a.createElement("option",{value:"100"},"$100 or Less")),n.a.createElement("button",{onClick:function(t){return e.showFiltered(t)}},"Filter")),n.a.createElement("div",{className:"concertCards"},!1===this.state.isFiltered?this.state.event.map((function(t){return e.renderConcertCell(t)})):this.state.filteredResults.map((function(t){return e.renderConcertCell(t)}))))}}]),a}(r.Component)),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(g,null)))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.203e3b9f.chunk.js.map