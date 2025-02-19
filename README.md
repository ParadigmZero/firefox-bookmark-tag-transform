A command-line application/library JavaScript Node application to convert a Firefox HTML file (these can be exported), so that the 'TAGS' are removed from the anchor HTML tags, then places within the anchor link text instead (i.e. in the bookmark title). This conversion will output to: `TRANSFORMED_<your file>` in the same directory as your input file

For example, instances such as:

`<A HREF="http://www.example.com" TAGS="one,two,three four five">Example</A>`

become:

`<A HREF="http://www.example.com">Example | #one #two #three four five</A>`

Within the output file.

Easily runnable with npx with anyone who has NodeJS installed.

# Running

Node must be installed.

## npx executable (in terminal)

Give one argument, being the (path and) filename.

`npx firefoxbookmarktagtransform bookmarks.html`


## local

To run locally for test/development purposes from directory.

(if using nvm, you can fist enter `nvm install`)

`npm start bookmarks.html`

# Usage as library

Install in your project:

`npm i firefoxbookmarktagtransform` 

Use in your project:

```JavaScript
import callmeanything from "firefoxbookmarktagtransform";

callmeanything("pathtofile");
```


# Use case

NOTE: below is the most frictionless way of using these converted bookmarks in Firefox across all your devices, but it doesn't take into account things like passwords and tabs and only takes into account the bookmarks you sync. It will wipe everything clean locally and on your Mozilla sync, and start over.

1. Export your bookmarks as HTML
2. Run this file through the command line application
3. Uninstall Firefox on your devices
3. Delete your Mozilla sync account
3. Create another Mozilla sync account (you can use the same email)
4. Install Firefox again across your devices
4. Import the new HTML file into Firefox
5. You may want to re-organize the bookmarks based on how they were imported. As of the time of this writing, the imported bookmarks are placed in "Bookmarks Menu" folder.

So move ( cut and paste) all the bookmarks:

Bookmarks Menu/Bookmarks Menu -> /Bookmarks Menu
Bookmarks Menu/Bookmarks Toolbar -> /Bookmarks Toolbar
Bookmarks Menu/Other Bookmarks -> /Other Bookmarks

Then make sure never to use "tags" when you bookmark, and you will be able to find your bookmarks in the same way no matter which device you are using.

# Background information

While Firefox tags is an excellent feature, however this functionality has long been retired in the mobile version (i.e. Android and iOS). This can be an issue for instance, if say you rely on tags for finding bookmarks, and then when on your "mobile" version of Firefox, you will not be able to find it since it does not use tags. As such there is no perfect sync between Android versions (using the in-built Mozilla sync) regarding bookmarks, unless you refuse to use tags. 

By putting our "tags" within the link descriptions you can essentially achieve the same functionality across mobile and desktop, and find your bookmarks easily whatever platform you are using.

It should be noted also that then these bookmarks can then be imported into Chromium based (e.g. Chrome, Edge, Brave, Vivaldi.etc) and other browsers, without losing information in terms of searchability. However, Chromium based browsers with sync cannot achieve the same 1:1 bookmark matching from desktop to mobile, as Firefox (based browsers) and Mozilla sync can when using the "don't use tags" approach. To my knowledge however, Vivaldi is an exception because it has its own unique syncing system and would be a viable alternative to Firefox for good bookmark syncing if that is your preference.

As an aside, the author prefers not to use "Mobile Bookmarks" in Firefox, by choosing a different folder within mobile Firefox and never saving into the "Mobile Bookmarks". Also deleting the "Mobile Bookmarks" folder within Firefox desktop, making sure everything is synced, will essentially remove the "Mobile Bookmarks" folder thereby creating a better 1:1 bookmark sync with Firefox mobile and desktop.

This approach will also work for the various Firefox forks such as Floorp, LibreWolf, Waterfox, Mercury .etc, 
