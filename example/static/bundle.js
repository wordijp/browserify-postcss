(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('cssify')

},{"cssify":4}],2:[function(require,module,exports){
module.exports = require('browserify-postcss')('.inline {   width: 258px;   height: 192px;   background-image: url(data:image/png;base64,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); } .copy {   width: 356px;   height: 192px;   background-image: url(assets/octocat_fork.1325df9.png); } .entry {   color: #ff0000; } .entry:before {   content: \'abc\';   color: green; }  ')
},{"browserify-postcss":1}],3:[function(require,module,exports){
require('./entry.css')

console.log('styles from entry.css are applied')


},{"./entry.css":2}],4:[function(require,module,exports){
'use strict'

function injectStyleTag (document, fileName, cb) {
  var style = document.getElementById(fileName)

  if (style) {
    cb(style)
  } else {
    var head = document.getElementsByTagName('head')[0]

    style = document.createElement('style')
    if (fileName != null) style.id = fileName
    cb(style)
    head.appendChild(style)
  }

  return style
}

module.exports = function (css, customDocument, fileName) {
  var doc = customDocument || document
  /* istanbul ignore if: not supported by Electron */
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css
    return sheet.ownerNode
  } else {
    return injectStyleTag(doc, fileName, function (style) {
      /* istanbul ignore if: not supported by Electron */
      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.innerHTML = css
      }
    })
  }
}

module.exports.byUrl = function (url) {
  /* istanbul ignore if: not supported by Electron */
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode
  } else {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')

    link.rel = 'stylesheet'
    link.href = url

    head.appendChild(link)
    return link
  }
}

},{}]},{},[3]);
