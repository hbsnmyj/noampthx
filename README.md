# Noampthx


Noampthx is a [Firefox](https://www.mozilla.org/en-US/firefox) extension redirects the cached [Accelerated Mobile Pages ](https://www.ampproject.com) on [Google](https://www.google.com) to their uncached version.

Accelerated Mobile Pages (AMP) aims at providing better mobile page browsing experience by limit the page loading time and functionalities. To further accelerate things, Google also caches certain AMP pages, and load the results in embedded frames on its search engine. However, this creates compatibility issues sometimes (for example, if you are using iOS Firefox user-agent for [better searching experience](https://addons.mozilla.org/en-US/firefox/addon/firefox-ios-ua-on-google/), AMP pages will not load properly), and some experience issues, for example, the page location is from google.com instead of the actual domain, creating difficulties for sharing.

Noampthx detects when a google.com cached AMP page is displayed/accessed in the following cases:

- when a google.com cached AMP page is accessed directly.
- when such a cached AMP page is displayed on google.com (by detecting the pushState call to change window.location).

and redirects the page to its uncached (but still AMP-based) version. It does not, however, attempt to access the non-AMP version of the page. For that functionality, see [amp2html](https://github.com/da2x/amp2html).

