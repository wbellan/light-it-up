Light It Up
----------------

Just getting started, but this app, once it's done, will be able to light up your Hue lights to your favorite team colors when they score, win, etc...

Not much going on here, yet. It fetches all lights, and sets the color to Burnt Orange. Not much, I know. 

To get all the required libraries (This does assume you have NodeJS and NPM installed, once you clone the project, cd into project directory, and run:
```
npm install
```

This is for local API Usage only, so to get it working, you need ot get the IP address of your Philips Hue Bridge. To do this, you can log into your Hue account, nd select "Bridge" --> "Show more brdige details".

Open a browser, and go to:
```
http://{BRIDGE_IP_ADDRESS}/debug/clip.html
```

From here, you can get you a username to make Hue API calls. 

In the UI, for URL, add ___/api___ and in the Message Body field, add __{{"devicetype":"light_it_up_app#iPhone"}}__, and lastly, select "POST" - the command response will display the following:
```
[
	{
		"success": {
			"username": "_some_long_code_"
		}
	}
]
```

In the index.js file, set the following:
```
const host = "BRDIGE_IP_ADDRESS";
const username = "username_value_from_command_response";
```

Yes, I know this isnt rocket science or any type of "best practice", but it is the quick-and-dirty" start :)
