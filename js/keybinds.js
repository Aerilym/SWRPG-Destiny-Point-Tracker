// For keybind handling -- Created by Ryan Miller https://aerilym.github.io/

//NOTE pressing shift and = is actualy shift and + as well as just pressing +, as when you hold shift it changes the = key to +, this happens to all keys with a shift option.
//NOTE the + symbol in the keybinds indicated a key combination, so shift+h is holding shift and clicking h
//BINDS             1           2     Non-Shift
adddestiny =    ['shift+=',     '+',    '=']        //Add destiny point
removedestiny = ['shift+-',     '_',    '-']        //Remove destiny point
fliptolight =   ['shift+up',    '',     'up']       //Flip dark side point to light
fliptodark =    ['shift+down',  '',     'down']     //Flip light side point to dark
hidebuttons =   ['shift+h',     '',     'h']        //Hide/Unhide buttons
hideeye =       ['shift+e',     '',     'e']        //Hide/Unhide eye button

binds = ['adddestiny', 'removedestiny', 'fliptolight', 'fliptodark', 'hidebuttons', 'hideeye']
bindsmap = [adddestiny, removedestiny, fliptolight, fliptodark, hidebuttons, hideeye]

//Adds a destiny point to the tracker
function bindadddestiny(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                add_destiny()
                return false;
            });
        }
    }
}

//Removes a destiny point from the tracker
function bindremovedestiny(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                remove_destiny()
                return false;
            });
        }
    }
}

//Flips a dark side destiny point to a light side destiny point
function bindfliptolight(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                flip('light')
                return false;
            });
        }
    }
}

//Flips a light side destiny point to a dark side destiny point
function bindfliptodark(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                flip('dark')
                return false;
            });
        }
    }
}


//Hide/Unhide the buttons and information below the tool
function bindhidebuttons(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                togglehide('settings','block')
                return false;
            });
        }
    }
}

//Hide/Unhide the eye icon (the icon used for hiding the buttons)
function bindhideeye(keybinds) {
    if (keybinds.length == 1) {
        keybinds.push('')        
    }
    for (var i = 0; i < keybinds.length-1; i++) {
        if (keybinds[i] != '') {
            Mousetrap.bind(keybinds[i], function(e) {
                deleteeye('key')
                return false;
            });
        }
    }
}

Mousetrap.bind('up up down down left right left right b a enter', function() {
    alert('nice')
});

function setkeybinds(keybindsmap) {
    bindadddestiny(keybindsmap[0])
    bindremovedestiny(keybindsmap[1])
    bindfliptolight(keybindsmap[2])
    bindfliptodark(keybindsmap[3])
    bindhidebuttons(keybindsmap[4])
    bindhideeye(keybindsmap[5])
}
setkeybinds(bindsmap)

//Non-shift keybinds (only active when the button on the page is active)
function bindnonshift() {

    //Adds a destiny point to the tracker
    Mousetrap.bind(adddestiny[2], function(e) {
        add_destiny()
        return false;
    });

    //Removes a destiny point from the tracker
    Mousetrap.bind(removedestiny[2], function(e) {
        remove_destiny()
        return false;
    });
    
    //Hide/Unhide the buttons and information below the tool
    Mousetrap.bind(hidebuttons[2], function(e) {
        togglehide('settings','block')
        return false;
    });

    //Hide/Unhide the eye icon (the icon used for hiding the buttons)
    Mousetrap.bind(hideeye[2], function(e) {
        deleteeye('key')
        return false;
    });
    
    //Flips a dark side destiny point to a light side destiny point
    Mousetrap.bind(fliptolight[2], function(e) {
        flip('light')
        return false;
    });

    //Flips a light side destiny point to a dark side destiny point
    Mousetrap.bind(fliptodark[2], function(e) {
        flip('dark')
        return false;
    });
}

//Unbinds Non-shift keybinds when called
function unbindnonshift() {
    Mousetrap.unbind(adddestiny[2]);
    Mousetrap.unbind(removedestiny[2]);
    Mousetrap.unbind(hidebuttons[2]);
    Mousetrap.unbind(hideeye[2]);
    Mousetrap.unbind(fliptolight[2]);
    Mousetrap.unbind(fliptodark[2]);
}

//Umbinds Non-shift keybinds when called
function unbindall() {
    for (var i = 0; i < bindsmap.length; i++) {
        for (var j = 0; j < adddestiny.length-1; j++) {
            Mousetrap.unbind(bindsmap[i][j])
        }
    }
}

function writekeybinds() {
    var keynum = adddestiny.length
    var numbinds = binds.length
    for (var i = 0; i < numbinds; i++) {
        for (var j = 0; j < keynum; j++) {
            docbind = document.getElementById('KB' + binds[i] + j)
            docbind.innerText = bindsmap[i][j].replace('+',' + ')
            docbind.onclick = function(){changebind(this.id);};
        }
    }
}

function changebind(elementID) {
    var bindelement = document.getElementById(elementID)
    var oldBind = bindelement.innerText.replace(' + ','+')
    console.log(oldBind)
    Mousetrap.unbind(oldBind)
    result = window.prompt('Change keybind', oldBind);
    var fnstr = elementID.slice(2,-1)
    if (fnstr == 'adddestiny') {
        bindadddestiny([result])
    } else if (fnstr == 'removedestiny') {
        bindremovedestiny([result])
    } else if (fnstr == 'fliptolight') {
        bindfliptolight([result])
    } else if (fnstr == 'fliptodark') {
        bindfliptodark([result])
    } else if (fnstr == 'hidebuttons') {
        bindhidebuttons([result])
    } else if (fnstr == 'hideeye') {
        bindhideeye([result])
    }
    bindelement.innerText = result
}