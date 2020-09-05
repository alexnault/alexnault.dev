---
title: "Open–Closed Principle in Functional TypeScript"
date: "2020-08-24"
coverImage: "../images/tim-mossholder-ruQRZpvMkNQ-unsplash.jpg"
path: "/open-closed-principle-in-functional-typescript"
excerpt: ""
tags: []
---

_This is part two of a five-part series about SOLID principles in functional TypeScript._

## What is the Open-Closed Principle?

The open-closed principle (OCP) is one of the five SOLID principles. It states that:

> Software modules should be open for extension, but closed for modification.

Meaning a module's behavior can be extended without modifying the module itself. **It promotes a composable architecture where each module acts as a plugin.**

Ultimately, the goal of the open-closed principle is to **write code that won't need to change when requirements change.**

## Example

Here's a simplified exampe with React function components:

```tsx
function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return <Button text="Click me!" />;
}
```

Now, let's say we are tasked with adding a loading to that button. We could modify our `Button` to handle it, like so:

```tsx
function Button({ text, isLoading }: ButtonProps) {
  if (isLoading) {
    return <svg>...</svg>;
  }

  return <button>{text}</button>;
}

function App() {
  return <Button text="Click me!" isLoading={true} />;
}
```

Except, this disregards the open-closed principle at the `Button` level since we are modifying its code. We are adding a specific loading behavior to our generic button.

Instead, **we should combine software components to create new behaviors**. So, opting for composition, we could implement the feature like so:

```tsx
function Loading({ isLoading, children }: LoadingProps) {
  return isLoading ? <svg>...</svg> : children;
}

function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return (
    <Loading isLoading={true}>
      <Button text="Click me!" />
    </Loading>
  );
}
```

Notice how `Button` remained intact and focused on being a button, yet was extended? This solution adheres to the open-closed principle since we managed to extend our `Button`'s behavior while leaving its code unchanged.

Other advantages of this solution include:

- `Loading` can be applied to any components
- `Button` can be composed with a different loading for different scenarios
- Smaller function/file size
- Observing separation of concerns

## Wrapping up

**The open-closed principle allows for easier extension while reducing time spent adapting existing code.** By designing your modules into composable parts, you foster a flexible and scalable application.

## More on SOLID principles

- Single-Responsibility Principle _(upcoming!)_
- Open-Closed Principle
- Liskov Substitution Principle _(upcoming!)_
- Interface Segregation Principle _(upcoming!)_
- [Dependency Inversion Principle](/dependency-inversion-principle-in-functional-typescript)
