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

