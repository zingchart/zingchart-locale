# ZingChart Locale

This repository contains example locale variables you can include in your ZingChart library.

The locale render method option lets you change the labels used for various elements of a chart, including the context-menu, and the bug reporter menu. This can really improve usability and make your charts feel really localized.
Within your JSON, but outside the graphset object, include `“locale”:”MYLOCALE”` in which MYLOCALE is the name used in your locale JavaScript object, which we will use to set the labels.

## Example:
```
zingchart.i18n.en_us =  {
	'rtl' : false,
	'decimals-separator' : '.',
	'thousands-separator' : '',
	'menu-reload' : 'Reload',
	'menu-print' : 'Print Chart',
	'menu-viewaspng' : 'View As PNG',
	'menu-viewasjpg' : 'View As JPG',
	'menu-downloadpdf' : 'Download PDF',
	'menu-downloadsvg' : 'Download SVG',
	'menu-exportdata' : 'Export Data',
	'menu-zoomin' : 'Zoom In',
	'menu-zoomout' : 'Zoom Out',
	'menu-viewall' : 'View All',
	'menu-viewsource' : 'View Source',
	'menu-bugreport' : 'Submit Bug',
	'menu-switchto2d' : 'Switch To 2D',
	'menu-switchto3d' : 'Switch To 3D',
	'menu-showguide' : 'Show Guide',
	'menu-hideguide' : 'Hide Guide',
	'menu-switchtolin' : 'Show Linear Scale',
	'menu-switchtolog' : 'Show Log Scale',
	'menu-fullscreen' : 'Full Screen',
	'menu-exitfullscreen' : 'Exit Full Screen',
	'menu-goback' : 'Go Back',
	'menu-goforward' : 'Go Forward',
	'date-formats' : {
		'msecond' : '%d %M %Y<br>%g:%i:%s %A<br>%q ms',
		'second' : '%d %M %Y<br>%g:%i:%s %A',
		'minute' : '%d %M %Y<br>%g:%i %A',
		'hour' : '%d %M %Y<br>%g %A',
		'day' : '%d %M %Y',
		'month' : '%M %Y',
		'year' : '%Y'
	},
	'days-short' : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	'days-long' : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	'months-short' : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	'months-long' : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	'sync-wait' : 'Wait...',
	'export-wait' : 'Exporting...',
	'progress-wait-long' : 'Wait. Loading...',
	'progress-wait-short' : 'Wait...',
	'progress-wait-mini' : '...',
	'error-header' : 'An Error Has Occured',
	'error-message' : 'Error Message:',
	'error-close' : 'Close',
	'bugreport-header' : 'Submit Bug Report',
	'bugreport-senddata' : 'Send JSON Data',
	'bugreport-sendcapture' : 'Send Graph Capture',
	'bugreport-yourcomment' : 'Your Comment:',
	'bugreport-jsondata' : 'JSON Data:',
	'bugreport-youremail' : 'Your Email Address',
	'bugreport-infoemail' : 'if you want to receive via email our reply to your problem',
	'bugreport-emailmandatory' : 'Email address is mandatory...',
	'bugreport-submit' : 'Submit',
	'bugreport-cancel' : 'Cancel',
	'bugreport-confirm' : 'Your bug report was sent.\n\nThank you!',
	'about-close' : 'Close',
	'viewsource-jsonsource' : 'Parsed JSON',
	'viewsource-originalsource' : 'Original JSON',
	'viewsource-close' : 'Close',
	'viewsource-apply' : 'Apply',
	'viewimage-close' : 'Close',
	'legend-pagination' : 'Page %page% of %pages%'
};

zingchart.render({
	id: 'myChart',
	data: {
  	locale: 'en_us'
  	graphset:[{
  		type: 'line',
  		series: [{
  			values: [1,2,3,4,5];
  		}]
  	}]
  }
});
```
## Installation
To ease including locales into your environment, we have provided a few different ways to download this package.
  1. Download the package directly from [github](https://github.com/zingchart/zingchart-locale/archive/master.zip)
  2. Install with bower using the command `bower install zingchart`.
  3. Install with npm using the command `npm install zingchart`.

## Usage

To ease including locales into your environment, we have provided a few different ways to use into your application.

### Script inclusion

  1. After zingchart has been loaded, include the desired locale into your html file after zingchart has been loaded.

  ```html
   ...
   <script src="./path/to/zingchart.min.js"></script>
   <script src="./path/to/locales/zingchart-i18n-en-us.min.js"></script>
   ...

  ```
  2. Reference the locale key from the file loaded in your json. In this case, 'en_us' will be our key
  ```html
    zingchart.render({
    	id: 'myChart',
    	data: {
      	locale: 'en_us'
      	graphset:[{
      		type: 'line',
      		series: [{
      			values: [1,2,3,4,5];
      		}]
      	}]
      }
    });
  ```

### Including it as a module (npm)
This method is useful for those who want to package up their locales with a build tool such as browserify.

  1. After zingchart has been loaded, include the desired module and store it into a variable inside of `zingchart.i18n.`.

  ```js
    var zingchart = require('zingchart');
    zingchart.i18n.en_us = require('zingchart-locale').en_us;
  ```

  2. Reference the locale key from the file loaded in your json. In this case, 'en_us' will be our key.

  ```html
    zingchart.render({
    	id: 'myChart',
    	data: {
      	locale: 'en_us'
      	graphset:[{
      		type: 'line',
      		series: [{
      			values: [1,2,3,4,5];
      		}]
      	}]
      }
    });
  ```


## Contributing
Please follow the example file `zingchart-i18n-en-us.js` as a template which has the required structure necessary for the bower and npm package managers. Your filename should be prefixed with `zingchart-i18n-` and an appropriate language abbreviation, while the variable with underscores as necessary e.g. `zingchart.i18n.en_us`
