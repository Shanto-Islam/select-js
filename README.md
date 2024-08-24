
# Select.js

[![npm version](https://badge.fury.io/js/%40shanto-islam%2Fselect-js.svg)](https://badge.fury.io/js/%40shanto-islam%2Fselect-js)

`select-js` is a lightweight JavaScript mini-library for DOM selection and manipulation. It provides a simple and intuitive API for selecting elements, chaining methods, and handling common DOM tasks with ease.

## Features

- Simple and intuitive API
- Chainable methods for cleaner code
- Lightweight and fast
- Built-in error handling

## Installation

### Via npm

```bash
npm install @shanto-islam/select-js
```

### Via CDN

You can include `select-js` directly in your project using a CDN:

**jsDelivr:**

```html
<script src="https://cdn.jsdelivr.net/npm/@shanto-islam/select-js/dist/select-js.min.js"></script>
```

**unpkg:**

```html
<script src="https://unpkg.com/@shanto-islam/select-js/dist/select-js.min.js"></script>
```

## Usage

### Basic Example

Include the `select-js` library in your HTML file and start selecting and manipulating DOM elements:

```html
<script src="https://cdn.jsdelivr.net/npm/@shanto-islam/select-js/dist/select-js.min.js"></script>
<script>
 // Select elements and chain methods for manipulation
  select('.my-class')
    .addClass('active')
    .setText('Hello, World!')
    .on('click', () => alert('Clicked!'));
</script>
```

### Selecting Elements

Select an element or elements from the DOM:

```javascript
const element = select('div');  // Selects the first <div> element
const elements = select('.class-name');  // Selects all elements with class 'class-name'
```

### Manipulating Elements

Once you've selected elements, you can manipulate them using the following methods:

```javascript
select('p').addClass('highlight');  // Adds 'highlight' class to all <p> elements
select('.highlight').removeClass('highlight');  // Removes 'highlight' class from all elements
select('p').toggleClass('active');  // Toggles 'active' class on all <p> elements
select('#title').setText('New Title');  // Sets the text of the element with id 'title'
select('button').on('click', () => alert('Button clicked!'));  // Adds click event
```

### Select All Elements

To select all matching elements within a context, use the `selectAll` function:

```javascript
const allItems = selectAll('li');  // Selects all <li> elements
const itemsInDiv = selectAll('li', document.querySelector('#container'));  // Selects all <li> elements inside #container
```

## Documentation

For detailed usage instructions and examples, please visit the [documentation](https://shantoislamdev.web.app/select-js/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Shanto-Islam/select-js/blob/main/LICENSE) file for details.

## Author

Shanto Islam

## Issues

If you encounter any issues or have any questions, feel free to open an issue on the [GitHub Issues page](https://github.com/Shanto-Islam/select-js/issues).

