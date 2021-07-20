// For keybind handling -- Created by Ryan Miller https://aerilym.github.io/

//NOTE pressing shift and = is actualy shift and + as well as just pressing +, as when you hold shift it changes the = key to +, this happens to all keys with a shift option.
//NOTE the + symbol in the keybinds indicated a key combination, so shift+h is holding shift and clicking h
//BINDS             1           2     Non-Shift
hidebuttons =   ['shift+h',     '',     'h']        //Hide/Unhide buttons
hideeye =       ['shift+e',     '',     'e']        //Hide/Unhide eye button
adddestiny =    ['shift+=',     '+',    '=']        //Add destiny point
removedestiny = ['shift+-',     '_',    '-']        //Remove destiny point
fliptolight =   ['shift+up',    '',     'up']       //Flip dark side point to light
fliptodark =    ['shift+down',  '',     'down']     //Flip light side point to dark

binds = ['hidebuttons', 'hideeye', 'adddestiny', 'removedestiny', 'fliptolight', 'fliptodark']
bindsmap = [hidebuttons, hideeye, adddestiny, removedestiny, fliptolight, fliptodark]

//Hide/Unhide the buttons and information below the tool
Mousetrap.bind(hidebuttons[0], function(e) {
    togglehide('settings','block')
    return false;
});

//Adds a destiny point to the tracker
Mousetrap.bind(adddestiny[0], function(e) {
    add_destiny()
    return false;
});

//Adds a destiny point to the tracker
Mousetrap.bind(adddestiny[1], function(e) {
    add_destiny()
    return false;
});

//Removes a destiny point from the tracker
Mousetrap.bind(removedestiny[0], function(e) {
    remove_destiny()
    return false;
});

//Removes a desitny point from the tracker
Mousetrap.bind(removedestiny[1], function(e) {
    remove_destiny()
    return false;
});

//Hide/Unhide the eye icon (the icon used for hiding the buttons)
Mousetrap.bind(hideeye[0], function(e) {
    deleteeye('key')
    return false;
});

//Flips a dark side destiny point to a light side destiny point
Mousetrap.bind(fliptolight[0], function(e) {
    flip('light')
    return false;
});

//Flips a light side destiny point to a dark side destiny point
Mousetrap.bind(fliptodark[0], function(e) {
    flip('dark')
    return false;
});

Mousetrap.bind('up up down down left right left right b a enter', function() {
    alert('nice')
});

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

//Umbinds Non-shift keybinds when called
function unbindnonshift() {
    Mousetrap.unbind(adddestiny[2]);
    Mousetrap.unbind(removedestiny[2]);
    Mousetrap.unbind(hidebuttons[2]);
    Mousetrap.unbind(hideeye[2]);
    Mousetrap.unbind(fliptolight[2]);
    Mousetrap.unbind(fliptodark[2]);
}

function writekeybinds() {
    var keynum = adddestiny.length
    var numbinds = binds.length
    for (var i = 0; i < numbinds; i++) {
        for (var j = 0; j < keynum; j++) {
            docbind = document.getElementById('KB' + binds[i] + j)
            docbind.innerText = bindsmap[i][j].replace('+',' + ')
            // tooltip.onclick = function(){Mousetrap.unbind(docbind.innerText = binds[i].replace(' + ','+'));};
        }
    }
}