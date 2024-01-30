A command-line application JavaScript Node application to convert a Firefox HTML file (these can be exported), so that the 'TAGS' are removed from the anchor HTML tags, then places within the anchor link text instead (i.e. in the bookmark title). This conversion will output to: `TRANSFORMED_<your file>` in the same directory as your input file

For example, instances such as:

`<A HREF="http://www.example.com" TAGS="one,two,three four five">Example</A>`

become:

`<A HREF="http://www.example.com">Example | #one #two #three four five</A>`

Within the output file.

# Running

Designed to be run with npx (Node/npm must be installed).

Give one argument, being the (path and) filename.

`npx firefoxbookmarktagtransform bookmarks.html`

# Use case

To completely convert over to using "tags" in this way (i.e. not using the Firefox built-in tags but just putting text tags within the title), you would do something like the following:

1. Export your bookmarks as HTML
2. Run this file through the command line application
3. Delete ALL your bookmarks in Firefox
4. Import the new HTML file into Firefox
5. You may want to re-organize the bookmarks based on how they were imported. As of the time of this writing, the imported bookmarks are placed in "Bookmarks Menu" folder, not the root bookmarks folder. Cut and paste the bookmarks into the relevant folders so they match how you had it previously, i.e. "Other Bookmarks", "Bookmarks Toolbar"

# Background information

While Firefox tags is an excellent feature, however this functionality has long been retired in the mobile version (i.e. Android and iOS). This can be an issue for instance, if say you rely on tags for finding bookmarks, and then when on your "mobile" version of Firefox, you will not be able to find it since it does not use tags. As such there is no perfect sync between Android versions (using the in-built Mozilla sync) regarding bookmarks, unless you refuse to use tags. 

By putting our "tags" within the link descriptions you can essentially achieve the same functionality across mobile and desktop, and find your bookmarks easily whatever platform you are using.

As an aside, the author prefers not to use "Mobile Bookmarks" in Firefox, by choosing a different folder within mobile Firefox and never saving into the "Mobile Bookmarks". Also moving mobile bookmarks and deleting the "Mobile Bookmarks" folder within Firefox desktop, making sure everything is synced, will essentially remove the "Mobile Bookmarks" folder thereby creating a better 1:1 bookmark sync with Firefox mobile and desktop.

This approach will also work for the various Firefox forks such as Floorp, LibreWolf, Waterfox, Mercury .etc, 
