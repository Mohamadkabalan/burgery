(function(){var e={1116:function(e,s,a){"use strict";var i=a(9242),t=a(3396),l=a(65);const n={class:"menu"},r={class:"swiper-container menucontainer faded"},c={class:"swiper-wrapper do_not_swipe"},o=(0,t._)("span",{class:"scaledicon icon-before-after"},null,-1),p=(0,t._)("span",{class:"title"},"About",-1),d=(0,t._)("span",{class:"scaledicon icon-before-after"},null,-1),u=(0,t._)("span",{class:"title"},"Menu",-1),m=(0,t._)("span",{class:"scaledicon icon-before-after"},null,-1),g=(0,t._)("span",{class:"title"},"Branches",-1),h=(0,t._)("span",{class:"scaledicon icon-before-after"},null,-1),v=(0,t._)("span",{class:"title"},"Careers",-1),_=(0,t._)("span",{class:"scaledicon icon-before-after"},null,-1),f=(0,t._)("span",{class:"title"},"Contact",-1);function w(e,s,a,i,l,w){const b=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("nav",n,[(0,t._)("div",r,[(0,t._)("div",c,[(0,t.Wm)(b,{title:"About Us",class:"swiper-slide slide menuitem",to:{name:"About"}},{default:(0,t.w5)((()=>[o,p])),_:1}),(0,t.Wm)(b,{title:"Menu",class:"swiper-slide slide menuitem",to:{name:"Menu.sandwiches"}},{default:(0,t.w5)((()=>[d,u])),_:1},8,["to"]),(0,t.Wm)(b,{title:"Branches",class:"swiper-slide slide menuitem",to:{name:"Branches"}},{default:(0,t.w5)((()=>[m,g])),_:1}),(0,t.Wm)(b,{title:"Careers",class:"swiper-slide slide menuitem",to:{name:"Careers"}},{default:(0,t.w5)((()=>[h,v])),_:1}),(0,t.Wm)(b,{title:"Contact Us",class:"swiper-slide slide menuitem",to:{name:"Contact"}},{default:(0,t.w5)((()=>[_,f])),_:1})])])])}var b={name:"Sidebar"},A=a(89);const I=(0,A.Z)(b,[["render",w]]);var E=I;const C=(0,t._)("img",{alt:"Malak Al Tawouk",src:"/assets/images/MalakElTaouk.png"},null,-1),S=(0,t._)("span",{class:"mobilemenutoggle",onclick:"ToggleOpen('.mobilemenutoggle')"},[(0,t._)("span")],-1),N=(0,t.uE)('<div class="social"><a title="Facebook" class="socialicon nodecoration font-before fb" href="https://www.facebook.com/MalakAlTawoukLeb/" target="_blank"></a><div class="share socialicon nodecoration sharethis icon-before-after"><div class="addthis_toolbox addthis_default_style"><a class="addthis_counter addthis_pill_style"></a></div></div></div>',1),y={name:"Header"};var k=Object.assign(y,{setup(e){return(e,s)=>{const a=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("header",null,[(0,t.Wm)(a,{title:"Malak Al Tawouk",to:{name:"home"},class:"logo containimage"},{default:(0,t.w5)((()=>[C])),_:1}),S,(0,t.Wm)(E),N])}}});const O=k;var D=O;const T=(0,t._)("div",{id:"fb-root"},null,-1),x=(0,t._)("input",{type:"hidden",id:"routeUrl",name:"routeUrl",value:"/"},null,-1),z=(0,t._)("h1",{class:"hidden"},"Malak Al Tawouk",-1),R={id:"wrapper"},L={computed:(0,l.Se)(["allItems"]),methods:{...(0,l.nv)(["fetchAllItems"])},beforeMount(){null!==this.allItems&&0!==this.allItems.length||this.fetchAllItems()}};var M=Object.assign(L,{__name:"App",setup(e){return(e,s)=>{const a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[T,x,z,(0,t._)("div",R,[(0,t.Wm)(D),(0,t.Wm)(a)])],64)}}});const H=M;var W=H,B=a(2483);const j={id:"container",class:"clearfix"},U=(0,t._)("section",{class:"homeslideshow"},[(0,t._)("div",{class:"swiper-container hometitleswiper"},[(0,t._)("div",{class:"swiper-wrapper"},[(0,t._)("div",{class:"swiper-slide slide"},[(0,t._)("h2",{class:"hidden"},"Juan Ø§Ù„ØºÙˆÙ„"),(0,t._)("a",{class:"title titlesize-45"},"Juan Ø§Ù„ØºÙˆÙ„")]),(0,t._)("div",{class:"swiper-slide slide"},[(0,t._)("h2",{class:"hidden"},"Cheesy Ø¹Ø²ÙŠØ²ÙŠ"),(0,t._)("a",{class:"title titlesize-45"},"Cheesy Ø¹Ø²ÙŠØ²ÙŠ")])])]),(0,t._)("div",{class:"mainslideshowcontainer centervertical"},[(0,t._)("div",{class:"swiper-container mainslideshow"},[(0,t._)("div",{class:"swiper-wrapper"},[(0,t._)("a",{class:"swiper-slide slide containimage centervertical"},[(0,t._)("img",{alt:"Juan Ø§Ù„ØºÙˆÙ„",class:"",src:"/assets/images/juan.png"})]),(0,t._)("a",{class:"swiper-slide slide containimage centervertical"},[(0,t._)("img",{alt:"Cheesy Ø¹Ø²ÙŠØ²ÙŠ",class:"",src:"/assets/images/cheesy.png"})])]),(0,t._)("div",{class:"swiper-pagination"})])]),(0,t._)("span",{class:"expandeslideshow squaregoto",onclick:"ToggleCustomClass('#container', 'fullscreenshow')"}),(0,t._)("div",{class:"slideshowinfostripe"},[(0,t._)("div",{class:"swiper-container slideshowinfo"},[(0,t._)("div",{class:"swiper-wrapper"},[(0,t._)("div",{class:"swiper-slide slide centervertical"}),(0,t._)("div",{class:"swiper-slide slide centervertical"})])])])],-1),F={class:"homegrid"},Y={class:"gridtop"},P={class:"discovermenu",style:{"background-image":"url('/assets/images/bigchickenburger.jpg')"}},V=(0,t.uE)('<span class="rolloverlayer"><span class="caption">DISCOVER</span></span><span class="underlinedicon centervertical"><img style="display:none;" alt="DISCOVER" src="https://kms.malakaltawouk.com/assets/ResizedImages/90/90/inside/"></span><span class="title titlesize-40">Big Chicken </span><h2 class="subtitle titlesize-30">Burger</h2>',4),G=(0,t.uE)('<section class="ordernow centervertical"><span class="rolloverlayer"><span class="caption">Hungry?</span></span><div class="valigncontent"><span class="underlinedicon centervertical"><img alt="Hungry?" src="/assets/img/phone.png"></span><h2 class="title titlesize-40">Order Now</h2><div class="swiper-container phoneswiper"><div class="swiper-wrapper"><span class="swiper-slide slide swiper-slide-active"><a title="06 221 010" class="titlesize-30 phonenumber" href="tel:1592">1592</a><span class="region titlesize-16">Tripoli</span></span></div></div></div></section>',1),K={class:"locate centervertical"},q={class:"valigncontent"},Z=(0,t._)("span",{class:"branchescount"},"35",-1),J=(0,t._)("h2",{class:"title titlesize-30"},"Branches in lebanon",-1),X=(0,t.Uk)("Locate us"),Q=(0,t._)("aside",{class:"sidestripe"},[(0,t._)("span",{class:"text titlesize-25"},[(0,t.Uk)("Order"),(0,t._)("br"),(0,t.Uk)("Now")]),(0,t._)("div",{class:"stripephoneswiper swiper-container"},[(0,t._)("div",{class:"swiper-wrapper"},[(0,t._)("a",{title:"Beirut",class:"swiper-slide phone titlesize-29 swiper-slide-active",href:"tel:1592"},[(0,t._)("span",{class:"titlesize-44 block"},"1592")])])]),(0,t._)("span",{class:"closeslideshow icon-before",onclick:"ToggleCustomClass('#container', 'fullscreenshow')"})],-1);function ee(e,s){const a=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",j,[U,(0,t._)("div",F,[(0,t._)("div",Y,[(0,t._)("section",P,[V,(0,t.Wm)(a,{title:"Discover our new light menu",class:"gotomenu squaregoto",to:{name:"Menu.sandwiches"}},null,8,["to"])]),G]),(0,t._)("section",K,[(0,t._)("div",q,[Z,J,(0,t.Wm)(a,{title:"Locate Us",class:"yellowbtn locateus",to:{name:"Branches"}},{default:(0,t.w5)((()=>[X])),_:1})])])]),Q])}const se={},ae=(0,A.Z)(se,[["render",ee]]);var ie=ae;const te={id:"container",class:"clearfix"},le=(0,t.uE)('<section class="ourmenu branches_section"><h2 class="maintitle titlesize-45">OUR BRANCHES</h2><div class="foodcontainer centervertical"><div class="swiper-container foodswiper valigncontent"><div class="swiper-wrapper"><div class="swiper-slide slide"><div class="frame"><img alt="Abraj" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Abraj</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Aley" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Aley</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Batroun" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Batroun</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Bikfaya " src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Bikfaya</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Bliss" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Bliss</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Broumana" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Broumana</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Checkka" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Checkka</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Chtoura" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Chtoura</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="Daher el ain" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Daher el ain</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="DEKWENEH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Dekweneh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="DORA" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Dora</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="HADATH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Hadath</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="HARET SAKHER" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Haret sakher</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="JAL EL DIB" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Jal el dib</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="JBEIL" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Jbeil</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="JOUNIEH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Jounieh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="KHALDEH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Khaldeh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="MAAMELTEIN" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Maameltein</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="MANSOURIEH " src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Mansourieh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="MAZRAAT YACHOUH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Mazraat yachouh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="OKAIBE" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Okaibe</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="RAYFOUN" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Rayfoun</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="SAIDA" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Saida</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="TRIPOLI" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Tripoli</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="ZGHARTA " src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Zgharta</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="ZOUK MOSBEH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Zouk mosbeh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="SASSINE" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Sassine</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="ACHRAFIEH" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Achrafieh</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="CHIR" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Chir</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="CITY CENTER" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">City center</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="CITY MALL" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">City mall</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="JBEIL SOUK" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Jbeil souk</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="DIK EL MEHDE" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Dik el mehde</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div><div class="swiper-slide slide"><div class="frame"><img alt="FARAYA" src="/assets/images/ImageNotAvailable.jpg"></div><h3 class="title titlesize-25">Faraya</h3><span class="description"><p></p></span><span class="price text_align_right"></span></div></div></div></div><div class="addonscaption icon-before titlesize-22 hide_icon"><p><span>ORDER NOW FROM ANY BRANCH BY DIALING <a class="red_text" title="Phone" href="tel:1592">1592</a></span></p></div></section>',1),ne=[le];function re(e,s,a,i,l,n){return(0,t.wg)(),(0,t.iD)("div",te,ne)}var ce=a(7387),oe=a.n(ce),pe={mounted(){oe()(".foodswiper .swiper-slide").length>1&&(foodswiper=new Swiper(".foodswiper",{speed:1e3,loop:!1,slidesPerView:"auto",preload:!0,keyboardControl:!0,onInit:function(e){oe()(window).width()>750?oe()(".foodswiper .swiper-wrapper").removeClass("do_not_swipe"):oe()(".foodswiper .swiper-wrapper").addClass("do_not_swipe"),ShowHideArrows(".foodswiper",".foodcontainer .arrows")},onSlideChangeStart:function(e){e.startAutoplay()},onSlideChangeEnd:function(e){e.startAutoplay()}}),oe()(".foodcontainer .rightarrow").click((function(){foodswiper.slideNext()})),oe()(".foodcontainer .leftarrow").click((function(){foodswiper.slidePrev()})))}};const de=(0,A.Z)(pe,[["render",re]]);var ue=de,me=a(7139);const ge={ref:"form",class:"applypopup centervertical open"},he={class:"valigncontent"},ve={class:"title titlesize-25"},_e={class:"inputfield"},fe=(0,t._)("label",{class:"inputlabel",for:"careersfullname"},"Full Name",-1),we={class:"inputfield"},be=(0,t._)("label",{class:"inputlabel",for:"careersemail"},"Email",-1),Ae={class:"inputfield"},Ie=(0,t._)("label",{class:"inputlabel",for:"careersphone"},"Phone",-1),Ee={class:"inputfield"},Ce=(0,t._)("label",{class:"inputlabel",for:"careerseducation"},"Education",-1),Se={class:"inputfield"},Ne=(0,t._)("label",{class:"inputlabel",for:"careerscv"},"Upload C.V",-1),ye={class:"inputfield area"},ke=(0,t._)("input",{type:"submit",class:"blackbtn send loaderbtn"},null,-1),Oe=(0,t._)("span",{class:"careersmessage titlesize-45"},"Thank You, We Will Get Back To You Soon!",-1);function De(e,s,a,l,n,r){const c=(0,t.up)("vue-recaptcha");return(0,t.wg)(),(0,t.iD)("section",ge,[(0,t._)("div",he,[(0,t._)("span",{class:"closecareersform closeform",onClick:s[0]||(s[0]=e=>r.handleClose())}),(0,t._)("form",{onSubmit:s[7]||(s[7]=(0,i.iM)(((...e)=>r.handlesubmit&&r.handlesubmit(...e)),["prevent"])),ref:"contactform",id:"careers_form",class:"careersform icon-before"},[(0,t._)("h3",ve,(0,me.zw)(r.getTitle),1),(0,t._)("div",_e,[fe,(0,t.wy)((0,t._)("input",{class:"input",name:"name",required:"","onUpdate:modelValue":s[1]||(s[1]=e=>n.name=e)},null,512),[[i.nr,n.name]])]),(0,t._)("div",we,[be,(0,t.wy)((0,t._)("input",{class:"input",type:"email",name:"email",required:"","onUpdate:modelValue":s[2]||(s[2]=e=>n.email=e)},null,512),[[i.nr,n.email]])]),(0,t._)("div",Ae,[Ie,(0,t.wy)((0,t._)("input",{class:"input numbersonly",name:"phone",required:"","onUpdate:modelValue":s[3]||(s[3]=e=>n.phone=e)},null,512),[[i.nr,n.phone]])]),(0,t._)("div",Ee,[Ce,(0,t.wy)((0,t._)("input",{class:"input",name:"education","onUpdate:modelValue":s[4]||(s[4]=e=>n.education=e)},null,512),[[i.nr,n.education]])]),(0,t._)("div",Se,[Ne,(0,t._)("input",{class:"input fileInputPadding",type:"file",name:"cv_file",accept:".pdf,.doc,.docx,",required:"",onChange:s[5]||(s[5]=(...e)=>r.onFileChange&&r.onFileChange(...e))},null,32)]),(0,t._)("div",ye,[(0,t.wy)((0,t._)("textarea",{class:"textarea",name:"message",id:"careersmessage",placeholder:"Message","onUpdate:modelValue":s[6]||(s[6]=e=>n.message=e)},null,512),[[i.nr,n.message]])]),(0,t.wy)((0,t.Wm)(c,{sitekey:"{{SITEKEY}}",size:"normal",theme:"light",hl:"tr",onVerify:r.recaptchaVerified,onExpire:r.recaptchaExpired,onFail:r.recaptchaFailed,ref:"vueRecaptcha"},null,8,["onVerify","onExpire","onFail"]),[[i.F8,n.showRecaptcha]]),ke],544),Oe])],512)}var Te=a(3473);const xe="6LfzyfUhAAAAAPQRFPI1Nx39T0qrZYvKhBO2gdpc";var ze=a(6265),Re=a.n(ze);const Le="https://mat.cloudm.tech";function Me(e,s,a,i,t,l,n){var r=new FormData;r.append("name",s),r.append("email",a),r.append("phone",i),r.append("education",t),r.append("cv",l),r.append("jobTitle",e),r.append("message",n),Re()({method:"post",url:`${Le}/career`,data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert("Form sent!")})).catch((function(e){alert("Error submitting form"),console.log(e)}))}var He=Me,We={props:{isOpen:Boolean,title:String},components:{vueRecaptcha:Te.Z},data(){return{isOpen:this.isOpen,title:this.title,showRecaptcha:!1,SITEKEY:xe,name:"",email:"",phone:"",message:"",education:"",cv:null}},computed:{getTitle(){return this.title}},methods:{handlesubmit(){He(this.title,this.name,this.email,this.phone,this.education,this.cv,this.message),this.handleClose()},onFileChange(e){var s=e.target.files||e.dataTransfer.files;s.length&&(this.cv=s[0])},handleClose(){this.$refs.form.classList.remove("open"),this.$emit("formcontrol",!1)},recaptchaVerified(e){},recaptchaExpired(){this.$refs.vueRecaptcha.reset()},recaptchaFailed(){}},name:"Careersform"};const Be=(0,A.Z)(We,[["render",De]]);var je=Be;const Ue={id:"container",class:"clearfix"},Fe={class:"openings"},Ye=(0,t._)("h2",{class:"maintitle titlesize-45"},"WE ARE HIRING!",-1),Pe=(0,t._)("span",{class:"description"},[(0,t._)("p",null," If youâ€™re looking for a chance at a fast-paced, hands-on career, youâ€™ve come to the right place. The job opportunities in Malak Al Tawouk restaurants are challenging and fun. "),(0,t._)("p",null,"Send your CV to Hr@malakaltawouk.com")],-1),Ve={class:"openinglisting icon-before"},Ge=(0,t._)("h2",{class:"text"},"FOOD HANDLER",-1),Ke=[Ge],qe=(0,t._)("h2",{class:"text"},"OUTLET MANAGER",-1),Ze=[qe],$e=(0,t._)("h2",{class:"text"},"CALL CENTER AGENT",-1),Je=[$e],Xe=(0,t._)("h2",{class:"text"},"CASHIER",-1),Qe=[Xe],es=(0,t._)("h2",{class:"text"},"DELIVERY DRIVER",-1),ss=[es],as={data(){return{isOpen:!1,title:""}},computed:{Captcha(){return SITEKEY},getTitle(){return this.title}},methods:{handleform(e){this.title=e,this.isOpen=!0},setOpen(e){this.isOpen=e}}};var is=Object.assign(as,{__name:"Careers",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",Ue,[(0,t._)("section",Fe,[Ye,Pe,(0,t._)("ul",Ve,[(0,t._)("li",{onClick:s[0]||(s[0]=s=>e.handleform("FOOD HANDLER")),id:"careerid_1"},Ke),(0,t._)("li",{onClick:s[1]||(s[1]=s=>e.handleform("OUTLET MANAGER")),id:"careerid_2"},Ze),(0,t._)("li",{onClick:s[2]||(s[2]=s=>e.handleform("CALL CENTER AGENT")),id:"careerid_3"},Je),(0,t._)("li",{onClick:s[3]||(s[3]=s=>e.handleform("CASHIER")),id:"careerid_4"},Qe),(0,t._)("li",{onClick:s[4]||(s[4]=s=>e.handleform("DELIVERY DRIVER")),id:"careerid_5"},ss)])]),e.isOpen?((0,t.wg)(),(0,t.j4)(je,{key:0,onFormcontrol:e.setOpen,title:e.getTitle},null,8,["onFormcontrol","title"])):(0,t.kq)("",!0)]))}});const ts=is;var ls=ts;const ns={id:"container",class:"clearfix"},rs={ref:"contactformcontrol",class:"contactinfo centervertical"},cs={class:"valigncontent"},os=(0,t.uE)('<h2 class="title titlesize-45 icon-before seperator-after"><p>How to reach us</p></h2><ul class="infolist"><li class="phone icon-before"><a title="Phone" href="tel:1592">1592</a></li><li class="fax icon-before"><a title="Fax" href="tel:09 851 200">09 851 200</a></li><li class="email icon-before"><a title="Email" href="mailto:office@malakaltawouk.com">office@malakaltawouk.com</a></li></ul><span class="caption titlesize-25">We want to hear from you!</span>',3),ps={class:"messageus centervertical"},ds={class:"valigncontent"},us=(0,t._)("h2",{class:"title titlesize-25"},"Message Us",-1),ms={class:"inputfield"},gs=(0,t._)("label",{class:"inputlabel",for:"contactfullname"},"Full Name",-1),hs={class:"inputfield"},vs=(0,t._)("label",{class:"inputlabel",for:"contactsemail"},"Email",-1),_s={class:"inputfield area"},fs=(0,t._)("input",{type:"submit",class:"blackbtn send loaderbtn"},null,-1),ws=(0,t._)("span",{class:"contactmessage titlesize-30"},"Thank You, We Will Get Back To You Soon!",-1);function bs(e,s,a,l,n,r){return(0,t.wg)(),(0,t.iD)("div",ns,[(0,t._)("section",rs,[(0,t._)("div",cs,[os,(0,t._)("span",{class:"blackbtn messageusbtn",onClick:s[0]||(s[0]=e=>r.ToggleMessageUs())},"message us")])],512),(0,t._)("aside",ps,[(0,t._)("div",ds,[(0,t._)("span",{class:"closecontactform closeform",onClick:s[1]||(s[1]=e=>r.handleClose())}),(0,t._)("form",{onSubmit:s[5]||(s[5]=(0,i.iM)(((...e)=>r.handlesubmit&&r.handlesubmit(...e)),["prevent"])),ref:"contactform",id:"contact_form",class:"contactform icon-before"},[us,(0,t._)("div",ms,[gs,(0,t.wy)((0,t._)("input",{class:"input",name:"name",required:"","onUpdate:modelValue":s[2]||(s[2]=e=>n.name=e)},null,512),[[i.nr,n.name]])]),(0,t._)("div",hs,[vs,(0,t.wy)((0,t._)("input",{class:"input",type:"email",name:"email",required:"","onUpdate:modelValue":s[3]||(s[3]=e=>n.email=e)},null,512),[[i.nr,n.email]])]),(0,t._)("div",_s,[(0,t.wy)((0,t._)("textarea",{class:"textarea",name:"message",placeholder:"Message","onUpdate:modelValue":s[4]||(s[4]=e=>n.message=e),required:""},null,512),[[i.nr,n.message]])]),fs],544),ws])])])}function As(e,s,a){var i=new FormData;i.append("name",e),i.append("email",s),i.append("message",a),Re()({method:"post",url:`${Le}/contact`,data:i}).then((function(e){alert("Form sent!")})).catch((function(e){alert("Error submitting form"),console.log(e)}))}var Is=As,Es={props:{isOpen:Boolean,title:String},components:{vueRecaptcha:Te.Z},data(){return{isOpen:this.isOpen,title:this.title,showRecaptcha:!1,SITEKEY:xe,name:"",email:"",message:""}},computed:{getTitle(){return this.title}},methods:{handlesubmit(){Is(this.name,this.email,this.message)},handleClose(){this.$refs.contactformcontrol.classList.remove("open")},ToggleMessageUs(){this.$refs.contactformcontrol.classList.add("open")},recaptchaVerified(e){},recaptchaExpired(){this.$refs.vueRecaptcha.reset()},recaptchaFailed(){}}};const Cs=(0,A.Z)(Es,[["render",bs]]);var Ss=Cs;const Ns={id:"container",class:"clearfix"},ys=(0,t.uE)('<section class="abouttext centervertical"><div class="valigncontent"><h2 class="title titlesize-45 icon-title">WHO WE ARE?</h2><span class="description"><p><span>Malak al Tawouk Restaurant is the most popular Tawouk restaurant chain, specializing in original recipes, providing Professional management and offering great service.<br><span class="quote">EVERY DAY, THOUSANDS OF CUSTOMERS ARE SERVED AROUND OUR POPULAR CHAINS.</span></span><br><span>We are operating in different regions inside Lebanon and developing new branches in the Middle-East. Malak al Tawouk Restaurant chain is the undisputed leader in the Lebanese fast food category serving fresh, great tasting, made-for-you sandwiches, Salads and wide choices of delicious food items. Healthful and fresh ingredients have made us a popular destination for Loyal consumers. Founded in 1996, we have become the destination for fast food serving And the pioneers in delivery service. Currently we are operating a network of company- owned and Franchise-owned restaurants in Lebanon and international Markets.</span></p><p><strong>We are an ISO 22000:2005 Certified company</strong><br><br></p></span></div><span class="arrow"></span></section><section class="aboutinspiration centervertical"><h3 class="quote valigncontent"> OUR VISION ILLUSTRATES A COMPANY OF EXCEPTIONAL PEOPLE ON A MISSION TO STAY THE BEST IN THE INDUSTRY. </h3></section>',2),ks=[ys];function Os(e,s){return(0,t.wg)(),(0,t.iD)("div",Ns,ks)}const Ds={},Ts=(0,A.Z)(Ds,[["render",Os]]);var xs=Ts;const zs={class:"swiper-container menucategories"},Rs={class:"swiper-wrapper"},Ls=(0,t._)("img",{alt:"SANDWICHES",class:"categoryicon_rollover",src:"/assets/images/sandwiches.png"},null,-1),Ms=(0,t._)("h2",{class:"title icon-before"},"SANDWICHES",-1),Hs=(0,t._)("img",{alt:"BURGERS",class:"categoryicon_rollover",src:"/assets/images/burger_category.png"},null,-1),Ws=(0,t._)("h2",{class:"title icon-before"},"BURGERS",-1),Bs=(0,t._)("img",{alt:"PLATTERS",class:"categoryicon_rollover",src:"/assets/images/platters_category_1.png"},null,-1),js=(0,t._)("h2",{class:"title icon-before"},"PLATTERS",-1),Us=(0,t._)("img",{alt:"BOX AND DIP",class:"categoryicon_rollover",src:"/assets/images/box.png"},null,-1),Fs=(0,t._)("h2",{class:"title icon-before"},"BOX AND DIP",-1),Ys=(0,t._)("img",{alt:"SIDE SALADS",class:"categoryicon_rollover",src:"/assets/images/salad.png"},null,-1),Ps=(0,t._)("h2",{class:"title icon-before"},"SIDE SALADS",-1),Vs=(0,t._)("img",{alt:"BEVERAGES",class:"categoryicon_rollover",src:"/assets/images/soda.png"},null,-1),Gs=(0,t._)("h2",{class:"title icon-before"},"BEVERAGES",-1),Ks={name:"MenuTopBar",mounted(){var e;$(".menucategories .swiper-slide").length>1&&(e=0,$("#categoryinitialslide").length>0&&(e=$("#categoryinitialslide").val()),menucategoriesswiper=new Swiper(".menucategories",{speed:1e3,loop:!1,slidesPerView:"auto",preload:!0,noSwipingClass:"do_not_swipe",initialSlide:e,preventClicks:!0,preventClicksPropagation:!1,onSlideChangeStart:function(e){e.startAutoplay()},onSlideChangeEnd:function(e){e.startAutoplay()}}))}};var qs=Object.assign(Ks,{props:{title:String},setup(e){return(s,a)=>{const i=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",zs,[(0,t._)("div",Rs,[(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"sandwiches"===e.title}]),to:{name:"Menu.sandwiches"}},{default:(0,t.w5)((()=>[Ls,Ms])),_:1},8,["to","class"]),(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"burgers"===e.title}]),to:{name:"Menu.burgers"}},{default:(0,t.w5)((()=>[Hs,Ws])),_:1},8,["to","class"]),(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"platters"===e.title}]),to:{name:"Menu.platters"}},{default:(0,t.w5)((()=>[Bs,js])),_:1},8,["to","class"]),(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"boxanddip"===e.title}]),to:{name:"Menu.boxanddip"}},{default:(0,t.w5)((()=>[Us,Fs])),_:1},8,["to","class"]),(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"sidesalads"===e.title}]),to:{name:"Menu.sidesalads"}},{default:(0,t.w5)((()=>[Ys,Ps])),_:1},8,["to","class"]),(0,t.Wm)(i,{class:(0,me.C_)(["swiper-slide slide",{active:"beverages"===e.title}]),to:{name:"Menu.beverages"}},{default:(0,t.w5)((()=>[Vs,Gs])),_:1},8,["class","to"])])])}}});const Zs=qs;var $s=Zs;const Js={class:"foodcontainer centervertical"},Xs={class:"swiper-container foodswiper valigncontent swiper-container-horizontal"},Qs={class:"swiper-wrapper"},ea={class:"frame"},sa=["alt","src"],aa={style:{display:"flex","flex-direction":"row",gap:"2px"}},ia={class:"title titlesize-25"},ta={class:"description"},la={class:"price",style:{"padding-left":"10px !important","padding-right":"0px !important"}},na=(0,t._)("br",null,null,-1),ra={key:0},ca={class:"price mobileprice"},oa=(0,t._)("br",null,null,-1),pa={key:0,class:"mobileprice"};function da(e,s,a,i,l,n){return(0,t.wg)(),(0,t.iD)("div",Js,[(0,t._)("div",Xs,[(0,t._)("div",Qs,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.filteredCategory,((e,s)=>((0,t.wg)(),(0,t.iD)("div",{class:"swiper-slide slide",key:s},[(0,t._)("div",ea,[(0,t._)("img",{alt:e.name,src:e.image_path},null,8,sa)]),(0,t._)("div",aa,[(0,t._)("div",null,[(0,t._)("h3",ia,(0,me.zw)(e.name),1),(0,t._)("span",ta,[(0,t._)("p",null,(0,me.zw)(e.description),1)])]),(0,t._)("span",la,[(0,t.Uk)((0,me.zw)(e.price_large&&"Regular:")+" "+(0,me.zw)(n.numberWithCommas(e.price))+" LBP",1),na,e.price_large?((0,t.wg)(),(0,t.iD)("span",ra,"Large: "+(0,me.zw)(n.numberWithCommas(e.price_large))+" LBP",1)):(0,t.kq)("",!0)])]),(0,t._)("span",ca,[(0,t.Uk)((0,me.zw)(e.price_large&&"Regular:")+" "+(0,me.zw)(n.numberWithCommas(e.price))+" LBP",1),oa,e.price_large?((0,t.wg)(),(0,t.iD)("span",pa,"Large: "+(0,me.zw)(n.numberWithCommas(e.price_large))+" LBP",1)):(0,t.kq)("",!0)])])))),128))])])])}var ua=a(4870);let ma;var ga={props:{selectedCategory:String},data(){return{filtered:[]}},computed:{...(0,l.Se)(["allItems"]),filteredCategory(){const e=this.allItems.filter((e=>e.name.toLowerCase()===this.selectedCategory.toLowerCase()));let s=e.map((e=>e.items));if((0,ua.X3)(s[0]))var a=(0,ua.IU)(s[0]);return this.filtered=a,a}},methods:{numberWithCommas(e=""){return null!==e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}},updated(){ma=ha()},mounted(){oe()(window).resize((e=>{oe()(window).width()>766?oe()(".foodswiper .swiper-wrapper").removeClass("do_not_swipe"):oe()(".foodswiper .swiper-wrapper").addClass("do_not_swipe"),ShowHideArrows(".foodswiper",".foodcontainer .arrows")})),ma=ha()},unmounted(){va(ma)}};function ha(){let e=[];if(oe()(".foodswiper .swiper-slide").length>1){const s=new Swiper(".foodswiper",{speed:1e3,loop:!1,slidesPerView:"auto",preload:!0,keyboardControl:!0,onInit:function(e){oe()(window).width()>766?oe()(".foodswiper .swiper-wrapper").removeClass("do_not_swipe"):oe()(".foodswiper .swiper-wrapper").addClass("do_not_swipe"),ShowHideArrows(".foodswiper",".foodcontainer .arrows")},onSlideChangeStart:function(e){e.startAutoplay()},onSlideChangeEnd:function(e){e.startAutoplay()}});e.push(s),oe()(".foodcontainer .rightarrow").click((function(){s.slideNext()})),oe()(".foodcontainer .leftarrow").click((function(){s.slidePrev()}))}return e}function va(e){e.length>0&&e.forEach((e=>e.destroy()))}const _a=(0,A.Z)(ga,[["render",da]]);var fa=_a;const wa={id:"container",class:"clearfix"},ba={class:"ourmenu"},Aa=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),Ia=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var Ea={__name:"Beverages",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",wa,[(0,t._)("section",ba,[(0,t.Wm)($s,{title:"beverages"}),(0,t.Wm)(fa,{selectedCategory:"Beverages"}),Aa,Ia])]))}};const Ca=Ea;var Sa=Ca;const Na={id:"container",class:"clearfix"},ya={class:"ourmenu"},ka=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),Oa=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var Da={__name:"BoxAndDip",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",Na,[(0,t._)("section",ya,[(0,t.Wm)($s,{title:"boxanddip"}),(0,t.Wm)(fa,{selectedCategory:"BOX AND DIP"}),ka,Oa])]))}};const Ta=Da;var xa=Ta;const za={id:"container",class:"clearfix"},Ra={class:"ourmenu"},La=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),Ma=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var Ha={__name:"Burgers",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",za,[(0,t._)("section",Ra,[(0,t.Wm)($s,{title:"burgers"}),(0,t.Wm)(fa,{selectedCategory:"Burgers"}),La,Ma])]))}};const Wa=Ha;var Ba=Wa;const ja={id:"container",class:"clearfix"},Ua={class:"ourmenu"},Fa=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),Ya=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var Pa={__name:"Platters",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",ja,[(0,t._)("section",Ua,[(0,t.Wm)($s,{title:"platters"}),(0,t.Wm)(fa,{selectedCategory:"Platters"}),Fa,Ya])]))}};const Va=Pa;var Ga=Va;const Ka={id:"container",class:"clearfix"},qa={class:"ourmenu"},Za=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),$a=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var Ja={__name:"Sandwiches",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",Ka,[(0,t._)("section",qa,[(0,t.Wm)($s,{title:"sandwiches"}),(0,t.Wm)(fa,{selectedCategory:"Sandwiches"}),Za,$a])]))}};const Xa=Ja;var Qa=Xa;const ei={id:"container",class:"clearfix"},si={class:"ourmenu"},ai=(0,t._)("div",{class:"addonscaption icon-before titlesize-22"},[(0,t._)("p",null,[(0,t._)("span",null,"YOU CAN ADD ANY OF THIS INGREDIENTS ON ALL KIND OF SANDWICHES")])],-1),ii=(0,t._)("div",{class:"addons"},[(0,t._)("div"),(0,t._)("ul",null,[(0,t._)("li",null,"hummus"),(0,t._)("li",null,"Spices"),(0,t._)("li",null,"Mint"),(0,t._)("li",null,"Tomatoes"),(0,t._)("li",null,"Letuce")])],-1);var ti={__name:"SideSalads",setup(e){return(e,s)=>((0,t.wg)(),(0,t.iD)("div",ei,[(0,t._)("section",si,[(0,t.Wm)($s,{title:"sidesalads"}),(0,t.Wm)(fa,{selectedCategory:"Side Salads"}),ai,ii])]))}};const li=ti;var ni=li,ri=a(8697),ci=a.n(ri);const oi={};"function"===typeof ci()&&ci()(oi);const pi=oi;var di=pi;const ui=[{path:"/",name:"home",component:ie},{path:"/Branches",name:"Branches",component:ue},{path:"/Careers",name:"Careers",component:ls},{path:"/Contact",name:"Contact",component:Ss},{path:"/About",name:"About",component:xs},{path:"/Sandwiches",name:"Menu.sandwiches",component:Qa},{path:"/Beverages",name:"Menu.beverages",component:Sa},{path:"/BoxAndDip",name:"Menu.boxanddip",component:xa},{path:"/Platters",name:"Menu.platters",component:Ga},{path:"/SideSalads",name:"Menu.sidesalads",component:ni},{path:"/Burgers",name:"Menu.burgers",component:Ba},{path:"/policy.html",name:"Policy",component:di}],mi=(0,B.p7)({history:(0,B.PO)(),routes:ui});var gi=mi;const hi={items:[]},vi={allItems:e=>e.items},_i={async fetchAllItems({commit:e}){try{var s=await Re()({method:"GET",url:`${Le}/api/website/items`});if(null!==s.data)var a=s.data}catch(i){console.error(i)}e("setItems",a)}},fi={setItems:(e,s)=>e.items=s};var wi={state:hi,getters:vi,actions:_i,mutations:fi},bi=(0,l.MT)({state:{},getters:{},mutations:{},actions:{},modules:{items:wi}});(0,i.ri)(W).use(bi).use(gi).mount("#app")},8697:function(){}},s={};function a(i){var t=s[i];if(void 0!==t)return t.exports;var l=s[i]={exports:{}};return e[i].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(s,i,t,l){if(!i){var n=1/0;for(p=0;p<e.length;p++){i=e[p][0],t=e[p][1],l=e[p][2];for(var r=!0,c=0;c<i.length;c++)(!1&l||n>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[c])}))?i.splice(c--,1):(r=!1,l<n&&(n=l));if(r){e.splice(p--,1);var o=t();void 0!==o&&(s=o)}}return s}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[i,t,l]}}(),function(){a.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(s,{a:s}),s}}(),function(){a.d=function(e,s){for(var i in s)a.o(s,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};a.O.j=function(s){return 0===e[s]};var s=function(s,i){var t,l,n=i[0],r=i[1],c=i[2],o=0;if(n.some((function(s){return 0!==e[s]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(c)var p=c(a)}for(s&&s(i);o<n.length;o++)l=n[o],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(p)},i=self["webpackChunkmalak_tawouk"]=self["webpackChunkmalak_tawouk"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(1116)}));i=a.O(i)})();