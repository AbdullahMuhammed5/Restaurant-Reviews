
## Project Overview: 

For the **Restaurant Reviews** projects, i converted a static webpage to a mobile-ready web application. In **Stage One**, i have been given a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Also i added a service worker to begin the process of creating a offline experience for  users.

## Running the project: 

In order to view the project in the browser, there is to ways to do that : 

1) live server
you have to install npm in the project directory and also you need a live server.
You can install npm very easily by runing this command `npm install` in project directory.
after you installed npm run this command in the project directory `npm install -g live-server` to install live server.

in dbhelper.js file make sure your port is 8080.

Now enter this command in your command line `live-server`, project should open on your beowser automatically.

2) paython server
In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
