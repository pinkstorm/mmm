/**
 * Created by flyin on 2018/7/3.
 */

$(function() {

  $('.toTop').click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop:0});
  })


})


function getSearch( ) {
  var search = location.search;
  // 对中文解码, 得到 ?name=pp&age=18&desc=帅
  search = decodeURI( search );
  // 去掉问号, 得到 name=pp&age=18&desc=帅
  search = search.slice( 1 );

  var arr = search.split("&");  // 得到 ["name=pp", "age=18", "desc=帅"]
  var obj = {};
  arr.forEach(function( v, i ) {
    var key = v.split("=")[0];  // name
    var value = v.split("=")[1]; // pp
    obj[ key ] = value;
  });
  return obj;
}
