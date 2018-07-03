/**
 * Created by flyin on 2018/7/3.
 */

$(function() {

  //1.调用函数,获取地址栏参数

  var cateUrl = getSearch();
  var categoryid = cateUrl.categoryid;
  //console.log(categoryid);

  $.ajax({
    url: 'http://192.168.16.88:9090/api/getcategorybyid',
    data: {
      categoryid: categoryid
    },
    dataType: 'json',
    success: function(info) {
      //console.log(info);
      //2.将分类关键字设置给对应的a标签
      $('.category').text(info.result[0].category);
    }
  })



  //3.发送ajax请求,根据id渲染产品第一屏
  render();
  //渲染产品函数封装
  function render(pageid) {
    var pageid = pageid || 1;
    $.ajax({
      url: 'http://192.168.16.88:9090/api/getproductlist',
      data: {
        categoryid: categoryid,
        pageid: pageid || 1
      },
      dataType: 'json',
      success: function (info){
        console.log(info);
        //console.log(pageid);
        $('.product_content ul').html( template('cateTmp',info) );
        $('#cateSel').html( template('selTmp',info) );

        $('#cateSel option:nth-child('+ pageid +')').prop('selected',true);

      }
    })
  }



  var selData = 1;

  //4.点击下一页,获取页码,发送ajax
  $('.next').click(function() {
    selData ++;
    //判断
    if( selData > 3 ) {
      selData = 3;
    }
    render(selData);
  })

  //5.点击上一页,获取页码,发送ajax
  $('.prev').click(function() {
    selData --;
    if( selData < 1 ) {
      selData = 1;
    }
    render(selData);

  })

    //6.点击选项option,根据值渲染不同的页面
  $('#cateSel').on('change',function() {
    selData = $(this).val();
    render(selData);
  });



})