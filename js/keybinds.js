// For keybind handling -- Created by Ryan Miller https://aerilym.github.io/

//NOTE pressing shift and = is actualy shift and + as well as just pressing +, as when you hold shift it changes the = key to +, this happens to all keys with a shift option.
//NOTE the + symbol in the keybinds indicated a key combination, so shift+h is holding shift and clicking h
//BINDS             1           2     Non-Shift
hidebuttons =   ['shift+h',     '',     'h']
hideeye =       ['shift+e',     '',     'e']
adddestiny =    ['shift+=',     '+',    '=']
removedestiny = ['shift+-',     '_',    '-']
fliptolight =   ['shift+up',    '',     'up']
fliptodark =    ['shift+down',  '',     'down']

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
    Mousetrap.unbind('h');
    Mousetrap.unbind('e');
    Mousetrap.unbind('up');
    Mousetrap.unbind('down');
}

function writekeybinds() {
    document.getElementById('KBadddestiny0').innerText = adddestiny[0].replace('+',' + ')
    document.getElementById('KBadddestiny1').innerText = adddestiny[1].replace('+',' + ')
    document.getElementById('KBadddestiny2').innerText = adddestiny[2].replace('+',' + ')

    document.getElementById('KBremovedestiny0').innerText = removedestiny[0].replace('+',' + ')
    document.getElementById('KBremovedestiny1').innerText = removedestiny[1].replace('+',' + ')
    document.getElementById('KBremovedestiny2').innerText = removedestiny[2].replace('+',' + ')

    document.getElementById('KBhidebuttons0').innerText = hidebuttons[0].replace('+',' + ')
    document.getElementById('KBhidebuttons1').innerText = hidebuttons[1].replace('+',' + ')
    document.getElementById('KBhidebuttons2').innerText = hidebuttons[2].replace('+',' + ')

    document.getElementById('KBhideeye0').innerText = hideeye[0].replace('+',' + ')
    document.getElementById('KBhideeye1').innerText = hideeye[1].replace('+',' + ')
    document.getElementById('KBhideeye2').innerText = hideeye[2].replace('+',' + ')

    document.getElementById('KBfliptolight0').innerText = fliptolight[0].replace('+',' + ')
    document.getElementById('KBfliptolight1').innerText = fliptolight[1].replace('+',' + ')
    document.getElementById('KBfliptolight2').innerText = fliptolight[2].replace('+',' + ')

    document.getElementById('KBfliptodark0').innerText = fliptodark[0].replace('+',' + ')
    document.getElementById('KBfliptodark1').innerText = fliptodark[1].replace('+',' + ')
    document.getElementById('KBfliptodark2').innerText = fliptodark[2].replace('+',' + ')
}