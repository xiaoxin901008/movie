webpackJsonp([5],{OmL2:function(t,e){},kbPo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),n=i.n(a),s=i("exGp"),l=i.n(s),r=i("gyMJ"),o={data:function(){return{total:0,page_size:10,page:1,keyword:null,base_data:null,data_list:[],link_title:[{width:"60%",label:"名称"},{width:"20%",label:"大小"},{width:"20%",label:"分享日期"}],links:[],image_detail:null,loading:!0}},computed:{title:function(){return this.$route.params.bid}},components:{},created:function(){console.log("name:",this.title),this.getData()},methods:{getData:function(){var t=this;return l()(n.a.mark(function e(){var i,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i={title:t.title},e.next=3,Object(r.k)(i);case 3:a=e.sent,console.log(a),t.base_data=a.base_data,t.data_list=a.data,t.links=a.links,t.loading=!1;case 9:case"end":return e.stop()}},e,t)}))()},show_image:function(t){this.image_detail=t},setgenre:function(t){return t=t.split(",")},go_performer:function(t){this.$router.push("/performer/"+t)},go_genre:function(t){this.$router.push("/genre/"+t)},seturl_base:function(t){return"/static/image/movie/"+(t=t.split(" ")[0])+"/"+t+".jpg"},seturl:function(t){var e=t.split("/");return"/static/image/movie/"+this.title+"/"+e[e.length-1]+".jpg"}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[t.loading?i("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.image_detail,expression:"image_detail"}],staticStyle:{position:"fixed","background-color":"rgba(0, 0, 0, 0.5)",width:"100%",height:"100%"},on:{click:function(e){t.image_detail=!1}}},[i("img",{staticStyle:{position:"relative",height:"80%",top:"5%"},attrs:{src:t.image_detail},on:{click:function(e){t.image_detail=!1}}})]),t._v(" "),i("div",{staticClass:"index-body"},t._l(t.base_data,function(e){return i("div",[i("div",{staticStyle:{"text-align":"left",margin:"10px 0","font-size":"20px"}},[t._v(t._s(e.title)+"\n      ")]),t._v(" "),i("div",{staticClass:"index-detail-data clear-float"},[i("div",{staticClass:"index-detail-data-img"},[i("img",{attrs:{src:t.seturl_base(e.title),alt:e.title}})]),t._v(" "),i("div",{staticClass:"index-detail-data-info"},[i("div",[i("b",[t._v("名称：")]),i("span",{staticStyle:{color:"orangered"}},[t._v(t._s(t.title))])]),t._v(" "),i("div",[i("b",[t._v("发行日期：")]),i("span",[t._v(t._s(t.$formatDate(e.release_time)))])]),t._v(" "),i("div",[i("b",[t._v("长度：")]),i("span",[t._v(t._s(e.length)+"分钟")])]),t._v(" "),t._m(0,!0),t._v(" "),i("div",[t._l(t.setgenre(e.genre),function(e){return[i("span",{staticClass:"tag",staticStyle:{"margin-right":"10px"},on:{click:function(i){t.go_genre(e)}}},[t._v(t._s(e))])]})],2),t._v(" "),t._m(1,!0),t._v(" "),i("div",[t._l(t.setgenre(e.performer),function(e){return[i("span",{staticClass:"tag",staticStyle:{"margin-right":"10px"},on:{click:function(i){t.go_performer(e)}}},[t._v(t._s(e))])]})],2)])]),t._v(" "),i("p",{staticStyle:{"text-align":"left","margin-bottom":"5px"}},[t._v("磁力链接")]),t._v(" "),i("table",{staticClass:"link-table"},[i("tr",[t._l(t.link_title,function(e){return[i("th",{style:"width:"+e.width},[t._v("\n              "+t._s(e.label)+"\n            ")])]})],2),t._v(" "),t._l(t.links,function(e){return[i("tr",[i("td",[i("a",{attrs:{href:e.url}},[t._v("\n                "+t._s(e.name))])]),t._v(" "),i("td",[i("a",{attrs:{href:e.url}},[t._v(t._s(e.size))])]),t._v(" "),i("td",[i("a",{attrs:{href:e.url}},[t._v(t._s(t.$formatDate(e.share_date)))])])])]})],2),t._v(" "),i("div",{staticClass:"clear-float"},[i("p",{staticStyle:{"text-align":"left"}},[t._v("影片图像")]),t._v(" "),t._l(t.data_list,function(e){return i("div",{staticClass:"index-detail-item"},[i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.seturl(e.url),alt:e.name},on:{click:function(i){t.show_image(t.seturl(e.url))}}})])])})],2),t._v(" "),i("div",{staticStyle:{"margin-bottom":"40px"}})])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b",[this._v("类别：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b",[this._v("演员：")])])}]};var _=i("VU/8")(o,c,!1,function(t){i("OmL2")},null,null);e.default=_.exports}});
//# sourceMappingURL=5.fb1b6bb1c40802f330db.js.map