expressworks
============

Express.js workshop based on [workshopper](https://github.com/rvagg/workshopper) and inspired by [stream-adventure](https://github.com/substack/stream-adventure) by [@substack](https://twitter.com/substack) and [@maxogden](https://twitter.com/maxogden). ExpressWorks will provide you with tasks and hints. You write the solutions to these problems. Then, after you wrote a solution as an Express.js app, ExpressWorks will verify your solution to the problem.

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/hello-world.png)

## Contributors


```
    19  Christophe Porteneuve
     3  Harry Moreno
     3  Charlotte Spencer
     2  Thomas Burette
     2  intrueder
     2  Kevin Jayanthan
     1  Louis Pilfold
     1  Rich Trott
     1  Richard Kho
     1  Ryan Kois
     1  Timothy Gu
     1  Wojciech Gawronski
     1  brownman
     1  Alessandro Lensi
     1  raj
     1  Ayman Mahfouz
     1  Daniel Geier
     1  Dylan Smith
     1  Finn
     1  Giuseppe
     1  Jessie Shi
     1  Jonny Arnold
```

Make a PR to see your name here. ;-)

PS: via `git shortlog -n -s`

## Installation (recommended)

Recommended global installation:

```bash
$ npm install express
$ npm install -g expressworks
$ expressworks
```


If you see errors, try:

```bash
$ sudo npm install -g expressworks
```

## Local Installation (advanced)

Run & install locally:

```bash
$ mkdir node_modules
$ npm install expressworks
$ cd node_modules/expressworks
$ node expressworks
```

# Usage
*Note*: ExpressWorks depends on a local copy of express being available. Make sure to do
`npm install express` to do the exercises.

ExpressWorks understands these commands:

```
Usage

  expressworks
    Show a menu to interactively select a workshop.
  expressworks list
    Show a newline-separated list of all the workshops.
  expressworks select NAME
    Select a workshop.
  expressworks current
    Show the currently selected workshop.
  expressworks run program.js
    Run your program against the selected input.
  expressworks verify program.js
    Verify your program against the expected output.
```

# Reset

If you want to reset the list of completed tasks, clean the `~/.config/expressworks/completed.json` file.

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/finished.png)

# More Information

Check out [Express.js Guide](http://expressjsguide.com).

# Steps


## Hello World

Create an Express.js app that runs on localhost:3000, and outputs "Hello World!" when somebody goes to root '/home'.

`process.argv[2]` will be provided by expressworks to you, this is the port number.

## Jade

Create an Express.js app with a home page (/home) rendered by jade template engine, that shows current date (toDateString).


## Good Old Form

Write a route ('/form') that processes HTML form input (<form><imput name="str"/></form>) and prints backwards the str value.

## Static

Apply static middleware to server index.html file without any routes. The index.html file is provided and usable via `process.argv[3]` value of the path to it. However, you can use your own file with this content:

```html
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/main.css"/>
    </head>
    <body>
      <p>I am red!</p>
    </body>
  </html>
```

## Stylish CSS

Style your HTML from previous example with some Stylus middleware. The path to main.styl file is provided in `process.argv[3]` or you can create your own file/folder from these:

```css
  p
    color red
```

The index.html file:

```html
  <html>
    <head>
      <title>expressworks</title>
      <link rel="stylesheet" type="text/css" href="/main.css"/>
    </head>
    <body>
      <p>I am red!</p>
    </body>
  </html>
```

## Param Pam Pam

Create an Express.js server that processes PUT `/message/:id` requests, e.g., PUT `/message/526aa677a8ceb64569c9d4fb`.

As the response of this request return id SHA1 hashed with a date:

```javascript
  require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + id)
    .digest('hex')
```

## What's in Query

Write a route that extracts data from query string in the GET `/search` URL route, e.g., `?results=recent&include_tabs=true`, and then transforms outputs it back to the user in JSON format.

## JSON Me

Write a server that reads a file (file name is passed in `process.argv[3]`), parses it to JSON and outputs the content to the user with `res.json(object)`.

