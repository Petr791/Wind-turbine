// Создание изображений webp=========================

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}


testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


// Набор кнопок соцсетей https://uptolike.ru/===================================

(function(w, doc) {
    if (!w.__utlWdgt) {
        w.__utlWdgt = true;
        var d = doc,
            s = d.createElement('script'),
            g = 'getElementsByTagName';
        s.type = 'text/javascript';
        s.charset = 'UTF-8';
        s.async = true;
        s.src = ('https:' == w.location.protocol ? 'https' : 'http') + '://w.uptolike.com/widgets/v1/uptolike.js';
        var h = d[g]('body')[0];
        h.appendChild(s);
    }
})(window, document);


//MENU======================================
$(function() {

    let nav = $("#menu");
    let navToggle = $("#navToggle");


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })
});
//SPOILER=========================================