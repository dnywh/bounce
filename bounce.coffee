# Add the following line to your project in Framer Studio. 
# bounce = require "bounce"
# Reference the contents within an animation, like `curve: bounce.bounceCurve`, or 'layer.states.animationOptions = bounce.bounceCurve'


# basic introduction to animation in Framer:
# http://framerjs.com/learn/basics/animation/

###
some handy links:
http://cubic-bezier.com
https://github.com/MengTo/Spring
http://matthaeuskrenn.com/springto/
http://framer-spring.s3-website-us-east-1.amazonaws.com
http://nlevin.com/framer/#26
###

###
spring curve syntax:

	spring(tension, friction, velocity)
put more simply:
	spring(wind-up, weight, bounciness)

reference:
http://nlevin.com/framer/#26
###

###
cubic-bezier syntax:
	cubic-bezier(x1, y1, x2, y2)

reference:
https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function
http://roblaplaca.com/blog/2011/03/11/understanding-css-cubic-bezier/

###

# the actual Framer default animation options
exports.default = 
	time: 1
	curve:" ease"


# a nice springy-curve to start with
exports.standard
#	time: 0.3
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