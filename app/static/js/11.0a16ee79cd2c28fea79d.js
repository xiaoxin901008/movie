webpackJsonp([11],{Zp0a:function(t,e){},kbPo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),l=i("gyMJ"),o=i("L/O1"),c={data:function(){return{total:0,page_size:10,page:1,keyword:null,base_data:null,data_list:[],other_data:[],link_title:[{width:"60%",label:"名称"},{width:"20%",label:"大小"},{width:"20%",label:"分享日期"}],links:[],image_detail:null,loading:!0,show_performer:null,playerOptions:{},username:Object(o.b)("username")}},computed:{title:function(){return this.$route.params.bid}},components:{},created:function(){console.log("name:",this.title),this.getData()},methods:{getData:function(){var t=this;return r()(a.a.mark(function e(){var i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,i={title:t.title},e.next=4,Object(l.l)(i);case 4:s=e.sent,console.log(s),t.base_data=s.base_data,t.data_list=s.data,t.other_data=s.other_data,t.links=s.links,t.loading=!1,t.playerOptions={autoplay:!1,muted:!0,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,poster:t.seturl_base(),width:document.documentElement.clientWidth,sources:[{type:"video/mp4",src:t.setvideo()}]};case 12:case"end":return e.stop()}},e,t)}))()},show_image:function(t){this.image_detail=t},showPerformer:function(){alert("..."),this.show_performer=!0},show:function(t){var e=t.split(" ")[0];this.$router.push({path:"/"+e})},setvideo:function(){return this.$global.server_ip+"/video/"+this.base_data[0].video},addMoviecol:function(t){var e=this;return r()(a.a.mark(function i(){var s;return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(l.c)({id:t,username:e.username});case 2:0===(s=i.sent).state?e.$Message.warning("用户未登录"):1===s.state?e.$Message.success("收藏成功"):e.$Message.success("收藏失败");case 4:case"end":return i.stop()}},i,e)}))()},del:function(t,e){var i=this;return r()(a.a.mark(function s(){var n;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return n={id:t,username:i.username},console.log(n),s.next=4,Object(l.f)(n);case 4:1===s.sent.state?(i.$Message.success("删除成功"),console.log(e),e?i.data_list.splice(e,1):(console.log("..."),i.$router.go(-1))):i.$Message.warning("删除失败");case 6:case"end":return s.stop()}},s,i)}))()},setgenre:function(t){return t&&(t=t.split(",")),t},go_performer:function(t){this.$router.push("/performer/"+t)},go_genre:function(t){this.$router.push("/genre/"+t)},seturl_base:function(){var t=this.title.split(" ")[0];return this.$global.server_ip+"/image/movie/"+t+".jpg"},seturl:function(t){var e=t.split("/");return this.$global.server_ip+"/image/movie/"+e[e.length-1].split(".")[0]+".jpg?"+Math.random()},seturl_genre:function(t){var e=t.split("/");return t=e[e.length-1].split(".")[0],this.$global.server_ip+"/image/movie/"+t+".jpg?"+Math.random()}},watch:{$route:function(){this.getData()}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[t.loading?i("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.image_detail,expression:"image_detail"}],staticClass:"image-detail",on:{click:function(e){t.image_detail=!1}}},[i("img",{staticStyle:{position:"relative"},attrs:{src:t.image_detail},on:{click:function(e){t.image_detail=!1}}})]),t._v(" "),i("div",{staticClass:"index-body"},t._l(t.base_data,function(e){return i("div",{staticClass:"index-body-info"},[i("div",{staticClass:"index-title"},[t._v(t._s(e.title+" "+e.info)+"\n      ")]),t._v(" "),e.video?i("div",{staticStyle:{padding:"8px",background:"#fff","margin-bottom":"15px"}},[i("video-player",{ref:"videoPlayer",refInFor:!0,staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:t.playerOptions}})],1):t._e(),t._v(" "),i("div",{staticClass:"index-detail-data clear-float"},[i("div",{staticClass:"index-detail-data-img"},[i("img",{attrs:{src:t.seturl_base(),alt:e.title}})]),t._v(" "),i("div",{staticClass:"index-detail-data-info"},[i("p",[i("b",[t._v("名称：")]),i("span",{staticStyle:{color:"orangered","margin-right":"10px"}},[t._v(t._s(t.title))]),t._v(" "),"xiaoxin"===t.username?i("Button",{attrs:{size:"small"},on:{click:function(i){t.del(e.id,null)}}},[t._v("删除")]):t._e(),t._v(" "),i("Button",{attrs:{size:"small"},on:{click:function(i){t.addMoviecol(e.id)}}},[t._v("收藏")])],1),t._v(" "),i("p",[i("b",[t._v("发行日期：")]),i("span",[t._v(t._s(t.$formatDate(e.release_time)))])]),t._v(" "),i("p",[i("b",[t._v("长度：")]),i("span",[t._v(t._s(e.length))])]),t._v(" "),e.director?i("p",[i("b",[t._v("导演：")]),i("span",{staticClass:"tag",on:{click:function(i){t.$router.push("/genre/"+e.director)}}},[t._v(t._s(e.director))])]):t._e(),t._v(" "),e.vender?i("p",[i("b",[t._v("制作商：")]),i("span",{staticClass:"tag",on:{click:function(i){t.$router.push("/vender/"+e.vender)}}},[t._v(t._s(e.vender))])]):t._e(),t._v(" "),e.studio?i("p",[i("b",[t._v("发行商：")]),i("span",{staticClass:"tag",on:{click:function(i){t.$router.push("/studio/"+e.studio)}}},[t._v(t._s(e.studio))])]):t._e(),t._v(" "),e.series?i("p",[i("b",[t._v("系列：")]),i("span",{staticClass:"tag",on:{click:function(i){t.$router.push("/series/"+e.series)}}},[t._v(t._s(e.series))])]):t._e(),t._v(" "),t._m(0,!0),t._v(" "),i("p",[t._l(t.setgenre(e.genre),function(e){return[i("span",{staticClass:"tag",staticStyle:{"margin-right":"10px"},on:{click:function(i){t.go_genre(e)}}},[t._v(t._s(e))])]})],2),t._v(" "),t._m(1,!0),t._v(" "),i("p",[t._l(t.setgenre(e.performer),function(e){return[i("span",{staticClass:"tag",staticStyle:{"margin-right":"10px"},on:{click:function(i){t.go_performer(e)},mouseenter:function(i){t.show_performer=e},mouseleave:function(e){t.show_performer=null}}},[t._v(t._s(e))]),t._v(" "),t.show_performer===e?i("div",{staticStyle:{position:"absolute",padding:"5px","background-color":"#ccc","border-radius":"5px"}},[i("div",{staticStyle:{width:"212px",overflow:"hidden"}},[i("img",{staticStyle:{height:"300px",float:"right"},attrs:{src:t.$global.server_ip+"/image/performer/"+e+".jpg?"+Math.random(),alt:""}})])]):t._e()]})],2)])]),t._v(" "),i("p",{staticClass:"class-title"},[t._v("磁力链接")]),t._v(" "),i("table",{staticClass:"link-table"},[i("tr",[t._l(t.link_title,function(e){return[i("th",{style:"width:"+e.width},[t._v("\n              "+t._s(e.label)+"\n            ")])]})],2),t._v(" "),t._l(t.links,function(e){return[i("tr",[i("td",[i("a",{attrs:{href:e.url}},[t._v("\n                "+t._s(e.name))])]),t._v(" "),i("td",[i("a",{attrs:{href:e.url}},[t._v(t._s(e.size))])]),t._v(" "),i("td",[i("a",{attrs:{href:e.url}},[t._v(t._s(t.$formatDate(e.share_date)))])])])]})],2),t._v(" "),i("div",{staticClass:"clear-float"},[i("p",{staticClass:"class-title"},[t._v("影片图像")]),t._v(" "),t._l(t.data_list,function(e){return i("div",{staticClass:"index-detail-item"},[i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.seturl(e.url),alt:e.name},on:{click:function(i){t.show_image(t.seturl(e.url))}}})])])})],2),t._v(" "),i("div",{staticClass:"clear-float"},[i("p",{staticClass:"class-title"},[t._v("同类影片")]),t._v(" "),t._l(t.other_data,function(e,s){return i("div",{staticClass:"performer-detail-item"},[i("div",{staticClass:"other-item-img",on:{click:function(i){t.show(e.title)}}},[i("div",{staticStyle:{overflow:"hidden"}},[i("img",{attrs:{src:t.seturl_genre(e.title),alt:e.title}})])]),t._v(" "),i("div",{staticClass:"item-text"},[e.info?i("div",{staticClass:"item-text-title"},[t._v(t._s(e.info))]):t._e(),t._v(" "),i("div",{staticClass:"item-text-name"},[t._v(t._s(e.title)+"/"+t._s(t.$formatDate(e.release_time))+"\n              "),i("Button",{attrs:{size:"small"},on:{click:function(i){t.addMoviecol(e.id)}}},[t._v("收藏")]),t._v(" "),"xiaoxin"===t.username?i("Button",{attrs:{size:"small"},on:{click:function(i){t.del(e.id,s)}}},[t._v("删除")]):t._e()],1)])])})],2),t._v(" "),i("div",{staticStyle:{"margin-bottom":"40px"}})])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("类别：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("演员：")])])}]};var _=i("VU/8")(c,u,!1,function(t){i("Zp0a")},"data-v-419755fd",null);e.default=_.exports}});
//# sourceMappingURL=11.0a16ee79cd2c28fea79d.js.map