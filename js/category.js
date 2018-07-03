/**
 * Created by flyin on 2018/7/3.
 */

$(function () {

  //1.请求后台,渲染分类页大li
  $.ajax({
    url: 'http://192.168.16.88:9090/api/getcategorytitle',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      $('.cate_title').html( template('titleTmp',info) );
    }
  })

  //2.事件委托给a标签绑定点击事件
  $('.cate_title').on('click','.title',function(){
    //获取存储的titleId
    var titleId = $(this).data('titleid');
    console.log(titleId);
    //2.1.请求后台,渲染分类页分类列表
    $.ajax({
      url: 'http://192.168.16.88:9090/api/getcategory',
      data: {
        titleid: titleId
      },
      dataType: 'json',
      success: function(info) {
        console.log(info);
        $('.cate_list[data-titleid="'+ titleId +'"]').html( template('listTmp',info) );
        //2.2 点击a标签,切换下面小li的ul的类
        $('.cate_list[data-titleid="'+ titleId +'"]').toggleClass('hide');
      }
    })

  })






})