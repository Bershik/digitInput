Simple jQuery plugin for only digits input.
==============================

Overview
--------
Very first release of this simply plugin.

This is a modifying input plugin for the jQuery javascript library. It allows a user to more easily enter only digits into inputs. It has been tested on Internet Explorer, Firefox, Safari, Opera, and Chrome.

### Usage

First, include the jQuery and digit input javascript files.

  ```html
  <script src="jquery.js" type="text/javascript"></script>
  <script src="jquery.digitInput.js" type="text/javascript"></script>
  ```

Next, call the digitInput function for those inputs you wish to have masked.

  ```html
  jQuery(function($){
    $('.js-digits').digits();
  });
  ```
Live [DEMO](https://jsfiddle.net/Bershik/bpjb5f11/1/) on jsFiddle.

Options
--------
It is possible to define some optios.

### selectable
Allows to disable value selection in input.
Default: true;

Example:
  ```html
  $('.js-digits').digits({selectable: false});
  ```

### insert
Allows to disable insert value in input by copy/paste.
Default: true;

Example:
  ```html
  $('.js-digits').digits({insert: false});
  ```

### dragndrop
Allows to disable insert value in input by drag'n'drop.
Default: true;

Example:
  ```html
  $('.js-digits').digits({dragndrop: false});
  ```

### inputErrorClass
There is a possibility to define class name for input when pasting value is not a digits only if pasting value with copy/paste or drag'n'drop is allowed.
Default: '';

Example:
  ```html
  $('.js-digits').digits({inputErrorClass: 'error-input'});
  ```

### errorElement
There is a possibility to define tag element for error text behind input when pasting value is not a digits. Only if pasting value with copy/paste or drag'n'drop is allowed.
Default: 'span';

Example:
  ```html
  $('.js-digits').digits({errorElement: 'p'});
  ```

### errorClass
There is a possibility to define class name for error text behind input when pasting value is not a digits. Only if pasting value with copy/paste or drag'n'drop is allowed.
Default: '';

Example:
  ```html
  $('.js-digits').digits({errorClass: 'error'});
  ```

### errorText
There is a possibility to define error text behind input when pasting value is not a digits. Only if pasting value with copy/paste or drag'n'drop is allowed.
Default: '';

Example:
  ```html
  $('.js-digits').digits({errorText: 'only digits allowed!'});
  ```
