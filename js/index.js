document.querySelector('#manu_bar').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
});


$(document).ready(function(){
    let stickyNavTop = $('.man_nav').offset().top;

    console.log(stickyNavTop);

    function stickyNav () {
        let scrollTop = $(window).scrollTop();

        if(scrollTop > stickyNavTop){
            $('.man_nav').addClass('sticky');
        }
        else{
            $('.man_nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function(){
        stickyNav();
    });
});