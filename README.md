# bounce
a constantly-evolving collection of useful animation curves for interaction design within [Framer](framerjs.com), wrapped within a module.

## how do get started?
Use bounce like you would any other module. See the [official reference](http://framerjs.com/docs/#modules) if you've never dealt with modules before. Otherwise:

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

# who's this for?
Anyone using Framer to prototype interactions, needing some nice preset animations to get going with. The bounce animations should be eventually built-upon or tweaked to fit your exact needs. I'd also really recommend understanding the basics of animation, as well as how animation works in Framer. Some sources to get you started:

- [The illusion of life](https://vimeo.com/93206523): a great primer into animation in general, based-upon Disney's 12 principles
- [Framer - Animation](http://framerjs.com/learn/basics/animation/): basic introduction to animation & timing in Framer

# customising
You're welcome-to and encouraged to customise/tweak/bastardise/build-upon any of the animation settings within bounce.

# help
Get in touch on twitter [@aloookat](twitter.com/aloookat) with any questions specifically about bounce. Questions about Framer are probably best for the Framer community [on Facebook](https://www.facebook.com/groups/framerjs/)