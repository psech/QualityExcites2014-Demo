# Quality Excites 2014 Demo Application

This project is based on [Angular-Seed](https://github.com/angular/angular-seed) application.

You can use it to get familiar with some basic features of [Protractor](https://github.com/angular/protractor)
end-to-end testing framework.


## Getting Started

To get you started you can simply clone the QualityExcites2014-Demo repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test QualityExcites2014-Demo. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone QualityExcites2014-Demo

Clone the QualityExcites2014-Demo repository using [git][git]:

```
git clone https://github.com/psech/QualityExcites2014-Demo.git
cd QualityExcites2014-Demo
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
QualityExcites2014-Demo changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

        
    QUALITYEXCITES2014-DEMO
    ├───app                             --> all of the files to be used in production
    │   │   index.html                    --> app layout file (the main html template file of the app)
    │   │
    │   ├───css                         --> css files
    │   │       app.css                   --> default stylesheet
    │   │       demo.css                  --> demo stylesheet
    │   │
    │   ├───img                         --> image files
    │   │
    │   ├───js                          --> javascript files
    │   │       app.js                    --> application
    │   │       controllers.js            --> application controllers
    │   │
    │   └───partials                    --> angular view partials (partial html templates)
    │   │       *.html                    --> partial files
    │
    └───test                             --> test config and source files
        │   protractor-conf.js             --> config file for running e2e tests with Protractor from npm
        │   seleniumGrid-conf.js           --> config file for running e2e tests with Protractor manually
        │
        ├───e2e                          --> end-to-end specs
        │   │   *Spec.js                   --> tests
        │   │
        │   └───UIModel                  --> Page Object Model files
        │       │   common.js              --> common methods
        │       │   uiModel.js             --> main file, starting point
        │       │
        │       ├───Controls             --> uiModel controls
        │       │       *Ctrl.js           --> files describing controls
        │       │
        │       └───Views                --> uiModel views
        │               *View.js            --> files describing views
        │
        └───report                        --> test reports


## Testing

The QualityExcites2014-Demo application contains only End to End tests.

### End to end testing

The QualityExcites2014-Demo app comes with end-to-end tests written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `test/protractor-conf.js` and `seleniumGrid-conf.js`
* the end-to-end tests are found in `test/e2e/`
* the Page Object Model files are in `test/e2e/UIModel/`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

####Run test by builtin automatic script####

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

####Run tests manually with protractor installed globally####

To run protractor tests in manual way tou ned to have protractor installed globally in your system:

```
npm install -g protractor
```

To update and start WebDriver:

```
webdriver-manager update
webdriver-manager start
```

To sent tests to WebDriver place following line into protractor config:

```
seleniumAddress: 'http://localhost:4444/wd/hub'
```

To start test type:

```
protractor <options> <path_to_config_file>
```

####Run tests manually with protractor installed locally####

Make sure you have protractor installed within the project (/node_modules/protractor)

To update and start WebDriver:

```
<path_to_project>/mode_modules/protractor/bin/webdriver-manager update
<path_to_project>/mode_modules/protractor/bin/webdriver-manager start
```

or for Windows

```
node <path_to_project>\mode_modules\protractor\bin\webdriver-manager update
node <path_to_project>\mode_modules\protractor\bin\webdriver-manager start
```

To sent tests to WebDriver place following line into protractor config:

```
seleniumAddress: 'http://localhost:4444/wd/hub'
```

To start test type:

```
<path_to_project>/mode_modules/protractor/bin/protractor <options> <path_to_config_file>
```

or for Windows

```
node <path_to_project>\mode_modules\protractor\bin\protractor <options> <path_to_config_file>
```

### Running the App during Development

The QualityExcites2014-Demo project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server