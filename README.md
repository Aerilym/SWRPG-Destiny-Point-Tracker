# Star Wars RPG (SWRPG) Destiny Point Tracker

## Links and Information

* [Use Online](https://aerilym.github.io/SWRPG-Destiny-Point-Tracker) - Access the full functionality of the app, use it online.
* [Download](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/releases) - If you download the tool you can run it locally in a web browser or in a studio program like [OBS](https://obsproject.com/).
* [OBS Guide](#obs-open-broadcaster-software-guide) - You can use this tool as a browser scene on [OBS](https://obsproject.com/) or similar, for use as a webcam overlay or live asset.
* [Local Guide](#Local-Guide) - You can use the tool locally in your web browser.
* [Keybind Guide](#keybind-guide) - You can change all the keybinds.
* [General Modification Guide](#general-modification-guide) - Some aspects can be modified with no knowledge of programming.
* [Other Tools](https://aerilym.github.io/) - Other tools, apps, and things made by me.

## Frequently Asked Questions

### Why do I get a prompt to click the + button every time?

The tooltip showing you how to being and suggesting the tutorial comes up for new users. If this is popping up every time you use the tool it means you have cookies disabled. Cookies are the only way the website can remember you so if you have them off it's impossible for the website to recognise you or know you've visited. [You can lean how to enable cookies here](https://support.google.com/accounts/answer/61416).

### Why does the tool not remember my dark/light mode preference?

See the [previous answer](#why-do-i-get-a-prompt-to-click-the--button-every-time) to [enable cookies](https://support.google.com/accounts/answer/61416). Otherwise the tool will default to your operating system dark mode preference.

### Can you add or change feature x? How do I make a request?

I always appreciate feedback and feature requests, if you want to make a request, the best way is to make a post in the GitHub repo's ['issues'](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/issues) section, [information can be found here](#issues-bugs-requests-questions-additions-and-more), or you can go straight to the [issues page](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/issues). You can also email me if you find my contact information on [my website](aerilym.github.io) but I may miss it, so the [issues page](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/issues) will always be the best option.

### I have a problem and/or found a bug, what do I do?

See the [previous answer](#can-you-add-or-change-feature-x-how-do-i-make-a-request) and post on the repo's [issues page](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/issues).

### How do I use the destiny point tracker on...

* [My computer](#local-guide)?
* [OBS or similar as a browser scene](#obs-open-broadcaster-software-guide)?
* My Phone? The online version should work, if you have any issues [let me know](#i-have-a-problem-andor-found-a-bug-what-do-i-do).

### How do I ...

* [Hide all the buttons](#hiding-things)?
* [Change the background colour](#Changing-the-background-colour)?
* [Change the destiny point images](#Changing-the-destiny-point-images)?
* [Make the keybinds work](#keybind-guide)?

## Help & Guides

Press the tutorial button on the page for an in-depth walkthrough of how to use the tool.

If you wish to make any backend changes you will need to [download](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/releases) the tool and use it locally as the online version will not save your changes.

### Local Guide

1. Download the app at [https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/releases](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/releases).
2. If the download is in a zip file make sure you unzip it before use.
3. Open the index.html file in a web browser or compatible program.
NOTE: The dark/light mode toggle feature will not work locally but it will take your operating system preference and use that.

### OBS (Open Broadcaster Software) Guide

This works with the online version or a downloaded version.

1. In [OBS](https://obsproject.com/) (or similar), create a browser source.
2. If you wish to use the online version set the URL to [https://aerilym.github.io/SWRPG-Destiny-Point-Tracker/](https://aerilym.github.io/SWRPG-Destiny-Point-Tracker/) otherwise set the source as the index.html file in your downloaded version. (by ticking local file and finding it)
3. Set the width and height to any you prefer, I suggest you make the width the same width and height to the size of the canvas (eg. 1920x1080). I recommend setting up the tracker and number of tokens with full screen, then adjusting the cropping and size of the browser source.
4. If it isn't already there, add the following to the Custom CSS section: `body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; }` Then press ok
5. Right click the browser source and click "interact", this will allow you to interact with the tool and set it up for use.
6. Add the amount of destiny points you will use, flipping the default dark point to light. Then press "reset used" on the app, to reset the used points counter (if applicable)
7. You can now click the eye icon on the app, this will hide all the buttons and information and make only the app visible.
8. You should keep this "interact" window open so you can flip the destiny points between light and dark during the game (this can be done by clicking on the point you wish to flip)

    NOTE: If you change any variables of the browser source (in the "properties" menu) the source with refresh and you will lose any changes you have made to the app.

    NOTE: There are options available to move the "eye" button to other parts of the page, this is useful if you wish to place the eye somewhere it won't be seen on OBS (like off the screen/canvas).

### Keybind Guide

NOTE: As of v1.2.0 keybinds can now be changed and customised right in the tool by clicking the bind.
NOTE: If a keybind isn't working, try using `ctrl` in place of `shift`. Eg. Instead of `shift + up` try `ctrl + up`. I'm honestly not sure why this happens, but I've found when using it in an OBS browser source `shift` is replaced with `ctrl` for the keybinds, I think this is either an OBS issue or a windows issue.

* You can change any keybind by going to `js/keybinds.js` and changing the respective keybind as defined in the top definition block (NOTE: the keybind table on the page will update with any changes as it is dynamic, check the table to see if your keybinds are shown.):

```JavaScript
//BINDS             1           2     Non-Shift
hidebuttons =   ['shift+h',     '',     'h']        //Hide/Unhide buttons
hideeye =       ['shift+e',     '',     'e']        //Hide/Unhide eye button
adddestiny =    ['shift+=',     '+',    '=']        //Add destiny point
removedestiny = ['shift+-',     '_',    '-']        //Remove destiny point
fliptolight =   ['shift+up',    '',     'up']       //Flip dark side point to light
fliptodark =    ['shift+down',  '',     'down']     //Flip light side point to dark
```

For advanced usage: each keybind is defined by the first argument of the `Mousetrap.bind()` function. See the [documentation for Mousetrap.js](https://craig.is/killing/mice). In the case of the below example, you can change the keybind for adding a destiny point by changing `plus` to another key (eg. `q`) or a key combination (eg. `shift+q`).

```JavaScript
adddestiny =    ['plus','=','']
//Adds a destiny point to the tracker
Mousetrap.bind(adddestiny[0], function(e) {
    add_destiny()
    return false;
});
```

### General Modification Guide

* <span id="hiding-things"></span> **Hiding things -** Parts of the tools can be hidden or shown using the available buttons. Try them out. Everything other than the tool can also be hidden using the eye icon.
* <span id="Changing-the-destiny-point-images"></span> **Changing the destiny point images -** The image tokens used for dark and light side points can be change by replacing the `dark0.sgv` and `light.svg` files with images of your choice. If you're willing to change some lines of code: open index.html and replace all occurrences of `dark0.sgv` and `light.svg` with the respective file names your images have. This allows you to use [any valid web image format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats).

    NOTE: currently the image file names must be 9 characters long including the file extension (so your new file names much have the same length as the original file names) Similar to the file name change, if you replace all occurrences of '-9' to the length of your new file names, you can use any file name length (both files need to have the same file name length).

* <span id="Changing-the-background-colour"></span> **Changing the background colour -** Opening the main.css file, change the colour of `background-color` in these two blocks. The `body` block is the default state, and `body.darkmode` overrides `body` if dark mode is enabled (NOTE `color` is the text colour):
  
```css
body{
    background-color: rgba(255, 255, 255);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body.darkmode{
    background-color: rgb(0, 0, 0);
    color: #eee;
}
```

* More coming soon

## Issues, Bugs, Requests, Questions, Additions, and more

Please use the provided github ['issues'](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/issues) section to report any bugs or issues. This area can also be used to submit guides (documentation), requests, questions, additions, and more. Please use appropriate labels and check to see if someone has already made a similar post.

## Other Star Wars RPG Tools I Use

These tools are made by other people and I have no official association with their creators. These are just tools I recommend with a sentence on how I use them.

* [SWRPG Community Website](https://www.swrpgcommunity.com/) - My go to place for tools, assets, homebrew rules, podcasts, and pretty much any SWRPG content I need.
* [SWRPG Subreddit](https://www.reddit.com/r/swrpg/) - Browsing new tools and discussions about the system.
* [RPG Sessions](https://rpgsessions.com/) - Mostly campaign management and NPC sheets but I hear from others that the game table is great.
