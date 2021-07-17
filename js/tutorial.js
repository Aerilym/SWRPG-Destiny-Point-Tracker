function tutorialtooltip(elementID,message,location,next=function(){done()}) {
    addtooltip(elementID,message,location)
    locktooltip(elementID,'onclick')
    document.getElementById(elementID).parentNode.classList.add('tutorialtip')
    document.getElementById(elementID).parentNode.onclick = function(){removetooltip(elementID);next();}
}

function tutorialendbutton() {
    var tutorialbutton = document.getElementById('tutorialbutton')
    tutorialbutton.innerText = 'End Tutorial'
    tutorialbutton.classList.remove('buttonu')
    tutorialbutton.classList.add('buttonr')
    tutorialbutton.onclick = function(){endtutorial()}
}

function endtutorial() {
    var currenttip = document.getElementsByClassName('tutorialtip')
    console.log(currenttip)
    if (currenttip != null && currenttip.length>0) {
        currenttip = currenttip[0]
        removetooltip(currenttip,'item')
    }
    resettutorialbutton()
}

function resettutorialbutton() {
    var tutorialbutton = document.getElementById('tutorialbutton')
    tutorialbutton.innerText = 'Begin Tutorial'
    tutorialbutton.classList.remove('buttonr')
    tutorialbutton.classList.add('buttonu')
    tutorialbutton.onclick = function(){tutorial();tutorialendbutton();}

}

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

function tutorial() {
    tutorialtooltip('adddestiny','You can add destiny points by clicking here!','right',function(){
        tutorialtooltip('fliplight','Click here to flip a dark side point to a light side point.','top',function(){
            tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                    tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                        tutorialtooltip('numdarkdiv','The numbers under "NUM" tell you how many of each destiny point is out. Click here to move on.','right',function(){
                            tutorialtooltip('fliplight','Try flipping some points from dark to light.','bottom',function(){
                                tutorialtooltip('useddarkdiv','The numbers under "USED" tell you how many of each destiny point has been used (flipped). This feature is useful to show players how many points of each type have been used in a session. Click here to move on.','right',function(){
                                    tutorialtooltip('destiny0','You can click the tokens to flip them, give it a go and watch the "USED" number increase.','right',function(){
                                        tutorialtooltip('destiny1','Try another.','right',function(){
                                            tutorialtooltip('numbertoggle','You can also hide elements you do not want to use. You can do this for the number counter and usage counter. Click here to disable the number counter.','right',function(){
                                                tutorialtooltip('numbertoggle','Turn it back on for now.','right',function(){
                                                    tutorialtooltip('counterremovedark','You can also manually adjust the "used" counter, and reset it if there are any difficulties. Try removing one dark side point usage.','right',function(){
                                                        tutorialtooltip('alignrightbutton','The entire tool can be aligned to the right side of the screen, give it a go.','right',function(){
                                                            tutorialtooltip('moveusedrightbutton','You can also move elements around, try clicking here to move the "used" counter to the right. This can be done for all elements.','right',function(){
                                                                tutorialtooltip('hidebutton','You can click this eye button to hide all of the buttons and information, showing only the app. Click it.','right',function(){
                                                                    tutorialtooltip('hidebutton','Now click it again to unhide it all.','right',function(){
                                                                        tutorialtooltip('eyetopleft','You can also move the eye button if you want it out of the way. Click the button and see.','right',function(){
                                                                            tutorialtooltip('eyeresetbutton','Reset the eye position','right',function(){
                                                                                tutorialtooltip('hideeyebutton','You can also hide the eye completely, but doing so means you have to use the keybinds to hide the buttons and menus unless you unhide the eye.','right',function(){
                                                                                    tutorialtooltip('keybindhead','The app also works completley with keybinds, try some of them out. You can also click the "Enable non-shift keybinds" button to remove the need to press the shift button. Try hiding the menu and the eye button. Click here to end the tutorial.','left',function(){
                                                                                        resettutorialbutton()
                                                                                    }
                                                                                    )
                                                                                }
                                                                                )
                                                                            }
                                                                            )
                                                                        }
                                                                        )
                                                                    }
                                                                    )
                                                                }
                                                                )
                                                            }
                                                            )
                                                        }
                                                        )
                                                    }
                                                    )
                                                }
                                                )
                                            }
                                            )
                                        }
                                        )
                                    }
                                    )
                                }
                                )
                            }
                            )
                        }
                        )
                    }
                    )
                }
                )
            }
            )
        }
        )
    }
    )
}

function done() {
    console.log('done')
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
            addtooltip('adddestiny','Adds a new destiny point to the tracker.','top')
            addtooltip('removedestiny','Removes the newest destiny point from the tracker.','bottom')
            addtooltip('fliplight','Turns a dark side point to a light side point.','top')
            addtooltip('flipdark','Turns a light side point to a dark side point.','bottom')
            addtooltip('counteraddlight','Increases the used light side points counter by 1.','top')
            addtooltip('counterremovelight','Decreases the used light side points counter by 1.','bottom')
            addtooltip('counteradddark','Increases the used dark side points counter by 1.','top')
            addtooltip('counterremovedark','Decreases the used dark side points counter by 1.','bottom')
            addtooltip('counterreset','Resets the used destiny point counters.','bottom')
            addtooltip('numbertoggle','Toggles the visibility of the number of destiny points counter.','left')
            addtooltip('usagetrackertoggle','Toggles the visibility of the destiny point usage tracker.','left')
            addtooltip('darktoggle','Toggles the colours between dark/light mode presets.','left')
            addtooltip('alignrightbutton','Toggles the whole tool alighnment between right and left.','left')
            addtooltip('moveusedrightbutton','Moves the used destiny point tracker to the far right of the tool.','right')
            addtooltip('movenumrightbutton','Moves the number of destiny points counter to the far right of the tool.','right')
            addtooltip('movetokensrightbutton','Moves the destiny point token tray to the far right of the tool.','right')
            addtooltip('information','Shows information for how to use the tool and more.','top')
            addtooltip('download','Takes you to the download page on GitHub.','top')
        } else if (toggletooltipbutotn.innerText = 'Disable Tooltips'){
            cleantooltips()
        }
        
}