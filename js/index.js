/**
 * Created by flyin on 2018/7/3.
 */

$(function () {

  //1.页面一加载,请求ajax,渲染导航模块
  $.ajax({
    url: 'http://192.168.16.88:9090/api/getindexmenu',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.mmm_nav ul').html( template('navTmp',info) );
    }
  })

  //2.事件委托,点击更多的a标签,设置最后四个li标签显示隐藏
  $('.mmm_nav ul').on('click','li:nth-child(8) a',function () {
    var lis = $('.mmm_nav ul li:nth-last-child(-n+4)');
    lis.each(function (index,ele) {
      $(ele).toggleClass('hide');
    })
  })

  //3.页面一加载,请求后台,渲染超值折扣推荐
  $.ajax({
    url: 'http://192.168.16.88:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.product_content ul').html( template('cmdTmp',info) );
    }
  })


})