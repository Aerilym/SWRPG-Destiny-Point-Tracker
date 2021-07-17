// For keybind handling -- Created by Ryan Miller https://aerilym.github.io/

//Hide/Unhide the buttons and information below the tool
Mousetrap.bind('shift+h', function(e) {
    togglehide('settings','block')
    return false;
});

//Adds a destiny point to the tracker
Mousetrap.bind('plus', function(e) {
    add_destiny()
    return false;
});

//Adds a destiny point to the tracker
Mousetrap.bind('=', function(e) {
    add_destiny()
    return false;
});

//Removes a destiny point from the tracker
Mousetrap.bind('-', function(e) {
    remove_destiny()
    return false;
});

//Removes a desitny point from the tracker
Mousetrap.bind('_', function(e) {
    remove_destiny()
    return false;
});

//Hide/Unhide the eye icon (the icon used for hiding the buttons)
Mousetrap.bind('shift+e', function(e) {
    deleteeye('key')
    return false;
});

//Flips a dark side destiny point to a light side destiny point
Mousetrap.bind('shift+up', function(e) {
    flip('light')
    return false;
});

//Flips a light side destiny point to a dark side destiny point
Mousetrap.bind('shift+down', function(e) {
    flip('dark')
    return false;
});

Mousetrap.bind('up up down down left right left right b a enter', function() {
    alert('nice')
});

//Non-shift keybinds (only active when the button on the page is active)
function bindnonshift() {
    
    //Hide/Unhide the buttons and information below the tool
    Mousetrap.bind('h', function(e) {
        togglehide('settings','block')
        return false;
    });

    //Hide/Unhide the eye icon (the icon used for hiding the buttons)
    Mousetrap.bind('e', function(e) {
        deleteeye('key')
        return false;
    });
    
    //Flips a dark side destiny point to a light side destiny point
    Mousetrap.bind('up', function(e) {
        flip('light')
        return false;
    });

    //Flips a light side destiny point to a dark side destiny point
    Mousetrap.bind('down', function(e) {
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