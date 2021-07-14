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
    var destinypoint = document.getElementById(destinyID)
    imgname = destinypoint.src.slice(-9)
    console.log(imgname)
    if (imgname == 'dark0.svg'){
        destinypoint.src = 'images/light.svg'
        update_counter('dark', '+')
        update_number('dark', '-')
        update_number('light', '+')
    } else if (imgname == 'light.svg') {
        destinypoint.src = 'images/dark0.svg'
        update_counter('light', '+')
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
        if (destinytray.lastChild.firstChild.src.slice(-9) == 'dark0.svg'){
            update_number('dark', '-')
        } else if (destinytray.lastChild.firstChild.src.slice(-9) == 'light.svg'){
            update_number('light', '-')
        }
        destinytray.removeChild(destinytray.lastChild);
    }
    var numpoints = document.getElementsByClassName('destinypoint').length
    if (numpoints == 0){
        togglehide('destinypointsheading','flex')
    }

}

function flip(goal) {
    var darkcount = parseInt(document.getElementById('darknumber').innerText)
    var lightcount = parseInt(document.getElementById('lightnumber').innerText)
    var destinytray = document.getElementById('destinytray')
    var tokencount = darkcount + lightcount
    const tokens = destinytray.children
    if (goal == 'dark'){
        if (lightcount == 0){
            return false
        }
        let i = tokencount
        while (i >= 0) {
            srcslice = tokens[i].firstChild.src.slice(-9)
            tokenID = tokens[i].firstChild.id
            if (srcslice == 'light.svg'){
                change_destiny(tokenID)
                return false
            }
            i--;
          }
    } else if (goal == 'light'){
        if (darkcount == 0){
            return false
        }
        let i = 1
        while (i <= tokencount) {
            srcslice = tokens[i].firstChild.src.slice(-9)
            tokenID = tokens[i].firstChild.id
            if (srcslice == 'dark0.svg'){
                change_destiny(tokenID)
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