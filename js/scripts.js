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
    var myCookie = getCookie("darkmodepref");
    if (myCookie.includes('False')){
      document.cookie = "darkmodepref=True; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    } else if (myCookie.includes('True')){
      document.cookie = "darkmodepref=False; expires=Thu, 18 Dec 2030 12:00:00 UTC";
    }
    document.body.classList.toggle("darkmode");
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
    if (source != 'key'){
        var answer = window.confirm("Are you sure? This will hide the eye button. You will only be able to use the hotkey to hide and unhide the buttons and information (SHIFT+H)");
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
    if (altscriptunbind){
        altscriptunbind.remove()
        var altscript = document.createElement("div");
        altscript.id = 'altscript'
        document.body.append(altscript)
        bindnonshift()
    } else {
        altscript.remove()
        var altscriptunbind = document.createElement("div");
        altscriptunbind.id = 'altscriptunbind'
        document.body.append(altscriptunbind)
        unbindnonshift()
    }
    
}