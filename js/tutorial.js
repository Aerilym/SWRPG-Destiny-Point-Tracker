function tutorialtooltip(elementID,message,location,next=function(){done()}) {
    addtooltip(elementID,message,location)
    locktooltip(elementID,'onclick')
    document.getElementById(elementID).parentNode.classList.add('tutorialtip')
    document.getElementById(elementID).parentNode.onclick = function(){removetooltip(elementID);next();}
}

function tutorialendbutton() {
    var tutorialbutton = document.getElementById('tutorialbutton')
    tutorialbutton.innerText = 'END TUTORIAL'
    tutorialbutton.classList.remove('buttonu')
    tutorialbutton.classList.add('buttonr')
    tutorialbutton.onclick = function(){endtutorial()}
}

function endtutorial() {
    var currenttip = document.getElementsByClassName('tutorialtip')[0]
    removetooltip(currenttip.lastChild.id)
    tutorialbutton.innerText = 'BEGIN TUTORIAL'
    tutorialbutton.classList.remove('buttonr')
    tutorialbutton.classList.add('buttonu')
}

function tutorial() {
    tutorialtooltip('adddestiny','Click here to begin by adding your first destiny point!','right',function(){
        tutorialtooltip('fliplight','Click here to flip a dark side point to a light side point.','top',function(){
            tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                    tutorialtooltip('adddestiny','Try add a few more points, it will be easier to see what you are doing.','right',function(){
                        tutorialtooltip('numdarkdiv','The numbers under "NUM" tell you how many of each destiny point is out. Click here to move on.','right',function(){
                            tutorialtooltip('flipdark','Try flipping some points between light and dark.','bottom',function(){
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
                                                                        tutorialtooltip('eyetopleft','You can also move the eye button if you want it out of the way. Click the button and see.','left',function(){
                                                                            tutorialtooltip('eyeresetbutton','Reset the eye position','right',function(){
                                                                                tutorialtooltip('hideeyebutton','You can also hide the eye completely, but doing so means you have to use the keybinds to hide the buttons and menus unless you unhide the eye.','right',function(){
                                                                                    tutorialtooltip('keybindhead','The app also works completley with keybinds, try some of them out. You can also click the "Enable non-shift keybinds" button to remove the need to press the shift button. Try hiding the menu and the eye button. Click here to end the tutorial.','left',function(){
                                                                                        done()
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
    tutorialbutton.innerText = 'BEGIN TUTORIAL'
    tutorialbutton.classList.remove('buttonr')
    tutorialbutton.classList.add('buttonu')
}

function done() {
    console.log('done')
}