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
    if (maincontent.classList.contains('topright')){
        maincontent.classList.remove('topright');
        marginsplit.classList.remove('marginsplit2')
    } else {
        maincontent.classList.add('topright');
        marginsplit.classList.add('marginsplit2')
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
    tooltip.classList.add('tooltip')
    tooltip.classList.add('tooltip'+classsuffix)
    var tooltiptext = document.createElement('span')
    tooltiptext.classList.add('tooltiptext')
    tooltiptext.classList.add('tooltiptext'+classsuffix)
    tooltiptext.innerText = text
    tooltip.appendChild(tooltiptext)
    element.parentNode.insertBefore(tooltip,element)
    tooltip.appendChild(element)
}

function locktooltip(elementID, endcondition=true) {
    var element = document.getElementById(elementID)
    var tooltip = element.parentNode
    tooltiptext = tooltip.children[0]
    tooltiptext.classList.add('locktooltipon')
    if (endcondition == true){
        tooltip.onmouseover = function(){tooltiptext.classList.remove('locktooltipon')};
    }
}

function firsttime() {
    addtooltip('adddestiny','Click here to begin by adding your first destiny point!')
    locktooltip('adddestiny')
}
