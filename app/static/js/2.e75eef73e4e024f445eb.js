webpackJsonp([2],{PdeU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("exGp"),r=a.n(n),o=a("gyMJ"),c=a("L/O1"),l={data:function(){return{total:0,page_size:100,page:1,data_list:[],loading:!0,ids:[],username:Object(c.b)("username")}},components:{},computed:{get_page:function(){var t=this.$route.params.bid;return t?parseInt(t):1}},created:function(){console.log(this.keyword),this.getData()},methods:{getData:function(){var t=this;return r()(i.a.mark(function e(){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={page:t.page,page_size:t.page_size,total:t.total,username:t.username},e.next=3,Object(o.m)(a);case 3:s=e.sent,t.total=s.total,console.log(s),t.total>0&&(t.data_list=s.data),t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()},delData:function(t){var e=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(o.g)({id:t,username:e.username});case 2:1===(s=a.sent).state?e.$Message.success("取消收藏成功"):0===s.state?e.$Message.warning("请先登录"):e.$Message.warning("取消收藏失败"),e.getData();case 5:case"end":return a.stop()}},a,e)}))()},show:function(t){var e=t.split(" ")[0];this.$router.push({path:"/"+e})},seturl:function(t){return t=t.split(" ")[0],this.$global.server_ip+"/image/movie/"+t+"/"+t+".jpg?"+Math.random()},settitle:function(t){return t=t.split(" ").slice(1).join(" ")},settext:function(t){return t=t.split(" ")[0]},changePage:function(t){this.$router.push("/moviecol/"+t)},changePagesize:function(t){this.page_size=t,console.log("page_size:",this.page_size),this.getData()}},watch:{$route:function(t,e){this.page!==this.get_page&&(this.page=this.get_page),this.getData()}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),a("div",{staticClass:"index-body"},[a("div",t._l(t.data_list,function(e,s){return a("div",{staticClass:"index-item"},[a("div",{staticClass:"item-img",on:{click:function(a){t.show(e.title)}}},[a("img",{staticStyle:{height:"212.3px",width:"315.3px"},attrs:{src:t.seturl(e.title),alt:e.title}})]),t._v(" "),a("div",{staticClass:"item-text"},[a("div",{staticClass:"item-text-title"},[t._v(t._s(e.info))]),t._v(" "),a("div",{staticClass:"item-text-name"},[t._v(t._s(t.settext(e.title))+"/"+t._s(t.$formatDate(e.release_time))+"\n              "),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{size:"small"},on:{click:function(a){t.delData(e.id)}}},[t._v("取消收藏")])],1)])])}))]),t._v(" "),a("Page",{staticStyle:{"margin-bottom":"25px"},attrs:{total:t.total,current:t.page,"page-size":t.page_size,"page-size-opts":[20,50,100,200,500],"show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePagesize}})],1)},staticRenderFns:[]};var g=a("VU/8")(l,u,!1,function(t){a("zU6Z")},null,null);e.default=g.exports},zU6Z:function(t,e){}});
//# sourceMappingURL=2.e75eef73e4e024f445eb.js.map