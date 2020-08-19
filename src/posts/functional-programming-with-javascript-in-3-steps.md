---
title: "Functional Programming with JavaScript in 3 Steps"
date: "2019-04-02"
coverImage: "../images/laptop.jpeg"
path: "/functional-programming-with-javascript-in-3-steps"
excerpt: "Pure functions, immutability & declarative pattern… you're in for a treat."
tags: []
---

Pure functions, immutability & declarative pattern… you're in for a treat.
Functional programming has its roots in lambda calculus, a mathematical concept dating back to the 1930s. That might sound daunting, but it's really not. Without going into the mathematical theory, **these principles will introduce you to some of the wonders of functional programming and its benefits for your software.**

Let's get right into it!

## Favor Pure Functions

A function is pure if:

- it always returns the same output for the same input

AND

- it has no side effect

> In other words, pure functions map inputs to outputs.

The caller and the pure function may only communicate via arguments and return value:

```js
// impure (using side effect instead of return value)
function addTaco(array) {
  array.push("taco");
}

// impure (using shared variable instead of argument)
function addTaco() {
  return [...globalArray, "taco"];
}

// pure
function addTaco(array) {
  return [...array, "taco"];
}
```

**Pure functions are predictable, easy to debug and super easy to test.** Also, because they are **[referentially transparent](https://en.wikipedia.org/wiki/Referential_transparency)**, they allow for a bunch of optimization techniques such as **[memoization](https://en.wikipedia.org/wiki/Memoization)** (which is used to speed up repeated evaluations by caching function results).

Not every function can be pure. Some are inherently impure when dealing with I/O, randomization, networking, databases, etc. Nevertheless, these concepts can and should be moved to the outer edges of your software in order to have a larger functional coverage and thus a simpler core.

## Favor Immutability

In JavaScript, all primitives (boolean, string, etc.) are immutable. While it is not the case of objects & arrays, we can choose to treat them as if they were.

> When immutable, an object or array cannot be modified after it is created.

If we wish to modify it, we must duplicate it and assign it a new variable:

```js
// mutable
const bands = ["Metallica", "Queen"];
bands.push("Nirvana");

// immutable
const someBands = ["Metallica", "Queen"];
const bands = [...someBands, "Nirvana"];
```

Since they have one and only one state, **immutable objects & arrays cannot be made invalid by change and they avert side effects.**

Immutable data is also **[thread-safe](https://en.wikipedia.org/wiki/Thread_safety)** and **[failure atomic](https://stackoverflow.com/a/29843251/1620780)**.

Bonus: because immutable objects & arrays only require a reference check instead of a deep compare to detect "change", they allow for fast change detection which plays a major role in efficient state management (think React applications).

## Favor Declarative Patterns

- Declarative programming describes **WHAT we want to achieve.**
- Imperative programming describes **HOW we want to achieve it.**

In other words, imperative programming describes explicit step-by-step instructions while declarative programming consists of a sequence of declarations:

```js
const names = ["Han", "Chewbacca", "Luke", "Leia"];

// imperative
const shortNames = [];
for (let i = 0; i < names.length; i++) {
  if (names[i].length < 5) {
    shortNames.push(names[i]);
  }
}

// declarative
const shortNames = names.filter((name) => name.length < 5);
```

**A declarative pattern puts the focus on the problem domain and not the implementation details.** It typically leads to a much more concise and much less error-prone code. Besides, it is much easier to read and reason about.

By the way, did you notice how `shortNames` also became immutable in the process?

JavaScript has a ton of useful [higher-order functions](https://en.wikipedia.org/wiki/Higher-order_function) such as [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), etc. These are musts when writing declarative code so use them extensively!

## To wrap up

You get to add functional programming to your tool belt! Now, you can follow these principles as you see fit; see what works for your project and what doesn't.

All in all, this article barely scratched the surface, but hopefully shed some light on functional programming and tickled your curiosity.

If you have any questions, don't hesitate to ask and I'll answer as best as I can!
