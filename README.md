# Star Wars RPG (SWRPG) Destiny Point Tracker

## Links and Information

* [Use Online](https://aerilym.github.io/SWRPG-Destiny-Point-Tracker) - Access the full functionality of the app, use it online.
* [Download](https://github.com/Aerilym/SWRPG-Destiny-Point-Tracker/releases) - If you download the tool you can run it locally in a web browser or in a studio program like [OBS](https://obsproject.com/).
* [OBS Guide](#OBSGUIDE) - You can use this tool as a browser scene on [OBS](https://obsproject.com/) or similar, for use as a webcam overlay or live asset.
* [Local Guide](#Local-Guide) - You can use the tool locally in your web browser.
* [Modification Guide](#Modification-Guide) - Some aspects can be modified with no knowledge of programming.
* [Other Tools](https://aerilym.github.io/) - Other tools, apps, and things made by me.

## Help & Guides

Press the tutorial button on the page for an in-depth walkthrough of how to use the tool.

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

### Modification Guide

* **Hiding things -** Parts of the tools can be hidden or shown using the available buttons. Try them out. Everything other than the tool can also be hidden using the eye icon.
* **Changing the destiny point images -** The image tokens used for dark and light side points can be change by replacing the `dark0.sgv` and `light.svg` files with images of your choice. If you're willing to change some lines of code: open index.html and replace all occurrences of `dark0.sgv` and `light.svg` with the respective file names your images have. This allows you to use [any valid web image format](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#supported_image_formats).

    NOTE: currently the image file names must be 9 characters long including the file extension (so your new file names much have the same length as the original file names) Similar to the file name change, if you replace all occurrences of '-9' to the length of your new file names, you can use any file name length (both files need to have the same file name length).

* **Changing the background colour -** Opening the main.css file, change the colour of `background-color` in these two blocks:
  
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

Please use the provided github 'issues' section to report any bugs or issues. This area can also be used to submit guides (documentation), requests, questions, additions, and more. Please use appropriate labels and check to see if someone has already made a similar post.
