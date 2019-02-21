$(document).ready(function(){    
    var intv = setInterval(function(){ nextAni(); },4900);
    
    function nextAni() {
        $(".vsSlied").not(":animated").animate({"margin-left":"-760px"}, 1000, function(){
        $(".vsSlied li").eq(0).appendTo($(".vsSlied"));
        $(".vsSlied").css("margin-left","0px");
        });
    }
    function prevAni() {
        $(".vsSlied li").eq(4).prependTo($(".vsSlied"));
        $(".vsSlied").css("margin-left", "-760px");
        $(".vsSlied").not(":animated").animate({"margin-left":"0px"}, 1000);
        }
        $(".rightBtn").click(function(){
            clearInterval(intv);
            nextAni();
            intv = setInterval(function(){ nextAni(); }, 4900);
        });
        $(".leftBtn").click(function(){
            clearInterval();
            prevAni();
            intv = setInterval(function(){ nextAni(); }, 4900);
        });

});