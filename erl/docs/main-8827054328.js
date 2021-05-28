"use strict"

!function(){
    function e() {
        let e = this.value,
            h = document.location.host,
            d = this.dataset.defaultlang,
            t = this.dataset.canonical;
        if(d === e)
        {
            location.href = '//' + h + t;
        }else
        {
            location.href = '//' + h + "/" + e + t;
        }
    }
    document.getElementById("lang-select").addEventListener("change", e)
    document.getElementById("mobile-lang-select").addEventListener("change", e)
}()

!function(){
    function e() {
        let e = document.scrollingElement.scrollTop;
        e > i ? n.classList.add("fixed") : n.classList.remove("fixed")
    }
    let t = document.getElementById("header"),
        n = document.getElementById("article-toc"),
        c = document.getElementById("article-toc-top"),
        i = t.clientHeight;
    n && (window.addEventListener("scroll", function() {
        window.requestAnimationFrame(e)
    }), e(), c.addEventListener("click", function(e) {
        e.preventDefault(), document.scrollingElement.scrollTop = 0
    }))
}()

!function(){
    let e = document.getElementsByTagName("body")[0],
        t = document.getElementById("mobile-nav-toggle"),
        n = document.getElementById("mobile-nav-dimmer"),
        c = "mobile-nav-on";
    t && (t.addEventListener("click", function(t) {
        t.preventDefault(), t.stopPropagation(), e.classList.toggle(c)
    }), n.addEventListener("click", function(t) {
        e.classList.contains(c) && (t.preventDefault(), e.classList.remove(c))
    }))
}()
