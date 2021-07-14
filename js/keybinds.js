Mousetrap.bind('shift+h', function(e) {
    togglehide('settings','block')
    return false;
});
Mousetrap.bind('plus', function(e) {
    add_destiny()
    return false;
});
Mousetrap.bind('=', function(e) {
    add_destiny()
    return false;
});
Mousetrap.bind('-', function(e) {
    remove_destiny()
    return false;
});
Mousetrap.bind('_', function(e) {
    remove_destiny()
    return false;
});
Mousetrap.bind('shift+e', function(e) {
    deleteeye('key')
    return false;
});
Mousetrap.bind('shift+up', function(e) {
    flip('light')
    return false;
});
Mousetrap.bind('shift+down', function(e) {
    flip('dark')
    return false;
});

Mousetrap.bind('up up down down left right left right b a enter', function() {
    alert('nice')
});

function bindnonshift() {
    Mousetrap.bind('h', function(e) {
        togglehide('settings','block')
        return false;
    });
    Mousetrap.bind('e', function(e) {
        deleteeye('key')
        return false;
    });
    Mousetrap.bind('up', function(e) {
        flip('light')
        return false;
    });
    Mousetrap.bind('down', function(e) {
        flip('dark')
        return false;
    });
}

function unbindnonshift() {
    Mousetrap.unbind('h');
    Mousetrap.unbind('e');
    Mousetrap.unbind('up');
    Mousetrap.unbind('down');
}