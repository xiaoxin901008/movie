webpackJsonp([13],{PMHa:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("exGp"),r=a.n(n),c=a("gyMJ"),o=a("L/O1"),l={data:function(){return{total:0,page_size:50,page:1,data_list:[],base_data:[],loading:!0,id_list:[],username:Object(o.b)("username")}},components:{},computed:{name:function(){return this.$route.params.bid}},created:function(){console.log(this.name),this.getData()},methods:{getData:function(){var e=this;return r()(i.a.mark(function t(){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,a={name:e.name,page:e.page,page_size:e.page_size,total:e.total},t.next=4,Object(c.o)(a);case 4:s=t.sent,console.log(s),e.total=s.total,e.base_data=s.base_data,e.data_list=s.data,e.loading=!1;case 10:case"end":return t.stop()}},t,e)}))()},delData:function(){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.f)({id_list:Array(e.id_list),username:e.username});case 2:1===t.sent.state?e.$Message.success("删除成功"):e.$Message.warning("删除失败"),e.id_list=[],e.getData();case 6:case"end":return t.stop()}},t,e)}))()},delPerformer:function(){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.h)({id_list:[e.base_data[0].id],username:e.username});case 2:1===t.sent.state?(e.$Message.success("角色删除成功"),e.$router.go(-1)):e.$Message.warning("角色删除失败");case 4:case"end":return t.stop()}},t,e)}))()},del:function(e,t){var a=this;return r()(i.a.mark(function s(){return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.f)({id:t,username:a.username});case 2:1===s.sent.state?(a.data_list.splice(e,1),a.$Message.success("删除成功")):a.$Message.warning("删除失败");case 4:case"end":return s.stop()}},s,a)}))()},setData:function(e){var t=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=t.base_data[0].id,a.next=3,Object(c.r)({id:s,movie_id:e});case 3:1===a.sent.state?t.$Message.success("设置成功"):t.$Message.warning("设置失败"),t.getData();case 6:case"end":return a.stop()}},a,t)}))()},selectAll:function(){0===this.id_list.length?this.id_list=this.data_list.map(function(e){return e.id}):this.id_list=[]},changeState:function(){var e=this;return r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.d)({id_list:e.id_list});case 2:1===t.sent.state?(e.$Message.success("设置成功"),e.id_list=[]):e.$Message.warning("设置失败");case 4:case"end":return t.stop()}},t,e)}))()},addMoviecol:function(e){var t=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.c)({id:e,username:t.username});case 2:0===(s=a.sent).state?t.$Message.warning("用户未登录"):1===s.state?t.$Message.success("收藏成功"):t.$Message.success("收藏失败");case 4:case"end":return a.stop()}},a,t)}))()},addFollow:function(e){var t=this;return r()(i.a.mark(function a(){var s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(c.b)({id:e,username:t.username});case 2:0===(s=a.sent).state?t.$Message.warning("用户未登录"):1===s.state?t.$Message.success("关注成功"):t.$Message.success("关注失败");case 4:case"end":return a.stop()}},a,t)}))()},show:function(e){var t=e.split(" ")[0];this.$router.push({path:"/"+t})},seturl:function(e){return e=e.split(" ")[0],this.$global.server_ip+"/image/movie/"+e+"/"+e+".jpg"},changePage:function(e){this.page=e,this.id_list=[],console.log("page:",this.page),this.getData()},changePagesize:function(e){this.page_size=e,console.log("page_size:",this.page_size),this.getData()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[e.loading?a("Spin",{attrs:{size:"large",fix:""}}):e._e(),e._v(" "),a("div",{staticClass:"index-body"},[a("div",{staticClass:"clear-float"},[e._l(e.base_data,function(t){return a("div",{staticClass:"performer-data"},[a("div",{staticStyle:{padding:"8px","background-color":"#fff"}},[a("div",{staticClass:"performer-item-img",staticStyle:{overflow:"hidden"}},[a("img",{staticStyle:{float:"right"},attrs:{src:e.$global.server_ip+"/image/performer/"+t.name+".jpg?"+Math.random(),alt:t.name}})])]),e._v(" "),a("div",{staticClass:"performer-item-text"},[a("div",{staticClass:"title"},[e._v("\n            "+e._s(t.name)+"\n            "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.addFollow(t.id)}}},[e._v("关注")]),e._v(" "),"xiaoxin"===e.username?a("Button",{attrs:{size:"small"},on:{click:e.delPerformer}},[e._v("删除")]):e._e()],1)]),e._v(" "),a("div",{staticClass:"performer-info"},[t.birthday?a("div",[e._v("生日："+e._s(e.$formatDate(t.birthday)))]):e._e(),e._v(" "),t.age?a("div",[e._v("年龄："+e._s(t.age))]):e._e(),e._v(" "),t.length?a("div",[e._v("身高："+e._s(t.length))]):e._e(),e._v(" "),t.cup?a("div",[e._v("罩杯："+e._s(t.cup))]):e._e(),e._v(" "),t.bust?a("div",[e._v("胸围："+e._s(t.bust))]):e._e(),e._v(" "),t.waist?a("div",[e._v("腰围："+e._s(t.waist))]):e._e(),e._v(" "),t.hips?a("div",[e._v("臀围："+e._s(t.hips))]):e._e(),e._v(" "),t.hometown?a("div",[e._v("出生地："+e._s(t.hometown))]):e._e(),e._v(" "),t.hobby?a("div",[e._v("爱好："+e._s(t.hobby))]):e._e()])])}),e._v(" "),a("CheckboxGroup",{model:{value:e.id_list,callback:function(t){e.id_list=t},expression:"id_list"}},e._l(e.data_list,function(t,s){return a("div",{staticClass:"performer-detail-item"},[a("div",{staticClass:"item-img",on:{click:function(a){e.show(t.title)}}},[a("div",[a("img",{attrs:{src:e.seturl(t.title),alt:t.title}})])]),e._v(" "),a("div",{staticClass:"item-text"},[t.info?a("div",{staticClass:"item-text-title"},[e._v(e._s(t.info))]):e._e(),e._v(" "),a("div",{staticClass:"item-text-name"},[e._v(e._s(t.title)+"/"+e._s(e.$formatDate(t.release_time)))]),e._v(" "),"xiaoxin"===e.username?a("Checkbox",{attrs:{label:t.id}},[a("span",{staticStyle:{margin:"0"}})]):e._e(),e._v(" "),a("Button",{attrs:{size:"small"},on:{click:function(a){e.addMoviecol(t.id)}}},[e._v("收藏")]),e._v(" "),"xiaoxin"===e.username?a("Button",{attrs:{size:"small"},on:{click:function(a){e.setData(t.id)}}},[e._v("设为封面")]):e._e(),e._v(" "),"xiaoxin"===e.username?a("Button",{attrs:{size:"small"},on:{click:function(a){e.del(s,t.id)}}},[e._v("删除")]):e._e()],1)])})),e._v(" "),"xiaoxin"===e.username?a("div",{staticStyle:{position:"fixed",top:"16px",left:"524px",width:"180px","z-index":"2000"}},[a("b-button",{attrs:{size:"sm"},on:{click:e.delData}},[e._v("删除")]),e._v(" "),a("b-button",{attrs:{size:"sm"},on:{click:e.changeState}},[e._v("更改")]),e._v(" "),a("b-button",{attrs:{size:"sm"},on:{click:e.selectAll}},[e._v("全选")])],1):e._e()],2)]),e._v(" "),a("Page",{staticStyle:{"margin-bottom":"25px"},attrs:{total:e.total,current:e.page,"page-size":e.page_size,"page-size-opts":[20,50,100,200,500],"show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePagesize}})],1)},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(e){a("qDw8")},"data-v-3392fd28",null);t.default=d.exports},qDw8:function(e,t){}});
//# sourceMappingURL=13.27e43e31d57f7b816721.js.map