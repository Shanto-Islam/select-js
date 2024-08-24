const select = (type, context = document) => {
  if (typeof type !== 'string') {
    throw new Error('Selector must be a string.');
  }
  
  if (!(context instanceof Element || context === document)) {
    throw new Error('Context must be a DOM element or document.');
  }

  const elements = context.querySelectorAll(type);
  
  if (elements.length === 0) {
    console.warn(`No elements found for selector: ${type}`);
    return null;
  }
  
  const api = {
    elements: Array.from(elements),
    addClass(className) {
      if (typeof className !== 'string') {
        throw new Error('Class name must be a string.');
      }
      this.elements.forEach(el => el.classList.add(className));
      return this; // Enable chaining
    },
    removeClass(className) {
      if (typeof className !== 'string') {
        throw new Error('Class name must be a string.');
      }
      this.elements.forEach(el => el.classList.remove(className));
      return this;
    },
    toggleClass(className) {
      if (typeof className !== 'string') {
        throw new Error('Class name must be a string.');
      }
      this.elements.forEach(el => el.classList.toggle(className));
      return this;
    },
    setText(text) {
      if (typeof text !== 'string') {
        throw new Error('Text must be a string.');
      }
      this.elements.forEach(el => el.textContent = text);
      return this;
    },
    on(event, handler) {
      if (typeof event !== 'string') {
        throw new Error('Event must be a string.');
      }
      if (typeof handler !== 'function') {
        throw new Error('Handler must be a function.');
      }
      this.elements.forEach(el => el.addEventListener(event, handler));
      return this;
    },
    setAttribute(name, value) {
      if (typeof name !== 'string' || typeof value !== 'string') {
        throw new Error('Both name and value must be strings.');
      }
      this.elements.forEach(el => el.setAttribute(name, value));
      return this;
    },
    removeAttribute(name) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string.');
      }
      this.elements.forEach(el => el.removeAttribute(name));
      return this;
    },
    getAttribute(name) {
      if (typeof name !== 'string') {
        throw new Error('Name must be a string.');
      }
      return this.elements.length > 0 ? this.elements[0].getAttribute(name) : null;
    },
    addStyle(style) {
      if (typeof style !== 'object' || Array.isArray(style)) {
        throw new Error('Style must be an object.');
      }
      this.elements.forEach(el => Object.assign(el.style, style));
      return this;
    },
    removeStyle(styleName) {
      if (typeof styleName !== 'string') {
        throw new Error('Style name must be a string.');
      }
      this.elements.forEach(el => el.style.removeProperty(styleName));
      return this;
    },
    append(html) {
      if (typeof html !== 'string') {
        throw new Error('HTML must be a string.');
      }
      this.elements.forEach(el => el.insertAdjacentHTML('beforeend', html));
      return this;
    },
    prepend(html) {
      if (typeof html !== 'string') {
        throw new Error('HTML must be a string.');
      }
      this.elements.forEach(el => el.insertAdjacentHTML('afterbegin', html));
      return this;
    },
    remove() {
      this.elements.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      return this;
    },
    toggleVisibility() {
      this.elements.forEach(el => {
        el.style.display = el.style.display === 'none' ? '' : 'none';
      });
      return this;
    },
    replaceWith(html) {
      if (typeof html !== 'string') {
        throw new Error('HTML must be a string.');
      }
      this.elements.forEach(el => {
        if (el.parentNode) {
          const newNode = document.createRange().createContextualFragment(html);
          el.parentNode.replaceChild(newNode, el);
        }
      });
      return this;
    },
  };
  
  return elements.length === 1 ? elements[0] : api;
}

const selectAll = (type, context = document) => {
  if (typeof type !== 'string') {
    throw new Error('Selector must be a string.');
  }
  
  if (!(context instanceof Element || context === document)) {
    throw new Error('Context must be a DOM element or document.');
  }
  
  const elements = context.querySelectorAll(type);
  
  if (elements.length === 0) {
    console.warn(`No elements found for selector: ${type}`);
  }
  
  return Array.from(elements);
}
