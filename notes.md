There is always so much more to coding than I think

Run a deployment script:
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon (in the console)
-k -> credential file
-h -> domain name
-s -> name of application

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
push - 