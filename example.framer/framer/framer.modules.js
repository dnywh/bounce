require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"bounce":[function(require,module,exports){
exports["default"] = {
  curve: "spring(300, 35, 10)"
};

exports.slowCurve = {
  time: 0.5,
  curve: "ease-in-out"
};

exports.slightBounceCurve = {
  curve: "spring(300, 30, 15)"
};

exports.bounceCurve = {
  curve: "spring(300, 25, 10)"
};

exports.bigBounceCurve = {
  curve: "spring(400, 20, 0)"
};

exports.quickEasy = {
  time: 0.2,
  curve: 'ease-in-out'
};



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFuaWVsL0dpdGh1Yi9mcmFtZXIvYm91bmNlL2V4YW1wbGUuZnJhbWVyL21vZHVsZXMvYm91bmNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0tBLE9BQU8sQ0FBQyxTQUFELENBQVAsR0FFQztBQUFBLEVBQUEsS0FBQSxFQUFPLHFCQUFQO0NBRkQsQ0FBQTs7QUFBQSxPQUlPLENBQUMsU0FBUixHQUNDO0FBQUEsRUFBQSxJQUFBLEVBQU0sR0FBTjtBQUFBLEVBQ0EsS0FBQSxFQUFPLGFBRFA7Q0FMRCxDQUFBOztBQUFBLE9BUU8sQ0FBQyxpQkFBUixHQUVDO0FBQUEsRUFBQSxLQUFBLEVBQU8scUJBQVA7Q0FWRCxDQUFBOztBQUFBLE9BWU8sQ0FBQyxXQUFSLEdBRUM7QUFBQSxFQUFBLEtBQUEsRUFBTyxxQkFBUDtDQWRELENBQUE7O0FBQUEsT0FnQk8sQ0FBQyxjQUFSLEdBRUM7QUFBQSxFQUFBLEtBQUEsRUFBTyxvQkFBUDtDQWxCRCxDQUFBOztBQUFBLE9Bb0JPLENBQUMsU0FBUixHQUNDO0FBQUEsRUFBQSxJQUFBLEVBQU0sR0FBTjtBQUFBLEVBQ0EsS0FBQSxFQUFPLGFBRFA7Q0FyQkQsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuXG5leHBvcnRzLmRlZmF1bHQgPSBcbiMgXHR0aW1lOiAwLjNcblx0Y3VydmU6IFwic3ByaW5nKDMwMCwgMzUsIDEwKVwiXG5cdFxuZXhwb3J0cy5zbG93Q3VydmUgPSBcblx0dGltZTogMC41XG5cdGN1cnZlOiBcImVhc2UtaW4tb3V0XCJcblxuZXhwb3J0cy5zbGlnaHRCb3VuY2VDdXJ2ZSA9IFxuIyBcdHRpbWU6IDAuNVxuXHRjdXJ2ZTogXCJzcHJpbmcoMzAwLCAzMCwgMTUpXCJcblxuZXhwb3J0cy5ib3VuY2VDdXJ2ZSA9IFxuIyBcdHRpbWU6IDAuNVxuXHRjdXJ2ZTogXCJzcHJpbmcoMzAwLCAyNSwgMTApXCJcblxuZXhwb3J0cy5iaWdCb3VuY2VDdXJ2ZSA9IFxuIyBcdHRpbWU6IDAuNVxuXHRjdXJ2ZTogXCJzcHJpbmcoNDAwLCAyMCwgMClcIlxuXG5leHBvcnRzLnF1aWNrRWFzeSA9XG5cdHRpbWU6IDAuMlxuXHRjdXJ2ZTogJ2Vhc2UtaW4tb3V0JyJdfQ==
