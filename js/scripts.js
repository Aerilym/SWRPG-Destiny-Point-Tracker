let version = '1.0.1';


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
    var eye = document.getElementById('hidebutton')
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
    var hideeyebutton = document.getElementById('hideeyebutton')
    if (source != 'key'){
        if (document.getElementById('hidebutton').style.display == 'none'){
            hideeyebutton.innerText = 'Hide Eye Button'
            var answer = true
        } else {
            hideeyebutton.innerText = 'Show Eye Button'
            var answer = window.confirm("Are you sure? This will hide the eye button. You will only be able to use the hotkey to hide and unhide the buttons and information (SHIFT+H)");
        }
        if (answer) {
            togglehide('hidebutton','block')
            eyemover('')
        }
        else {
            console.log('no')
        }
    } else {
        togglehide('hidebutton','block')
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

function addtooltip(elementID,text='placeholder',location='top') {
    if (location == 'bottom'){
        classsuffix = 'bottom'
    } else if (location == 'left'){
        classsuffix = 'left'
    } else if (location == 'right'){
        classsuffix = 'right'
    } else {
        classsuffix = 'top'
    }
    var element = document.getElementById(elementID)
    var tooltip = document.createElement('div')

    if (element.parentNode.classList.contains('tooltip') && !element.parentNode.classList.contains('tutorialtip')) {
        removetooltip(elementID)
    }

    tooltip.classList.add('tooltip')
    tooltip.classList.add('tooltip'+classsuffix)
    var tooltiptext = document.createElement('span')
    tooltiptext.classList.add('tooltiptext')
    tooltiptext.classList.add('tooltiptext'+classsuffix)
    if (text.length>64){
        tooltiptext.classList.add('tooltiptextwide')
    }
    tooltiptext.innerText = text
    tooltip.appendChild(tooltiptext)
    element.parentNode.insertBefore(tooltip,element)
    tooltip.appendChild(element)
}

function removetooltip(ele,by='id') {
    if (by == 'id') {
        var element = document.getElementById(ele)
        var tooltip = element.parentNode
    } else if (by = 'item') {
        var element = ele.lastChild
        var tooltip = ele
    }
    tooltip.parentNode.insertBefore(element,tooltip)
    tooltip.remove()
}


function locktooltip(elementID, endcondition='onmouseover') {
    var element = document.getElementById(elementID)
    var tooltip = element.parentNode
    tooltiptext = tooltip.children[0]
    tooltiptext.classList.add('locktooltipon')
    if (endcondition == 'onmouseover'){
        tooltip.onmouseover = function(){tooltiptext.classList.remove('locktooltipon')};
    } else if (endcondition == 'onclick'){
        tooltip.onclick = function(){tooltiptext.classList.remove('locktooltipon')};
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
            console.log(newfeatures(userversion))
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
    return 'will find new features and inform user'
}

function firsttime() {
    tutorialtooltip('adddestiny','Click here to begin by adding your first destiny point!','right',function(){
        addtooltip('tutorialbutton','You can click here to begin a short walkthrough tutorial if you want to learn about the tool and how to use it. Otherwise, have fun!','right')
        locktooltip('tutorialbutton','onmouseover')
        var element = document.getElementById('tutorialbutton')
        var tooltip = element.parentNode
        tooltip.onclick = function(){removetooltip('tutorialbutton');addtooltip('tutorialbutton','Begins a tooltip based walkthrough tutorial!','right');};
    }
    )
}

function destinycontrolhandle() {
    var adddestiny = document.getElementById('adddestiny')
    var removedestiny = document.getElementById('removedestiny')
    var fliplight = document.getElementById('fliplight')
    var flipdark = document.getElementById('flipdark')
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
}

function startup() {
    addtooltip('toggletooltipbutotn','Toggles information tooltips like this on all elements!','right')
}