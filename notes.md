There is always so much more to coding than I think

Run a deployment script:
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon (in the console)
-k -> credential file
-h -> domain name
-s -> name of application


# HTML
The first thing you noticed is that this looks like a simple text document. That is because text is valid HTML. In order to provide structure to our text we need to introduce the concept of elements and their associated tag representation.

## Elements and tags
HTML elements are represented with enclosing tags that may enclose other elements or text. For example, the paragraph element, and its associated tag (p), designate that the text is a structural paragraph of text. When we talk about tags we are referring to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document. Tags are delimited with the less than (<) and greater than (>) symbols. A closing tag will also have a forward slash (/) before its name.
```
<p>Hello world</p>
```
We can continue adding structure to the page with additional elements. Each of these elements may contain other elements that provide the structure of our web page. The html element represents the top level page structure. The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content. These additional elements result in the following HTML page.
```
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```
However, when we render the HTML in a browser it would look exactly the same as our original simple text example. The reason for that is that HTML is almost completely about structure. The visual appearance of the web page won't really change until we start styling the page with CSS.

HTML Hello world

## Attributes
Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (') or double quotes (") to delimit attribute values.
```
<p id="hello" class="greeting">Hello world</p>
```
## Hyperlinks
One of the core features that made the web so successful was the ability to create hyperlinks that take you from one page to another another with a simple click. A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href). A hyperlink to BYU's home page looks like this:
```
<a href="https://byu.edu">Go to the Y</a>
```
## Complete example
HTML defines a header (<!DOCTYPE html>) that tells the browser the type and version of the document. You should always include this at the top of the HTML file. We can now add the header, some attributes, and more content to our document for a full example.
```
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```
## Layout Example
```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```

Intro HTML Example

Notice that the rendered document has almost no styling. That is because the entire purpose of HTML is to provide content and structure. The layout of the content is left almost entirely up to Cascading Stylesheets (CSS). When styling was introduced with CSS, all of the HTML elements that defined style such as font, strike, and plaintext were deprecated.

Common elements
Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

element	meaning
html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page
Comments
You can include comments in your HTML files by starting the comment with <!-- and ending it with -->. Any text withing a comment block will be completely ignored when the browser renders it.

<!-- commented text -->
Special characters
HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the entity syntax. For example, to display a less than symbol (<) you would instead use the less than entity (&lt;). You can also use the entity syntax to represent any unicode character.

Character	Entity
&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;

# CSS Notes
## Three ways to associate CSS with HTML
1. Use style attribute of an HTML element --> `<p style="color:green">text here</p>`
2. Use HTML style element to define CSS rules within the document --> 
```
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
3. Use HTML link element to create a hyperlink to an external file containing the CSS rules --> `<link rel="stylesheet" href="styles.css" />`
styles.css -->
```
p {
  color: green;
}
```
Using the link element is preferred

## Selecting the correct elements
If you want to change the font of everything, you would want to select everything with the body (or *wildcard) like this --> 
```
body {
  font-family: sans-serif;
}
```
Box Model and Associated CSS Lingo
![Image of box model and associated CSS lingo](https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg)

### Combinators
1. Any section that is a descendant of a body --> 
`body section`
2. Any that is a direct child of a section --> 
`section > p`
3. Any p that has a div sibling --> 
`p ~ div`
4. Any p that has an adjacent diiv sibling --> 
`p + div`

### Class Selectors
If we wanted to select everything of a specific class, we would use the period notation --> 
```
.summary {
  font-weight: bold;
}
```
The above code selects everything with the defined class of `summary`
The following code bolds all paragraphs with the class of `summary` -->
```
p.summary {
  font-weight: bold;
}
```

### ID Selectors
These reference the ID of an element. All IDs should be unique within an HTML document, so this targets a specific element. For example, if the `p` physics had the id `physics`, then this would select that paragraph and add a purple border -->
```
#physics {
  border-left: solid 1em purple;
}
```

### Attribute Selectors
Attribute selectors select any element with that attribute OR with a specific value for that specific attribute OR a specific part of a string for that specific attribute (using *). Use the element name and then `[]`, enclosing the desired attribute and the value (opt) -->
```
p[class='summary'] {
  color: red;
}
```

### Pseudo Selectors
Pseudo selectors select based on positional relationships like mouse interactions. Use the element name and then a `:` and then the pseudo selector. For example, this piece of code causes the purple bar to appear next to the section only when the section is being hovered over by the mouse -->
```
section:hover {
  border-left: solid 1em purple;
}
```
You can find a list of other pseudo selectors [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Fonts
There are 4 major families of fonts that can be defined in the `font-family` property: `Serif`, `san-serif`, `fixed`, and `symbol`.

 ### Importing Fonts
 If you would like to import a font instead of hosting font files on your server, use an inport statement like this:
 ```
 @import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

## Animation
Here is an example of animation with key frames:
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

## Responsive Design
To prevent the website from automatically scaling, use this meta tag at the top of your code:
```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```
The float css property moves an element to the left or the right of its container element and allows inline elements to wrap around it (like with an image or something). Say for example `aside` is an image and we wanted the text to wrap around it. This piece of code would do the job:
```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```
Possible display values:
1. none - do not display
2. block - display element with width of parent element (p and div default)
3. inline - display element with sidth only as big as its content (b or span default)
4. flex - display this element's children in a flexible notation
5. grid - display this element's children in a grid notation (left (A) right (B), lower left(C) lower right(D))


# JavaScript Notes
## Variables
let statement = temporary variable --> `let x = 1;`
const statement = permanent variable --> `const y = 2;`

## Operators and Syntax
true - true
false - false
=== - equality operator
&& - and
|| - or
! - not

for --> 
```
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```
do while --> 
```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
while -->
```
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

The `for in` statement for an object (dictionary) iterates over the property names (keys) like so:
```
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

The `for in` statement for an array (list) iterates over the indices in the array like so:
```
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```
Conversely, the `for of` statement iterates over any iterable's property *values* like so:
```
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```
`break` and `continue` statements apply just as with other programming languages.
``` let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```
Conditionals can be formatted in two ways. The first way is similar to R formatting:
```
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
This second way is a more compact version of an `if else` statement using the ternary operator `?`. It is formatted like "condition `?` if true predicate `:` if false predicate". For example:
```
a === 1 ? console.log(1) : console.log('not 1');
```
One example of an `if` statement using boolean operators is as follows:
```
if (true && (!false || true)) {
  //...
}
```

## String Methods
`length` - number of characters in a string
`indexOf` - the starting index of a given substring
`split` - split the string into an array on the given delimiter string
`startsWith` - true if the string has a given prefix
`endsWith` - true if the string has a given suffix
`toLowerCase` - converts all characters to lowercase

## Functions
Define and call a function like this:
```
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```

### Arrow Functions
Just look at these examples I guess, maybe I'll get it someday:
```
() => 3;
```
^ no parameters and always returns 3.
```
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
^ These notations are equivalent apperently
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```
^ Special rules with return statement

## Array Methods
push - basically to append to an array


# HTTPS

## Requests and Responses
Syntax of a request:
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
Example of a request:
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
Syntax of a response:
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
Example of a response:
```
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

## HTTPS verbs
- `GET`: to get requested resource
- `POST`: to create a new resource; body of request contains resource; response should include the unique id of the newly created resource
- `PUT`: to update a resource; URL path or http header or body must contain the unique id of the resource being updated; the body of the request should contain the updated resource
- `DELETE`: to delete a resource; either the URL path or the header should contain the unique id of the resource to be deleted
- `OPTIONS`: to get metadata about a resource; returns http header

## Status Codes
- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Examples:
Code	Text	Meaning
100	Continue	The service is working on the request
200	Success	The requested resource was found and returned as appropriate.
201	Created	The request was successful and a new resource was created.
204	No Content	The request was successful but no resource is returned.
304	Not Modified	The cached version of the resource is still valid.
307	Permanent redirect	The resource is no longer at the requested location. The new location is specified in the response location header.
308	Temporary redirect	The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400	Bad request	The request was malformed or invalid.
401	Unauthorized	The request did not provide a valid authentication token.
403	Forbidden	The provided authentication token is not authorized for the resource.
404	Not found	An unknown resource was requested.
408	Request timeout	The request takes too long.
409	Conflict	The provided resource represents an out of date version of the resource.
418	I'm a teapot	The service refuses to brew coffee in a teapot.
429	Too many requests	The client is making too many requests in too short of a time period.
500	Internal server error	The server failed to properly process the request.
503	Service unavailable	The server is temporarily down. The client should try again with an exponential back off.

## Common HTTP Header Examples
Header	Example	Meaning
Authorization	Bearer bGciOiJIUzI1NiIsI	A token that authorized the user making the request.
Accept	image/*	What content format the client accepts. This may include wildcards.
Content-Type	text/html; charset=utf-8	The format of the response content. These are described using standard MIME types.
Cookie	SessionID=39s8cgj34; csrftoken=9dck2	Key value pairs that are generated by the server and stored on the client.
Host	info.cern.ch	The domain name of the server. This is required in all requests.
Origin	cs260.click	Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin	https://cs260.click	Server response of what origins can make a request. This may include a wildcard.
Content-Length	368	The number of bytes contained in the response.
Cache-Control	public, max-age=604800	Tells the client how it can cache the response.
User-Agent	Mozilla/5.0 (Macintosh)	The client application making the request.

## HTTP Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the `accept` header.

## Fetch
How to use the fetch command in your JS according to the chuck Norris code pen example:
(html was `<pre></pre>` and css was `pre {...}`)
```
const url = "https://api.chucknorris.io/jokes/random";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = JSON.stringify(
      response,
      null,
      "  "
    );
  });
  ```

  ## Node
  You install the package using `npm install` followed by the name of the package. If you again examine the contents of the `package.json` file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the `npm uninstall <package name here>` console command.

Main Steps for creating a project:
1. Create your project directory
2. Initialize it for use with NPM by running `npm init -y`
3. Make sure `.gitignore` file contains `node-modules`
4. Install any desired packages with `npm install <package name here>`
5. Add `require('<package name here>')` to your application's JavaScript
6. Use the code the package provides in your JavaScript
7. Run your code with `node index.js`

## For the Final
Linux Daemon CAN fork other processes
- Executes independent of a user
- PM2 is an example
- Starts when computer is rebooted
Default in a mongodb query is an ‘and’ which means both clauses (regular expression) must be satisfied
Purpose of jsx isn’t to combine css, html, and JS
You can use fetch in front and back end
‘Language’ is not a standard http header (Cookie, Host, and Content-Type)
LOOK at COMMONLY USED HTTP HEADERS
Port 80 is reserved for HTTP
Port 443 is reserved for HTTPS
Port 22 is reserved for SSH
Status codes:
100 - info
200 - success
300 - redirects or caching
400 - client errors
500 - server errors

Cookies allow a server to store data on a client