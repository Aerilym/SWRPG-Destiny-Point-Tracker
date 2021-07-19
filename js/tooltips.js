// For tooltip handling -- Created by Ryan Miller https://aerilym.github.io/

function cleantooltips() {
    var tooltips = document.getElementsByClassName('tooltip')
    var arrayLength = tooltips.length;
    var tooltipids = []
    for (var i = 0; i < arrayLength; i++) {
        if (tooltips[i].classList.contains('tutorialtip')){
            continue
          }
        tooltipids.push(tooltips[i].lastChild.id)
    }
    var tiplength = tooltipids.length;
    for (var i = 0; i < tiplength; i++) {
        if (tooltipids[i] == 'tutorialbutton' || tooltipids[i] == 'toggletooltipbutotn'){
            continue
          }
        removetooltip(tooltipids[i])
    } 
    var toggletooltipbutotn = document.getElementById('toggletooltipbutotn')
        if (toggletooltipbutotn.innerText == 'Disable Tooltips') {
            toggletooltipbutotn.innerText = 'Enable Tooltips'
            toggletooltipbutotn.classList.remove('buttonr')
            toggletooltipbutotn.classList.add('buttonu') 
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
    if (text.length>32 && text.length<64){
        tooltiptext.classList.add('tooltiptextwide')
    } else if (text.length>64 && text.length<128){
        tooltiptext.classList.add('tooltiptextwide2')
    } else if (text.length>128){
        tooltiptext.classList.add('tooltiptextwide3')
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




function infotooltips() {
    var toggletooltipbutotn = document.getElementById('toggletooltipbutotn')
    var tutorialbutton = document.getElementById('tutorialbutton')
    if (toggletooltipbutotn.innerText == 'Enable Tooltips') {
        if (tutorialbutton.innerText != 'End Tutorial') {
            cleantooltips()
        }
        toggletooltipbutotn.innerText = 'Disable Tooltips'
        toggletooltipbutotn.classList.remove('buttonu') 
        toggletooltipbutotn.classList.add('buttonr')
        addtooltip('adddestiny','Adds a new destiny point to the tracker.','right')
        addtooltip('removedestiny','Removes the newest destiny point from the tracker.','right')
        addtooltip('fliplight','Turns a dark side point to a light side point.','right')
        addtooltip('flipdark','Turns a light side point to a dark side point.','right')
        addtooltip('counteraddlight','Increases the used light side points counter by 1.','right')
        addtooltip('counterremovelight','Decreases the used light side points counter by 1.','right')
        addtooltip('counteradddark','Increases the used dark side points counter by 1.','right')
        addtooltip('counterremovedark','Decreases the used dark side points counter by 1.','right')
        addtooltip('counterreset','Resets the used destiny point counters.','right')
        addtooltip('numbertoggle','Toggles the visibility of the number of destiny points counter.','right')
        addtooltip('usagetrackertoggle','Toggles the visibility of the destiny point usage tracker.','right')
        addtooltip('darktoggle','Toggles the colours between dark/light mode presets.','right')
        addtooltip('alignrightbutton','Toggles the whole tool alighnment between right and left.','right')
        addtooltip('moveusedrightbutton','Moves the used destiny point tracker to the far right of the tool.','right')
        addtooltip('movenumrightbutton','Moves the number of destiny points counter to the far right of the tool.','right')
        addtooltip('movetokensrightbutton','Moves the destiny point token tray to the far right of the tool.','right')
        addtooltip('information','Shows information for how to use the tool and more.','top')
        addtooltip('download','Takes you to the download page on GitHub.','top')
        addtooltip('eyebutton','Hide/Unhide the controls.','right')
    } else if (toggletooltipbutotn.innerText = 'Disable Tooltips'){
        cleantooltips()
    }
    
}