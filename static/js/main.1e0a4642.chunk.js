(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,a,t){e.exports=t(43)},25:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(14),l=t.n(r),o=(t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(31),t(32),t(33),t(1)),c=t.n(o);c.a.easing.jswing=c.a.easing.swing,c.a.extend(c.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,s){return c.a.easing[c.a.easing.def](e,a,t,n,s)},easeInQuad:function(e,a,t,n,s){return n*(a/=s)*a+t},easeOutQuad:function(e,a,t,n,s){return-n*(a/=s)*(a-2)+t},easeInOutQuad:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,s){return n*(a/=s)*a*a+t},easeOutCubic:function(e,a,t,n,s){return n*((a=a/s-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,s){return n*(a/=s)*a*a*a+t},easeOutQuart:function(e,a,t,n,s){return-n*((a=a/s-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,s){return n*(a/=s)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,s){return n*((a=a/s-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,s){return(a/=s/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,s){return-n*Math.cos(a/s*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,s){return n*Math.sin(a/s*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,s){return-n/2*(Math.cos(Math.PI*a/s)-1)+t},easeInExpo:function(e,a,t,n,s){return 0==a?t:n*Math.pow(2,10*(a/s-1))+t},easeOutExpo:function(e,a,t,n,s){return a==s?t+n:n*(1-Math.pow(2,-10*a/s))+t},easeInOutExpo:function(e,a,t,n,s){return 0==a?t:a==s?t+n:(a/=s/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,s){return-n*(Math.sqrt(1-(a/=s)*a)-1)+t},easeOutCirc:function(e,a,t,n,s){return n*Math.sqrt(1-(a=a/s-1)*a)+t},easeInOutCirc:function(e,a,t,n,s){return(a/=s/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,s){var r=1.70158,l=0,o=n;if(0==a)return t;if(1==(a/=s))return t+n;if(l||(l=.3*s),o<Math.abs(n)){o=n;r=l/4}else r=l/(2*Math.PI)*Math.asin(n/o);return-o*Math.pow(2,10*(a-=1))*Math.sin((a*s-r)*(2*Math.PI)/l)+t},easeOutElastic:function(e,a,t,n,s){var r=1.70158,l=0,o=n;if(0==a)return t;if(1==(a/=s))return t+n;if(l||(l=.3*s),o<Math.abs(n)){o=n;r=l/4}else r=l/(2*Math.PI)*Math.asin(n/o);return o*Math.pow(2,-10*a)*Math.sin((a*s-r)*(2*Math.PI)/l)+n+t},easeInOutElastic:function(e,a,t,n,s){var r=1.70158,l=0,o=n;if(0==a)return t;if(2==(a/=s/2))return t+n;if(l||(l=s*(.3*1.5)),o<Math.abs(n)){o=n;r=l/4}else r=l/(2*Math.PI)*Math.asin(n/o);return a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*s-r)*(2*Math.PI)/l)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*s-r)*(2*Math.PI)/l)*.5+n+t},easeInBack:function(e,a,t,n,s,r){return void 0==r&&(r=1.70158),n*(a/=s)*a*((r+1)*a-r)+t},easeOutBack:function(e,a,t,n,s,r){return void 0==r&&(r=1.70158),n*((a=a/s-1)*a*((r+1)*a+r)+1)+t},easeInOutBack:function(e,a,t,n,s,r){return void 0==r&&(r=1.70158),(a/=s/2)<1?n/2*(a*a*((1+(r*=1.525))*a-r))+t:n/2*((a-=2)*a*((1+(r*=1.525))*a+r)+2)+t},easeInBounce:function(e,a,t,n,s){return n-c.a.easing.easeOutBounce(e,s-a,0,n,s)+t},easeOutBounce:function(e,a,t,n,s){return(a/=s)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,s){return a<s/2?.5*c.a.easing.easeInBounce(e,2*a,0,n,s)+t:.5*c.a.easing.easeOutBounce(e,2*a-s,0,n,s)+.5*n+t}});t(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),m=t(3),u=t(5),d=t(4),h=t(6),p=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={top:!0},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=c()("nav").outerHeight();c()(".navbar-toggler").on("click",(function(){c()("#mainNav").hasClass("navbar-reduce")||c()("#mainNav").addClass("navbar-reduce")})),c()("body").scrollspy({target:"#mainNav",offset:a}),c()(".js-scroll").on("click",(function(){c()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({top:!1})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({top:!0}))})),c()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=c()(this.hash);if((e=e.length?e:c()("[name="+this.hash.slice(1)+"]")).length)return c()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),c()(".js-scroll").on("click",(function(){c()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},s.a.createElement("div",{className:"container"},s.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},0==this.state.top?s.a.createElement("div",{style:{margin:"1pt 0 1pt 0","font-size":"24pt"}},"Kevin Hazelton"):""),s.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#lessons"},"Lessons")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),a}(s.a.Component),v=(t(36),t(8)),f=t.n(v),E=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"home",className:"intro route bg-image ",style:{backgroundImage:"url("+f.a+")"}},s.a.createElement("div",{className:"intro-content display-table"},s.a.createElement("div",{className:"table-cell"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"intro-title mb-4"},"Kevin Hazelton"),s.a.createElement("p",{className:"intro-subtitle"},s.a.createElement("span",{className:"text-slider-items"}),s.a.createElement("strong",{className:"text-slider"},"Private Piano Instructor")),s.a.createElement("p",{className:"pt-3"},s.a.createElement("a",{className:"btn btn-light btn js-scroll px-4",href:"#contact",role:"button"},"Contact Now"))))))}}]),a}(s.a.Component),b=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={about_me:[{id:"first-p-about",content:"Kevin Hazelton was born in South Korea and was adopted at the ripe old age of one. Five years passed until he was able to find the piano bench, hop on, and try out what was soon to become his favorite instrument in the world. Throughout highschool, Kevin performed in various settings such as NYSSMA, Saint Rose Summer Jazz Camp, and classical recitals held by his teacher. When he reached senior year of highschool, he decided to apply to Berklee College of Music where he was accepted for piano and composition. He trained there for two years before deciding that there was more he wanted to learn outside of music. He transferred to Stony Brook University where he currently attends school. While he is no longer pursuing music through college, he still keeps his musical side active through piano compositions that he uploads online and practicing to expand his classical repertoire."},{id:"second-p-about",content:"Kevin is an attentive teacher who tailors his teaching material towards the student\u2019s goals. He incorporates his background in classical and jazz theory from Berklee with his experience and love for all types of genres. He is most experienced in popular, new age, and classical music. Special activities may involve sing-a-longs with younger students and composition instruction with older students. Students are encouraged to suggest their own material and Kevin will adapt to the student\u2019s interests while maintaining a skill level appropriate to their current abilities. Lessons can be more relaxed for students who are wishing to dip their toes, or more intense for those looking to progress at a faster rate."},{id:"third-p-about",content:"When Kevin is not practicing, he enjoys watching movies and originally was planning on being a film composer before transferring. Some of his favorite artists are Joe Hisaishi, Hiromi Uehara, and Ryuichi Sakamoto."}]},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"box-shadow-full"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"}),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("div",{className:"title-box-2"},s.a.createElement("h5",{className:"title-left"},"About Me")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},s.a.createElement("img",{id:"headshot-img",alt:"A headshot of Kevin Hazelton",src:"myImage.png"}))),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("div",{className:"about-me pt-4 pt-md-0"},this.state.about_me.map((function(e){return s.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),a}(s.a.Component),N=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(u.a)(this,Object(d.a)(a).call(this))).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"}],tuition_rates:[{minutes:30,cost:200},{minutes:60,cost:300}],additional_info:[{title:"Tuition",content:"Tuition is a monthly flat fee that includes weekly lessons for the month (3-5 lessons), lesson materials, and travel."},{title:"Location",content:"Offering private in-home lessons only. Travel is limited to a 30 minute drive radius (15-20 miles) from my home in Port Jefferson."},{title:"Holidays and Canceled/Missed Lessons",content:"There are no fee adjustments for missed lessons. However, makeup lessons can often be scheduled if given advance notice. Months with less than 3 lessons due to holidays or teacher cancellations with have reduced tuition rates."},{title:"COVID-19 Protocol",content:"Masks optional if the student is fully vaccinated. I am currently fully vaccinated (with booster)."}]},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{id:"lessons",className:"about-mf sect-pt4 route"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"box-shadow-full"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"}),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("div",{className:"title-box-2"},s.a.createElement("h5",{className:"title-left"},"Lessons")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement("div",{className:"tuition-rates"},s.a.createElement("h4",null,"Tuition Rates"),s.a.createElement("p",{className:"lead"},"Monthly rates. 3-5 lessons per month."),s.a.createElement("div",null,this.state.tuition_rates.map((function(e,a){return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement("p",{style:{fontSize:"16pt",margin:"1em 0 0 0"},className:"lead"},e.minutes,"-minute lessons: ",s.a.createElement("b",null,"$",e.cost," / mo. ")))}))))),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("div",{className:"about-me pt-4 pt-md-0"},this.state.additional_info.map((function(e,a){return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement("h5",null,e.title),s.a.createElement("p",{className:"lead"},e.content))}))))))))))}}]),a}(s.a.Component),g=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+f.a+")"}},s.a.createElement("div",{className:"overlay-mf"}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"contact-mf"},s.a.createElement("div",{id:"contact",className:"box-shadow-full"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-5"},s.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},s.a.createElement("h5",{className:"title-left"},"Get in Touch")),s.a.createElement("div",{className:"more-info"},s.a.createElement("p",{className:"lead"},"Currently accepting new students!",s.a.createElement("br",null),s.a.createElement("br",null),"For lesson inquiries or new student registration, please fill the form to send me a message."),s.a.createElement("br",null),s.a.createElement("br",null),"Kevin Hazelton",s.a.createElement("br",null),"Private Piano Instructor",s.a.createElement("br",null),s.a.createElement("ul",{class:"list-ico"},s.a.createElement("li",null,s.a.createElement("span",{class:"ion-ios-location"})," PORT JEFFERSON, NY 11777"),s.a.createElement("li",null,s.a.createElement("span",{class:"ion-email"})," kshazelton@gmail.com"),s.a.createElement("li",null,s.a.createElement("span",{class:"ion-link"})," kevinhazelton.com")),s.a.createElement("br",null))),s.a.createElement("div",{className:"col-md-7"},s.a.createElement("div",{className:"title-box-2"},s.a.createElement("h5",{id:"contact-form",className:"title-left"},"Send A Message")),s.a.createElement("div",null,s.a.createElement("form",{action:"",method:"POST",className:"contactForm"},s.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),s.a.createElement("div",{id:"errormessage"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name*",required:!0}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email*",required:!0}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"town",className:"form-control",id:"town",placeholder:"Town of Residence*",required:!0}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"number",min:"0",name:"student-count",className:"form-control",id:"student-count",placeholder:"Number of Students*",required:!0}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"student-age",className:"form-control",id:"student-age",placeholder:"Age(s) of Student(s)*",required:!0}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{className:"form-control",name:"prev-experience",id:"prev-experience",rows:"3",placeholder:"Previous Experience (any musical experience, on the piano or otherwise)"}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12 mb-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",{className:"form-control",name:"comments",id:"comments",rows:"3",placeholder:"Comments"}),s.a.createElement("div",{className:"validation"}))),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))))))))),s.a.createElement("footer",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"copyright-box"}))))))}}]),a}(s.a.Component),w=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){c()(".back-to-top").click((function(){return c()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return s.a.createElement("a",{href:"#",className:"back-to-top animated"},s.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),a}(s.a.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){c()(window).on("load",(function(){c()("#preloader").length&&c()("#preloader").delay(100).fadeOut("slow",(function(){c()(this).remove()}))}))}},{key:"render",value:function(){return s.a.createElement("div",{id:"preloader"})}}]),a}(s.a.Component);l.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(p,null),s.a.createElement(E,null),s.a.createElement(b,null),s.a.createElement(N,null),s.a.createElement(g,null),s.a.createElement(w,null),s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t.p+"static/media/coverphoto.80519899.jpg"}},[[19,1,2]]]);
//# sourceMappingURL=main.1e0a4642.chunk.js.map