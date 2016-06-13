# ZingChart Locale

This repository contains example locale variables you can include in your ZingChart library.

The locale render method option lets you change the labels used for various elements of a chart, including the context-menu, and the bug reporter menu. This can really improve usability and make your charts feel really localized.

Within your JSON, but outside the graphset object, include `“locale”:”MYLOCALE”` in which MYLOCALE is the name used in your locale JavaScript object, which we will use to set the labels.

## Example:

```
zingchart.i18n.en-us =  {
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

var myConfig = {
	locale: 'en-us'
	graphset:[{
		type: 'line',
		series: [{
			values: [1,2,3,4,5];
		}]
	}]
};

zingchart.render({
	id: 'myChart',
	data: myConfig
});
```


## Contributing
Please follow the example file `zingchart-i18n-en-us.js` as a template which has the required structure. Your filename should be prefixed with `zingchart-i18n-` and an appropriate language abbreviation.
