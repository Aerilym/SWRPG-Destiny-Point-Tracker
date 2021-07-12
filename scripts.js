function update_counter(counter){
    var darkcounter = document.getElementById('darkcounter')
    var lightcounter = document.getElementById('lightcounter')
    if (counter == 'light'){
        count = parseInt(lightcounter.innerText) + 1
        lightcounter.innerText = count
    } else if (counter == 'dark'){
        count = parseInt(darkcounter.innerText) + 1
        darkcounter.innerText = count
    } else if (counter == 'reset'){
        darkcounter.innerText = 0
        lightcounter.innerText = 0
    }
}

function update_number(counter, action){
    var darknum = document.getElementById('darknumber')
    var lightnum = document.getElementById('lightnumber')
    if (action == '+'){
        change = 1
    } else if (action == '-'){
        change = -1
    }
    if (counter == 'light'){
        count = parseInt(lightnum.innerText) + change
        lightnum.innerText = count
    } else if (counter == 'dark'){
        count = parseInt(darknum.innerText) + change
        darknum.innerText = count
    }
}

function change_destiny(destinyID){
    var destinypoint = document.getElementById(destinyID)
    imgname = destinypoint.src.slice(-9)
    console.log(imgname)
    if (imgname == 'dark0.svg'){
        destinypoint.src = 'images/light.svg'
        update_counter('dark')
        update_number('dark', '-')
        update_number('light', '+')
    } else if (imgname == 'light.svg') {
        destinypoint.src = 'images/dark0.svg'
        update_counter('light')
        update_number('dark', '+')
        update_number('light', '-')
    }
}

function add_destiny(){
    var numpoints = document.getElementsByClassName('destinypoint').length
    if (numpoints == 0){
        togglehide('destinypointsheading','flex')
    }
    var destinypoint = document.createElement("a")
    destinypoint.href = '#'
    destinypoint.className = 'destinypoint'
    destinypoint.onclick = function() {change_destiny('destiny' + numpoints)}
    var destinyimage = document.createElement("img")
    destinyimage.id = 'destiny' + numpoints
    destinyimage.className = 'destinysvg'
    destinypoint.appendChild(destinyimage)
    destinyimage.src = 'images/dark0.svg'
    var destinytray = document.getElementById('destinytray')
    destinytray.appendChild(destinypoint)
    update_number('dark', '+')
}

function remove_destiny(){
    var destinytray = document.getElementById('destinytray')
    if (destinytray.lastChild.className != 'counterheading'){
        if (destinytray.lastChild.firstChild.src.slice(-9) == 'images/dark0.svg'){
            update_number('dark','-')
        } else if (destinytray.lastChild.firstChild.src.slice(-9) == 'images/light.svg'){
            update_number('light','-')
        }
        destinytray.removeChild(destinytray.lastChild);
    }
    var numpoints = document.getElementsByClassName('destinypoint').length
    if (numpoints == 0){
        togglehide('destinypointsheading','flex')
    }

}
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