(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a55b"],{a55b:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("material-card",{attrs:{title:e.$t("login"),color:"info"}},[r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{ref:"username",attrs:{rules:[function(){return!!e.username||e.$t("requiredMessage")}],label:e.$t("email"),"prepend-icon":"mdi-account",placeholder:"user@email.com",required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{ref:"password",attrs:{rules:[function(){return!!e.password||e.$t("requiredMessage")}],"append-icon":e.showPassword?"mdi-eye-off":"mdi-eye",type:e.showPassword?"text":"password",label:e.$t("password"),"prepend-icon":"mdi-lock",placeholder:"*********",counter:"",required:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),r("v-divider",{staticClass:"mt-5"}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{"align-center":"","justify-center":"",color:"info"},on:{click:e.login}},[e._v(e._s(e.$t("login"))+"\n            ")]),r("v-btn",{attrs:{"align-center":"","justify-center":"",to:"register"}},[e._v(e._s(e.$t("register"))+"\n            ")])],1)],1)],1)],1)],1)],1)},a=[],n=(r("96cf"),r("3b8d")),o=r("fece"),i={mixins:[o["a"]],data:function(){return{username:"",password:"",showPassword:!1}},methods:{login:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=26;break}return this.$store.commit("update",{overlay:!0}),e.prev=2,e.next=5,this.getRecaptchaToken("login");case 5:return t=e.sent,e.next=8,this.$http.post("/auth/login",{email:this.username,password:this.password,g_recaptcha_response:t});case 8:r=e.sent,s=r.data.access_token,a=r.data.email,localStorage.setItem("token",s),localStorage.setItem("user",a),this.$http.defaults.headers.common["Authorization"]="Bearer "+s,this.$store.commit("update",{overlay:!1,authStatus:"success",token:s,user:a}),this.$router.push("/"),e.next=26;break;case 18:e.prev=18,e.t0=e["catch"](2),console.error(e.t0),n=e.t0.response.data||e.t0,this.$store.commit("update",{overlay:!1,alertMessage:n,authStatus:"error",token:null,user:null}),localStorage.removeItem("token"),localStorage.removeItem("user"),this.recaptchaToken=null;case 26:case"end":return e.stop()}},e,this,[[2,18]])}));function t(){return e.apply(this,arguments)}return t}()},metaInfo:function(){return{title:this.$t("login")+" | "+this.$t("title")}}},c=i,l=r("2877"),u=Object(l["a"])(c,s,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=a55b.114cdb16.js.map