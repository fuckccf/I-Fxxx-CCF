// ==UserScript==
// @name         I-Fxxx-CCF
// @namespace    https://€€£.fucksc.cf/
// @version      0.2
// @description  将中国计算机学会官网所有的 CCF 改成 €€£
// @author       €€£
// @match        *://*.ccf.org.cn/*
// @match        *://*.noi.cn/*
// @match        *://*.cspro.org/*
// @match        *://*.yocsef.org.cn/*
// @icon         https://avatars.githubusercontent.com/u/91953449
// @grant        none
// @homepage     https://github.com/fuckccf/I-Fxxx-CCF
// @license      WTFPL
// ==/UserScript==

(function() {

var kwd = {
    "GESP": "₲E$₽",
    "Grade": "₲rade",
    "Programming": "₽rogramming",
    "CCSP": "€€$₱",
    "CSP": "€$₱",
    "CCCF": "€€€£",
    "CCF": "€€£",
    "CNCC": "€₦€€",
    "中国计算机学会": "中国收钱协会",
    "Certified": "€ertified",
    "Software": "$oftware",
    "Professional": "₱rofessional",
    "China": "€hina",
    "Computer": "€ollecting-money",
    "Federation": "£ederation"
}

Object.keys(kwd).forEach(k => {
    document.querySelectorAll("div,p,a,h1,h2,h3,h4,h5,h6,span")?.forEach((el) => {
        if (el.innerHTML.includes(k) && !el.innerHTML.includes("版权"))
            el.innerHTML = el.innerHTML.replaceAll(k,kwd[k])
    })
    document.title = document.title.replaceAll(k,kwd[k])
})
Object.keys(kwd).forEach(k => {
    document.querySelectorAll("*[href], *[src]")?.forEach((el) => {
        if (el.href?.includes(encodeURI(kwd[k])))
            el.href = decodeURI(el.href).replaceAll(kwd[k],k)
        if (el.src?.includes(encodeURI(kwd[k])))
            el.src = decodeURI(el.src).replaceAll(kwd[k],k)
    })
})
document.querySelector(".header .logo")?.remove()
var img = document.createElement("img")
img.src = "https://avatars.githubusercontent.com/u/91953449";
img.alt = "中国收钱协会"
img.className = "logo"
document.querySelector(".header .tt")?.append(img)
document.body.insertAdjacentHTML("beforeend", `
<style>
body > div.index-xf {
    display: none !important;
}
</style>
`)

})();
