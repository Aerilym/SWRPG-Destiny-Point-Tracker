// For running the tool and tool related backend functions -- Created by Ryan Miller https://aerilym.github.io/

function changeimage(type,path) {
    var darksrc = document.getElementById('darksrc')
    var lightsrc = document.getElementById('lightsrc')
    if (type == 'dark') {
        darksrc.innerText = path      
    } else if (type == 'light') {
        lightsrc.innerText = path
    }
    updatesrcs()
}

function updatesrcs() {
    var darksrc = document.getElementById('darksrc').innerText
    var lightsrc = document.getElementById('lightsrc').innerText
    var tokens = document.getElementsByClassName('destinysvg')
    var numtokens = tokens.length
    for (var i = 0; i < numtokens; i++) {
        if (tokens[i].classList.contains('lighttoken')){
            tokens[i].src = lightsrc
        } else if (tokens[i].classList.contains('darktoken')){
            tokens[i].src = darksrc
        }
    }
    var counterimgs = document.getElementsByClassName('counterimg')
    console.log(counterimgs)
    var counternum = counterimgs.length
    for (var i = 0; i < counternum; i++) {
        if (counterimgs[i].classList.contains('lightbg')){
            counterimgs[i].style.backgroundImage = 'url("'+lightsrc+'")'
        } else if (counterimgs[i].classList.contains('darkbg')){
            counterimgs[i].style.backgroundImage = 'url("'+darksrc+'")'
        }
    }
}

function update_counter(counter, action){
    var darkcounter = document.getElementById('darkcounter')
    var lightcounter = document.getElementById('lightcounter')
    if (action == '+'){
        change = 1
    } else if (action == '-'){
        if (lightcounter.innerText == 0 && counter == 'light'){
            change = 0
        } else if (darkcounter.innerText == 0 && counter == 'dark'){
            change = 0
        } else {
            change = -1
        }
    }
    if (counter == 'light'){
        count = parseInt(lightcounter.innerText) + change
        lightcounter.innerText = count
    } else if (counter == 'dark'){
        count = parseInt(darkcounter.innerText) + change
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
    var darksrc = document.getElementById('darksrc').innerText
    var lightsrc = document.getElementById('lightsrc').innerText
    var darkfilename = darksrc.slice(-12)
    var lightfilename = lightsrc.slice(-12)
    var destinypoint = document.getElementById(destinyID)
    imgname = destinypoint.src.slice(-12)
    console.log(imgname)
    if (imgname == darkfilename){
        destinypoint.src = lightsrc
        destinypoint.classList.remove('darktoken')
        destinypoint.classList.add('lighttoken')
        update_counter('dark', '+')
        update_number('dark', '-')
        update_number('light', '+')
    } else if (imgname == lightfilename) {
        destinypoint.src = darksrc
        destinypoint.classList.remove('lighttoken')
        destinypoint.classList.add('darktoken')
        update_counter('light', '+')
        update_number('dark', '+')
        update_number('light', '-')
    }
}

function add_destiny(){
    var darksrc = document.getElementById('darksrc').innerText
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
    destinyimage.classList.add('destinysvg')
    destinyimage.classList.add('darktoken')
    destinypoint.appendChild(destinyimage)
    destinyimage.src = darksrc
    var destinytray = document.getElementById('destinytray')
    destinytray.appendChild(destinypoint)
    update_number('dark', '+')
    destinycontrolhandle();
}

function remove_destiny(){
    var darksrc = document.getElementById('darksrc').innerText
    var lightsrc = document.getElementById('lightsrc').innerText
    var darkfilename = darksrc.slice(-12)
    var lightfilename = lightsrc.slice(-12)
    if (!haslight() && !hasdark()) {
        return false        
    }
    var destinytray = document.getElementById('destinytray')
    if (destinytray.lastChild.className != 'counterheading'){
        console.log(destinytray.lastChild.firstChild.src)
        if (destinytray.lastChild.firstChild.src.slice(-12) == darkfilename){
            update_number('dark', '-')
        } else if (destinytray.lastChild.firstChild.src.slice(-12) == lightfilename){
            update_number('light', '-')
        }
        destinytray.removeChild(destinytray.lastChild);
    }
    var numpoints = document.getElementsByClassName('destinypoint').length
    if (numpoints == 0){
        togglehide('destinypointsheading','flex')
    }
    destinycontrolhandle();
}

function flip(goal) {
    var darksrc = document.getElementById('darksrc').innerText
    var lightsrc = document.getElementById('lightsrc').innerText
    var darkfilename = darksrc.slice(-12)
    var lightfilename = lightsrc.slice(-12)
    var darkcount = parseInt(document.getElementById('darknumber').innerText)
    var lightcount = parseInt(document.getElementById('lightnumber').innerText)
    var destinytray = document.getElementById('destinytray')
    var tokencount = darkcount + lightcount
    const tokens = destinytray.children
    if (goal == 'dark'){
        if (lightcount == 0){
            destinycontrolhandle();
            return false
        }
        let i = tokencount
        while (i >= 0) {
            srcslice = tokens[i].firstChild.src.slice(-12)
            tokenID = tokens[i].firstChild.id
            if (srcslice == lightfilename){
                change_destiny(tokenID)
                destinycontrolhandle();
                return false
            }
            i--;
          }
    } else if (goal == 'light'){
        if (darkcount == 0){
            destinycontrolhandle();
            return false
        }
        let i = 1
        while (i <= tokencount) {
            srcslice = tokens[i].firstChild.src.slice(-12)
            tokenID = tokens[i].firstChild.id
            if (srcslice == darkfilename){
                change_destiny(tokenID)
                destinycontrolhandle();
                return false
            }
            i++;
          }
    }
}

function flippos(elementID) {
    var maincontent = document.getElementById('maincontent')
    var element = document.getElementById(elementID)
    maincontent.appendChild(element)
}

function haslight() {
    var lightcount = parseInt(document.getElementById('lightnumber').innerText)
    if (lightcount>0) {
        return true
    }
}

function hasdark() {
    var darkcount = parseInt(document.getElementById('darknumber').innerText)
    if (darkcount>0) {
        return true
    }
}

function customtokenlight(event) {
	var image = document.getElementById('customlighttoken');
    var customlighttokenlabel = document.getElementById('customlighttokenlabel')
    var placeholdercustomlight = document.getElementById('placeholdercustomlight')
    customlighttokenlabel.innerText = 'Upload New Image'
    placeholdercustomlight.style.display = 'none'
    path = URL.createObjectURL(event.target.files[0]);
	image.src = path
    image.parentNode.onclick = function(){changeimage('light',path)};
    image.parentNode.style.display = 'block'
    changeimage('light',path)
}

function customtokendark(event) {
	var image = document.getElementById('customdarktoken');
    var customdarktokenlabel = document.getElementById('customdarktokenlabel')
    var placeholdercustomdark = document.getElementById('placeholdercustomdark')
    customdarktokenlabel.innerText = 'Upload New Image'
    placeholdercustomdark.style.display = 'none'
    path = URL.createObjectURL(event.target.files[0]);
	image.src = path
    image.parentNode.onclick = function(){changeimage('dark',path)};
    image.parentNode.style.display = 'block'
    changeimage('dark',path)
}

function customtokenurllight() {
    var path = document.getElementById('tokenurllight2').value
    var image = document.getElementById('customlighttokenurl');
    image.src = path
    image.parentNode.onclick = function(){changeimage('light',path)};
    image.parentNode.style.display = 'block'
    changeimage('light',path)
}