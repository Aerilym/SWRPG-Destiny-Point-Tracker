// For tutorial handling and functions -- Created by Ryan Miller https://aerilym.github.io/

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
    tutorialbutton.onclick = function(){togglehide('featuresdropdown','block');tutorial();tutorialendbutton();}

}

function tutorial() {
    tutorialtooltip('adddestiny','You can add destiny points by clicking here!','right',function(){
        tutorialtooltip('fliplight','Click here to flip a dark side point to a light side point.','right',function(){
            tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                    tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                        tutorialtooltip('numdarkdiv','The numbers under "NUM" tell you how many of each destiny point there is. CLICK HERE to move on.','right',function(){
                            tutorialtooltip('fliplight','Try flipping some points from dark to light.','right',function(){
                                tutorialtooltip('useddarkdiv','The numbers under "USED" tell you how many of each destiny point has been used (flipped). This feature is useful to show players how many points of each type have been used in a session. CLICK HERE to move on.','right',function(){
                                    tutorialtooltip('destiny0','You can click the tokens to flip them, give it a go and watch the "USED" number increase.','right',function(){
                                        tutorialtooltip('destiny1','Try flipping another point.','bottom',function(){togglehide('featuresdropdown','block');
                                            tutorialtooltip('numbertoggle','You can also hide elements you do not want to use. You can do this for the number counter and usage counter. Click here to disable the number counter.','right',function(){
                                                tutorialtooltip('numbertoggle','Turn it back on for now.','right',function(){
                                                    tutorialtooltip('counterremovedark','You can also manually adjust the "used" counter, and reset it if there are any difficulties. Try removing one dark side point usage.','right',function(){
                                                        tutorialtooltip('movenumrightbutton','You can also move elements around, try clicking here to move the "NUM" counter to the right. This can be done for all elements.','right',function(){
                                                            tutorialtooltip('alignrightbutton','The entire tool can be aligned to the right side of the screen, give it a go.','right',function(){
                                                                tutorialtooltip('hidebutton','You can click this eye button to hide all of the buttons and information, showing only the app. Click it.','right',function(){
                                                                    tutorialtooltip('hidebutton','Now click it again to unhide it all.','right',function(){togglehide('featuresdropdown','block');
                                                                        tutorialtooltip('changetokensbutton','You can change the token images in this menu. Click it and see.','right',function(){
                                                                            tutorialtooltip('changetokensbutton','Close the menu to move on.','top',function(){
                                                                                tutorialtooltip('information','For more informaticlick here.','right',function(){
                                                                                    tutorialtooltip('keybindhead','The app also works completley with keybinds, try some of them out. You can also click the "Enable non-shift keybinds" button to remove the need to press the shift button. Try hiding the menu and the eye button. Click here to end the tutorial.','top',function(){
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

