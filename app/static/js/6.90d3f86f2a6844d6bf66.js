webpackJsonp([6],{PMHa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("exGp"),r=a.n(n),c=a("gyMJ"),o={data:function(){return{total:0,page_size:100,page:1,data_list:[],base_data:[],loading:!0,id_list:[]}},components:{},computed:{name:function(){return this.$route.params.bid}},created:function(){console.log(this.name),this.getData()},methods:{getData:function(){var t=this;return r()(i.a.mark(function e(){var a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,a={name:t.name,page:t.page,page_size:t.page_size,total:t.total},e.next=4,Object(c.n)(a);case 4:s=e.sent,console.log(s),t.total=s.total,t.base_data=s.base_data,t.data_list=s.data,t.loading=!1;case 10:case"end":return e.stop()}},e,t)}))()},delData:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)({id_list:array(t.id_list)});case 2:1===e.sent.state?t.$Message.success("删除成功"):t.$Message.warning("删除失败"),t.id_list=[],t.getData();case 6:case"end":return e.stop()}},e,t)}))()},delPerformer:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.g)({ids:[t.base_data[0].id]});case 2:1===e.sent.state?(t.$Message.success("角色删除成功"),t.$router.go(-1)):t.$Message.warning("角色删除失败");case 4:case"end":return e.stop()}},e,t)}))()},setData:function(t){var e=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.base_data[0].id,a.next=3,Object(c.o)({id:s,movie_id:t});case 3:1===a.sent.state?e.$Message.success("设置成功"):e.$Message.warning("设置失败"),e.getData();case 6:case"end":return a.stop()}},a,e)}))()},changeState:function(){var t=this;return r()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)({ids:t.ids});case 2:1===e.sent.state?t.$Message.success("设置成功"):t.$Message.warning("设置失败");case 4:case"end":return e.stop()}},e,t)}))()},addMoviecol:function(t){var e=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.b)({id:t});case 2:0===(s=a.sent).state?e.$Message.warning("用户未登录"):1===s.state?e.$Message.success("收藏成功"):e.$Message.success("收藏失败");case 4:case"end":return a.stop()}},a,e)}))()},addFollow:function(t){var e=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.a)({id:t});case 2:0===(s=a.sent).state?e.$Message.warning("用户未登录"):1===s.state?e.$Message.success("关注成功"):e.$Message.success("关注失败");case 4:case"end":return a.stop()}},a,e)}))()},show:function(t){var e=t.split(" ")[0];this.$router.push({path:"/"+e})},seturl:function(t){return"/static/image/movie/"+(t=t.split(" ")[0])+"/"+t+".jpg"},settitle:function(t){return t=t.split(" ").slice(1).join(" ")},settext:function(t){return t=t.split(" ")[0]},changePage:function(t){this.page=t,console.log("page:",this.page),this.getData()},changePagesize:function(t){this.page_size=t,console.log("page_size:",this.page_size),this.getData()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),a("div",{staticClass:"index-body"},[a("div",{staticClass:"clear-float"},[t._l(t.base_data,function(e){return a("div",{staticClass:"performer-data"},[a("div",{staticStyle:{padding:"8px","background-color":"#fff"}},[a("div",{staticClass:"performer-item-img",staticStyle:{overflow:"hidden"}},[a("img",{staticStyle:{height:"324px",float:"right"},attrs:{src:"/static/image/performer/"+e.name+".jpg?"+Math.random(),alt:e.name}})])]),t._v(" "),a("div",{staticClass:"performer-item-text"},[a("div",{staticClass:"title"},[t._v(t._s(e.name)+" "),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small"},on:{click:function(a){t.addFollow(e.id)}}},[t._v("关注")])],1)]),t._v(" "),a("div",{staticClass:"performer-info"},[e.birthday?a("div",[t._v("生日："+t._s(t.$formatDate(e.birthday)))]):t._e(),t._v(" "),e.age?a("div",[t._v("年龄："+t._s(e.age))]):t._e(),t._v(" "),e.length?a("div",[t._v("身高："+t._s(e.length))]):t._e(),t._v(" "),e.cup?a("div",[t._v("罩杯："+t._s(e.cup))]):t._e(),t._v(" "),e.bust?a("div",[t._v("胸围："+t._s(e.bust))]):t._e(),t._v(" "),e.waist?a("div",[t._v("腰围："+t._s(e.waist))]):t._e(),t._v(" "),e.hips?a("div",[t._v("臀围："+t._s(e.hips))]):t._e(),t._v(" "),e.hometown?a("div",[t._v("出生地："+t._s(e.hometown))]):t._e(),t._v(" "),e.hobby?a("div",[t._v("爱好："+t._s(e.hobby))]):t._e()])])}),t._v(" "),a("CheckboxGroup",{model:{value:t.id_list,callback:function(e){t.id_list=e},expression:"id_list"}},t._l(t.data_list,function(e,s){return a("div",{staticClass:"performer-detail-item"},[a("div",{staticClass:"item-img",on:{click:function(a){t.show(e.title)}}},[a("div",{staticStyle:{height:"260px",width:"183px",overflow:"hidden"}},[a("img",{staticStyle:{float:"right",height:"259px"},attrs:{src:t.seturl(e.title),alt:e.title}})])]),t._v(" "),a("div",{staticClass:"item-text"},[a("div",{staticClass:"item-text-name"},[t._v(t._s(t.settext(e.title))+"/"+t._s(t.$formatDate(e.release_time)))]),t._v(" "),a("Checkbox",{attrs:{label:e.id}},[a("span")]),t._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){t.addMoviecol(e.id)}}},[t._v("收藏")]),t._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){t.setData(e.id)}}},[t._v("设为封面")])],1)])})),t._v(" "),a("div",{staticStyle:{position:"absolute",top:"16px",left:"500px",width:"60px","z-index":"2000"}},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.delData}},[t._v("删除")]),t._v(" "),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.changeState}},[t._v("更改")])],1)],2)]),t._v(" "),a("Page",{staticStyle:{"margin-bottom":"25px"},attrs:{total:t.total,current:t.page,"page-size":t.page_size,"page-size-opts":[20,50,100,200,500],"show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePagesize}})],1)},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("QWSv")},"data-v-5b09d992",null);e.default=u.exports},QWSv:function(t,e){}});
//# sourceMappingURL=6.90d3f86f2a6844d6bf66.js.map