// For front end website functions -- Created by Ryan Miller https://aerilym.github.io/
let version = '1.2.0';


function togglehide(item, basedisplay) {
    var x = document.getElementById(item);
    if (x.style.display === "none") {
    x.style.display = basedisplay;
    } else {
    x.style.display = "none";
    }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

function darkmodetoggle() {
    document.body.classList.toggle("darkmode");
    var myCookie = getCookie("darkmodepref");
    if (myCookie.includes('False')){
      document.cookie = "darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    } else if (myCookie.includes('True')){
      document.cookie = "darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    }
    }

function checkdarkpref(){
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var myCookie = getCookie("darkmodepref");
    if (myCookie == null){
        if (prefersDarkScheme.matches) {
                document.cookie = "darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC";
                document.body.classList.toggle("darkmode");
        }
    } else if (myCookie.includes('True')){
        document.body.classList.toggle("darkmode");
    } else {
        document.cookie = "darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    }
}

function eyemover(position){
    var eye = document.getElementById('settingsbuttons')
    if (position == 'tl'){
        eye.className = 'topleft'
    } else if (position == 'tr'){
        eye.className = 'topright'
    } else if (position == 'bl'){
        eye.className = 'bottomleft'
    } else if (position == 'br'){
        eye.className = 'bottomright'
    } else {
        eye.className = ''
    }
}

function deleteeye(source){
    var hideeyebutton = document.getElementById('settingsbuttons')
    if (source != 'key'){
        if (hideeyebutton.style.display == 'none'){
            var answer = true
        } else {
            var answer = window.confirm("Are you sure? This will hide the eye & settings buttons. You will only be able to use the hotkey to hide and unhide the buttons and information (SHIFT+H). You can unhide them with (SHIFT+E)");
        }
        if (answer) {
            togglehide('settingsbuttons','inline-flex')
            eyemover('')
        }
        else {
            console.log('no')
        }
    } else {
        togglehide('settingsbuttons','inline-flex')
        eyemover('')
    }
}

function rightalign() {
    var maincontent = document.getElementById('maincontent')
    var marginsplit = document.getElementById('marginsplit')
    var alignbutton = document.getElementById('alignrightbutton')
    if (maincontent.classList.contains('topright')){
        maincontent.classList.remove('topright');
        marginsplit.classList.remove('marginsplit2')
        alignbutton.innerText = 'Align Right'
    } else {
        maincontent.classList.add('topright');
        marginsplit.classList.add('marginsplit2')
        alignbutton.innerText = 'Align Left'
    }
}

function altkeybinds() {
    var altscript = document.getElementById('altscript')
    var altscriptunbind = document.getElementById('altscriptunbind')
    var altkeybindbutton = document.getElementById('altkeybindbutton')
    if (altscriptunbind){
        altscriptunbind.remove()
        var altscript = document.createElement("div");
        altscript.id = 'altscript'
        document.body.append(altscript)
        bindnonshift()
        altkeybindbutton.classList.remove('buttong')
        altkeybindbutton.classList.add('buttonr')
        altkeybindbutton.innerText = 'Disable non-shift keybinds'
    } else {
        altscript.remove()
        var altscriptunbind = document.createElement("div");
        altscriptunbind.id = 'altscriptunbind'
        document.body.append(altscriptunbind)
        unbindnonshift()
        altkeybindbutton.classList.remove('buttonr')
        altkeybindbutton.classList.add('buttong')
        altkeybindbutton.innerText = 'Enable non-shift keybinds'
    }
    
}

function userstate() {
    var vercookie = getCookie("userversion");
    if (vercookie == null){
        firsttime()
    } else {
        addtooltip('tutorialbutton','Begins a tooltip based walkthrough tutorial!','right')
        var userversion = vercookie
        if (isoldversion(userversion)){
            newfeatures(userversion)
        }
    }
    document.cookie = "userversion=" + version +"; expires=Thu, 18 Dec 2030 12:00:00 UTC";
}

function isoldversion(userversion) {
    var uv = userversion.split('.')
    var sv = version.split('.')
    if (uv[0]<sv[0]){
        return true
    } else if (uv[1]<sv[1]){
        return true
    } else if (uv[2]<sv[2]){
        return true
    } else {
        return false
    }
}

function newfeatures(userversion) {
    alert('Update: Keybinds can be customised and changed by clicking the bind.')
}

function firsttime() {
    tutorialtooltip('adddestiny','Click here to begin by adding your first destiny point!','right',function(){
        tutorialtooltip('hidebutton','You can hide all the buttons by clicking the eye!','right',function(){
            tutorialtooltip('hidebutton','Click it again to show the buttons!','right',function(){
                addtooltip('tutorialbutton','You can click here to begin a short walkthrough tutorial if you want to learn about the tool and how to use it. Otherwise, have fun!','right')
                locktooltip('tutorialbutton','onmouseover')
                var element = document.getElementById('tutorialbutton')
                var tooltip = element.parentNode
                tooltip.onclick = function(){removetooltip('tutorialbutton');addtooltip('tutorialbutton','Begins a tooltip based walkthrough tutorial!','right');};
            }
            )
        }
        )
    }
    )
}

function destinycontrolhandle() {
    var adddestiny = document.getElementById('adddestiny')
    var removedestiny = document.getElementById('removedestiny')
    var fliplight = document.getElementById('fliplight')
    var flipdark = document.getElementById('flipdark')
    var destinytray = document.getElementById('destinytray')
    if (hasdark() || haslight()){
        if (removedestiny.classList.contains('hideitem')) {
            removedestiny.classList.remove('hideitem')
        }
    } else {
        if (!removedestiny.classList.contains('hideitem')) {
            removedestiny.classList.add('hideitem')
        }
    }

    if (hasdark()) {
        if (fliplight.classList.contains('hideitem')) {
            fliplight.classList.remove('hideitem')
        }
    } else {
        if (!fliplight.classList.contains('hideitem')) {
            fliplight.classList.add('hideitem')
        }
    }
    
    if (haslight()) {
        if (flipdark.classList.contains('hideitem')) {
            flipdark.classList.remove('hideitem')
        }
    } else {
        if (!flipdark.classList.contains('hideitem')) {
            flipdark.classList.add('hideitem')
        }
    }
    var alignrightbutton = document.getElementById('alignrightbutton')
    if (destinytray.clientHeight>400) {
        alignrightbutton.onclick = function(){};
        alignrightbutton.classList.add('disabledbutton')
        var maincontent = document.getElementById('maincontent')
        var marginsplit = document.getElementById('marginsplit')
        var alignrightbutton = document.getElementById('alignrightbutton')
        if (maincontent.classList.contains('topright')){
            maincontent.classList.remove('topright');
            marginsplit.classList.remove('marginsplit2')
            alignrightbutton.innerText = 'Align Right'
        }
    } else {
        alignrightbutton.onclick = function(){rightalign()};
        alignrightbutton.classList.remove('disabledbutton')
    }
}

function startup() {
    addtooltip('toggletooltipbutotn','Toggles information tooltips like this on all elements!','right')
}

function clickID(itemid) {
    document.getElementById(itemid).click();
  }