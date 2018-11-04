# org-slides
Convert Emacs Org files to slideshows!

## History
Org Slides came about after personally exploring various options to better customize the styling of an HTML-exported Org document. I wanted something that was simple to configure, beautiful, fast, and extendable. Org Slides is simply some custom JavaScript and CSS files you can apply to your exported HTML file. There are no dependencies, no additional packages to install, just good ol' Emacs Org Mode.

## Instructions
To use, simply add the following to the top of your Org document you would like to turn into an HTML slideshow:
```
#+OPTIONS: html-style:nil
#+HTML_HEAD: <link rel="stylesheet" type="text/css" href="org-slides-default.css" />
#+HTML_HEAD_EXTRA: <script src="jquery-3.2.1.min.js"></script>
#+HTML_HEAD_EXTRA: <script src="org-slides.js"></script>
```
and make sure to include the .js and .css files in the same directory as your exported HTML file.

###NOTE for Exporting to HTML5
If you want to have Org Mode export as an HTML5 doctype, set the org-html-doctype variable to: `(setq org-html-doctype "html5")`

## Noteworthy mentions
[orgcss](https://github.com/gongzhitaao/orgcss)

[orgmode-slideshow](http://www.mauc.nl/presentations/test.html)

[bestowed](https://github.com/robrohan/bestowed)
