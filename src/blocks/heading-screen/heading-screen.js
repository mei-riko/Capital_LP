window.onload = function () {
    var currentScroll = 0;
    var body = document.querySelector("body");
    var figure_one = document.querySelector(".figure_one");
    var figures = document.querySelectorAll(".figure");
    var title = document.querySelector(".heading-screen__title");
    var isAnimation = false;
    
    window.addEventListener('scroll', function (e) {
        console.log( title.offsetTop );
        var newPosTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (newPosTop >= 30 && !isAnimation) {
            isAnimation = true
            figure_one.setAttribute('transform', 'translate(0,195)');
            setTimeout(function () {
                for (var i = 0; i < figures.length; i++) {
                    figures[i].classList.add("color")
                }
            }, 300)
        } else if(newPosTop ==0 && isAnimation) {
            isAnimation = false;
            for (var i = 0; i < figures.length; i++) {
                figures[i].classList.remove("color")
            }
                figure_one.setAttribute('transform', 'translate(0,0)');
        }
    })
}