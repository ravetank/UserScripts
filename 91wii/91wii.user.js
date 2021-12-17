// ==UserScript==
// @name         91wii
// @namespace    hoothin
// @version      0.1
// @description  91wii签到
// @author       hoothin
// @match        https://*.91wii.com/*
// @match        https://*.91tvg.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    var formula = document.querySelector("b"),dcsignin = document.querySelector("#dcsignin_tips");
    if(formula && /^[\d\s\+-=?]+$/.test(formula.innerText.trim())){
        setTimeout(function(){
            document.querySelector("input[type=text]").value=eval(formula.innerText.match(/[\d\s\+-]+/)[0]);
            document.querySelector("input[type=submit]").click();
        },10);
    }else if(dcsignin){
        if(dcsignin.style.background.indexOf("signin_yes") != -1)return;
        unsafeWindow.showWindow('sign', 'plugin.php?id=dc_signin:sign')
        let signInterval=setInterval(()=>{
            let emotIndex=parseInt(Math.random() * 10) + 1;
            if(document.querySelector("#emot_" + emotIndex)){
                document.querySelector("#emot_" + emotIndex).click();
                //document.querySelector('#content').value = '君子有四时，朝以听政，昼以访问，夕以修令，夜以安身。';
                document.querySelector("button[name=signpn]").click();
                unsafeWindow.hideWindow('sign');
            }
        }, 300);
    }
})();