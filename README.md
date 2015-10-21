# Hello, Docfactory!

A few hours ago, I threw together a *docfactory library for generating PDF417 and QR barcodes on the fly. 

This project provides an example integration into your AngularJS project via the ngDocfactory directive. 

# Usage

For info on using directives in AngularJS, look no further than the source: <a href="https://docs.angularjs.org/guide/directive" target="_blank">https://docs.angularjs.org/guide/directive</a>.

To use ngDocfactory, complete the following steps:

- Download and install `ngDocfactory` in the root of your web project (bower setup and more to come later)
- Include the `docfactory.js` file in your project 
- Include the `ngDocfactory` module in your app
- Use one of the following syntaxes (A. Scope-dependent, B. Explicit) to implement the ngDocfactory barcodes in your project

## A. Scope-dependent Implementation 

Here, the assumption is that you have a `pdf417code` object in the current AngularJS scope that will provide the required properties for the directive to do it's work.

```html
<ng-docfactory scannable-code="pdf417code"></ng-docfactory>
```

## B. Explicit Implementation

Here, you will include a JSON formatted object as your `scannable-code` HTML attribute in your ngDocfactory element to provide the required properties for 
the directive to do it's work.

```html
<div ng-docfactory scannable-code="{ codeType: 'FANCYQR', size: 5, rgb: '255,20,147', content: 'https://larcity.com/?codetype=FANCYQR' }" ng-docfactory></div>
```
