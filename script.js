// user interface logic
$(document).ready(function(){
 $('#design').on('click', function(){

     $('#design_info').toggle();

 });


 $('#development').on('click', function(){
    $('#dev_info').toggle();

 });


 $('#product').on('click' , function(){
     $('#product_info').toggle();
 });


 $('#btn').on('click' , function(){
     $('#feedback').toggle()
 });

});
$(document).ready(function(){
    $('#project').hover(function(){
        $('this').css("background-color" , "#c4c4c4")
    });
})