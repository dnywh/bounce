*Note: this module is in 'alpha'—it's a work in progress. Anything can (and will) change over time. I'll remove this once I feel like bounce is at a usable/stable stage.*

# bounce
A constantly-evolving collection of useful animation curves for interaction design within [Framer](http://framerjs.com), wrapped within a handy module. Full reference within `bounce.coffee`.

## How do get started?
Use bounce like you would any other module. See the [official reference](http://framerjs.com/docs/#modules) if you've never dealt with modules before. Otherwise:

1. add bounce.coffee to the `modules` folder within your Framer project
2. at the top of your Framer project, type `bounce = require "bounce"`
3. refresh your Framer project

## How do I use bounce?
I like to first set the Framer defaults to the following:
```
Framer.Defaults.Animation = 
	bounce.standard
```

To use a bounce curve within an `animation` object, reference it as the `curve` like so:
```
curve: bounce.bounceCurve
```

You can also use a bounce curve within states:
```
layer.states.animationOptions = 
		bounce.bounceCurve
```

## Who is this for?
Anyone using Framer to prototype interactions, needing some nice preset animations to get going with. Every project is different, so the bounce animations should be eventually built-upon or tweaked to fit your exact needs. More about this below. I'd also really recommend understanding the basics of animation, as well as how animation works in Framer. Some sources to get you started:

- [The illusion of life](https://vimeo.com/93206523): a great primer into animation in general, based-upon Disney's 12 principles
- [Framer - Animation](http://framerjs.com/learn/basics/animation/): basic introduction to animation & timing in Framer

## Customising
You're welcome (and encouraged) to customise/tweak/bastardise/build-upon any of the animation settings within bounce. Feel free to share.

## Help
Get in touch on twitter [@aloookat](https://twitter.com/aloookat) with any questions specifically about bounce. Questions about Framer are probably best for the Framer community [on Facebook](https://www.facebook.com/groups/framerjs/).
