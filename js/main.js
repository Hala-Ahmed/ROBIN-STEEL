






$(".icontop").fadeOut(500)

let sectiontop =$("#About").offset().top
$(window).scroll(function(){
     let scrollTop = $(window).scrollTop()
    if(scrollTop > sectiontop){
        $(".hala").addClass("bg-info")
        $(".icontop").fadeIn(500)
    }else{
        $(".hala").removeClass("bg-info")
        $(".icontop").fadeOut(500)

    }
})


$(".nav-link").click(function(){
    $(this).addClass("active")
   $(".nav-link").parent().siblings().children().removeClass("active");
})


$(".nav-link").click(function(){
    let sechref = $(this).attr("href")
    let sectop = $(sechref).offset().top
    $("html,body").animate({scrollTop:sectop},{ duration :1000, queue:false})
 })
 

 $(".icontop").click(function(){
    $("html,body").animate({scrollTop:"0px"},1000)

 })

$(".setting .icon").click(function(){

let left =$(".setting").css("left")
if(left =="0px"){
    let width = $(".setting-inner").outerWidth(true)

$(".setting ").animate({ left:`-${width}px`},1000)
} 
else{
    // let width = $(".setting-inner").outerWidth(true)

$(".setting ").animate({ left:`0px`},1000)
}

})



let width = $(".setting-inner").outerWidth(true)

$(".setting ").css({ left:`-${width}px`})


$(".box").click(function(){
let color= $(this).css("background-color")
$(":root").css("--mainColor",color)
})
     



$(".boxbg img").click(function(){
  let imgpath= $(this).attr("src") 
  $("#Home").css("background-image" ,`url(${imgpath})`)
 
})
 $(document).ready(function(){
    $(".landing").fadeOut(3000)
 })