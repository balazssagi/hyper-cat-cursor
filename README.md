An extension for [Hyper](https://github.com/zeit/hyper) to replace the cursor with a cat emoji sequence. Why? Because I was bored.

![Animated gif of a command line interface with a cat emoji animation as cursor](https://raw.githubusercontent.com/balazssagi/hyper-cat-cursor/master/preview-1.gif)

# Installation

Add `hyper-cat-cursor` to the `plugins` array of your `.hyper.js` file.

# Options

You may configure the extension by adding a `catCursor` object to the `.hyper.js` file's `config` object. Use the following options:

```javascript
catCursor: {
  speed: 3000, // length of the sequence in milliseconds
  fontSize: 60, // font size of the cat in css pixels
  cats: ['🐱', '🙀', '😾', '😿', '😹', '😼', '😺', '😻', '😸', '😽'] // custom cat sequence. only cats are accepted, of course
},
```

So you can easily create abominations like this:

![Animated gif of a command line interface with a cat emoji animation as cursor](https://raw.githubusercontent.com/balazssagi/hyper-cat-cursor/master/preview-2.gif)
