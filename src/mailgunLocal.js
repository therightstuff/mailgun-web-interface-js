"use strict";

/*
	The node.js modules to be ported to the client must be added
	to the window.mailgunLocal object.

    "npm run build" must be run after updating this module

    Once bundle has been included in html page with following directive
        <script src="mailgunLocal.js"></script>
    javascript calls can be made to mailgunLocal.* eg
        let mailgun = window.mailgunLocal({
            apiKey: credentials.apiKey,
            domain: credentials.domain
        });
*/

const formData = require('form-data');
const Mailgun = require('mailgun.js');
// update the browser's mailgunLocal object
window.mailgunLocal = new Mailgun(formData);
