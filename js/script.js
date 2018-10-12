$(document).ready(function(){
    $("#myCarousel").carousel({ interval: 1000 });
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa fa-pause')){
            $("#myCarousel").carousel('pause');
            $("#carouselButton").children('span').removeClass('fa fa-pause');
            $("#carouselButton").children('span').addClass('fa fa-play');
        }else if($("#carouselButton").children('span').hasClass('fa fa-play')){
            $("#myCarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa fa-play');
            $("#carouselButton").children('span').addClass('fa fa-pause');                 
        }
    });        
    $("#btnModal").click(function(){
        $("modal").modal("toggle");
        $("#reserveModal").modal("show");
    });
    $("#btnLogin").click(function(){
        $("modal").modal("toggle");
        $("#loginModal").modal("show");
    });
});