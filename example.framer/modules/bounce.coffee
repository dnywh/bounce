# Add the following line to your project in Framer Studio. 
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar


exports.default = 
# 	time: 0.3
	curve: "spring(300, 35, 10)"
	
exports.slowCurve = 
	time: 0.5
	curve: "ease-in-out"

exports.slightBounceCurve = 
# 	time: 0.5
	curve: "spring(300, 30, 15)"

exports.bounceCurve = 
# 	time: 0.5
	curve: "spring(300, 25, 10)"

exports.bigBounceCurve = 
# 	time: 0.5
	curve: "spring(400, 20, 0)"

exports.quickEasy =
	time: 0.2
	curve: 'ease-in-out'