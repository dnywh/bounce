# bounce
a constantly-evolving collection of useful animation curves for interaction design within [Framer] (framerjs.com), wrapped within a module.

## how do get started?
Use bounce like you would any other module. See the [official reference] (http://framerjs.com/docs/#modules) if you've never dealt with modules before. Otherwise:

1. add bounce.coffee to the `modules` folder within your Framer project
2. at the top of your Framer sketch, type `bounce = require "bounce"`
3. refresh your Framer sketch

## how do I use bounce?
I like to first set the Framer defaults to the following:
```
Framer.Defaults.Animation = 
	bounce.default
```

To use bounce, reference a preset it as the `curve` within an animation object like so:
```
curve: bounce.bounceCurve
```

Or within states:
```
layer.states.animationOptions = 
		bounce.bounceCurve
```
