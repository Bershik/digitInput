/*
    jQuery Digit Input Plugin
    Copyright (c) 2017 Andrew Bersh
    Licensed under the MIT license
    Version: 0.0.1
*/
(function($) {

	$.fn.digits = function(options) {

		var settings = $.extend({
			selectable: true,
			insert: true,
			dragndrop: true,
			inputErrorClass:'',
			errorElement: 'span',
			errorClass:'',
			errorText: '',
		}, options);

		$.fn.digits.selectable = settings.selectable;
		$.fn.digits.insert = settings.insert;
		$.fn.digits.dragndrop = settings.dragndrop;
		$.fn.digits.inputErrorClass = settings.inputErrorClass;
		$.fn.digits.errorElement = settings.errorElement;
		$.fn.digits.errorClass = settings.errorClass;
		$.fn.digits.errorText = settings.errorText;

		this.keypress(function(event) {
			if (event.ctrlKey || event.altKey || event.metaKey) return;
			var chr = function(event) {

				if (event.which == null) {
					if (event.keyCode < 32) return null;
					return String.fromCharCode(event.keyCode) // IE
				}

				if (event.which != 0 && event.charCode != 0) {
					if (event.which < 32) return null;
					return String.fromCharCode(event.which) // остальные
				}

				return null; // специальная клавиша
			}

			if (chr(event) == null) return;
			if (chr(event) < '0' || chr(event) > '9') {
				return false;
			}
		});

		if (!$.fn.digits.selectable) {
			this.css({
				'-webkit-touch-callout': 'none',
				'-webkit-user-select': 'none',
				'-khtml-user-select': 'none',
				'-moz-user-select': 'none',
				'-ms-user-select': 'none',
				'user-select': 'none'
			});
		}

		if (!$.fn.digits.dragndrop) {
			this.on("dragover", function(event) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
			this.on("dragleave", function(event) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
			this.on("drop", function(event) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
		};

		this.bind("paste", function(event) {
			if (!$.fn.digits.insert) {
				event.preventDefault();
				return false;
			} else {
				if(!/([0-9])/g.test(this.value)){
					event.preventDefault();
					$(this).addClass($.fn.digits.inputErrorClass);
					var hasError = $(this).parent().has($.fn.digits.errorElement);
					if(hasError.length == 0){
						var newError = $(document.createElement($.fn.digits.errorElement)).addClass($.fn.digits.errorClass).text($.fn.digits.errorText);
						$(this).parent().append(newError);
					}
					return false;
				}
			}
		});

		this.on("focusout blur", function(event){
			$(this).removeClass($.fn.digits.inputErrorClass);
			$(this).parent().find($.fn.digits.errorElement).remove();
		})

		return this;
	};

}(jQuery));
