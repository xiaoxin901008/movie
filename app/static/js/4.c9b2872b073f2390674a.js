webpackJsonp([4],{PdeU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("exGp"),o=a.n(n),r=a("gyMJ"),c={data:function(){return{total:0,page_size:100,data_list:[],loading:!0,ids:[]}},components:{},computed:{page:function(){return this.$route.params.bid||1}},created:function(){console.log(this.keyword),this.getData()},methods:{getData:function(){var t=this;return o()(i.a.mark(function e(){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={page:t.page,page_size:t.page_size,total:t.total},e.next=3,Object(r.l)(a);case 3:s=e.sent,t.total=s.total,console.log(s),t.total>0&&(t.data_list=s.data),t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()},delData:function(t){var e=this;return o()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(r.f)({id:t});case 2:1===(s=a.sent).state?e.$Message.success("取消收藏成功"):0===s.state?e.$Message.warning("请先登录"):e.$Message.warning("取消收藏失败"),e.getData();case 5:case"end":return a.stop()}},a,e)}))()},show:function(t){var e=t.split(" ")[0];this.$router.push({path:"/"+e})},seturl:function(t){return"/static/image/movie/"+(t=t.split(" ")[0])+"/"+t+".jpg?"+Math.random()},settitle:function(t){return t=t.split(" ").slice(1).join(" ")},settext:function(t){return t=t.split(" ")[0]},changePage:function(t){this.$router.push("/page/"+t)},changePagesize:function(t){this.page_size=t,console.log("page_size:",this.page_size),this.getData()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),a("div",{staticClass:"index-body"},[a("div",t._l(t.data_list,function(e,s){return a("div",{staticClass:"index-item"},[a("div",{staticClass:"item-img",on:{click:function(a){t.show(e.title)}}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.seturl(e.title),alt:e.title}})]),t._v(" "),a("div",{staticClass:"item-text"},[a("div",{staticClass:"item-text-title"},[t._v(t._s(e.info))]),t._v(" "),a("div",{staticClass:"item-text-name"},[t._v(t._s(t.settext(e.title))+"/"+t._s(t.$formatDate(e.release_time)))]),t._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){t.delData(e.id)}}},[t._v("取消收藏")])],1)])}))]),t._v(" "),a("Page",{staticStyle:{"margin-bottom":"25px"},attrs:{total:t.total,current:t.page,"page-size":t.page_size,"page-size-opts":[20,50,100,200,500],"show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePagesize}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(t){a("b6So")},null,null);e.default=u.exports},b6So:function(t,e){}});
//# sourceMappingURL=4.c9b2872b073f2390674a.js.map