(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Project-vue"],{"07bd":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{role:"main"}},[r("section",{staticClass:"jumbotron masthead text-center text-white",style:{backgroundImage:"url("+this.cover.url+")"}},[r("div",{staticClass:"overlay"}),r("div",{staticClass:"container animated pulse pulse"},[r("h1",{staticClass:"jumbotron-heading"},[r("prismic-rich-text",{attrs:{field:t.project.title}})],1),t._m(0)])]),r("div",{staticClass:"album"},[r("div",{staticClass:"container"},[r("h2",[t._v("Overview")]),r("br"),r("h5",[t._v("Client")]),r("prismic-rich-text",{attrs:{field:t.project.client}}),r("h5",[t._v("Challenge")]),r("prismic-rich-text",{attrs:{field:t.project.challenge}}),r("h5",[t._v("Outcome")]),r("prismic-rich-text",{attrs:{field:t.project.outcome}}),r("h5",[t._v("Length of project")]),r("prismic-rich-text",{attrs:{field:t.project.length}}),r("h5",[t._v("My role in the project")]),r("prismic-rich-text",{attrs:{field:t.project.role}}),r("br"),r("prismic-rich-text",{attrs:{field:t.project.content}})],1)])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("a",{staticClass:"btn btn-light m-2",attrs:{href:"/"}},[t._v("Back to projects")])])}],n={name:"Project",data:function(){return{project:null,cover:null}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("projects",t).then(function(t){t?(e.project=t.data,e.cover=t.data.cover):e.$router.push({name:"not-found"})})}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,r){this.getContent(t.params.uid),r()}},s=n,a=r("2877"),o=Object(a["a"])(s,i,c,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=view-Project-vue.69705f50.js.map