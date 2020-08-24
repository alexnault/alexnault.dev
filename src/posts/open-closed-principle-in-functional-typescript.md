---
title: "Open–Closed Principle in Functional TypeScript"
date: "2020-08-19"
coverImage: "../images/tim-mossholder-C8jNJslQM3A-unsplash.jpg"
path: "/open-closed-principle-in-functional-typescript"
excerpt: ""
tags: []
---

_This is part two of a five-part series about SOLID principles in functional TypeScript._

The second SOLID principle, **the open-closed principle (OCP)**, states that:

> Software entities should be open to extension but closed to modification.

Meaning a module's behavior can be extended without modifying the module itself.

You ended up making mostly additions to support new features, while higher-level modules remain intact. As a result, **lesser code needs to change to meet new requirements.**

<!-- How? By seperating things that change for diff reasons and organization dependecies properly. Change... -->
<!-- You want to prevent change from inner layers of your software logic. -->

Here's an exampe with React components:

```tsx
function Button({ text }: ButtonProps) {
  return <button>{text}</button>;
}

function App() {
  return <Button>Click me</Button>;
}
```

Now, imagine we are tasked with adding a loading state to that button. We could modify our `Button` to handle it, like so:

```tsx
function Button({ text, isLoading }: ButtonProps) {
  if (isLoading) {
    return <svg>...</svg>;
  }

  return <button>{text}</button>;
}

function App() {
  return <Button isLoading={true}>Click me</Button>;
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
      <Button>Click me</Button>
    </Loading>
  );
}
```

Notice how `Button` stayed pristine and focused on being a button? This solution adheres to the OCP since we managed to extend our `Button`'s behavior while leaving its code unchanged.

Other advantages of this solution include:

- `Loading` can be applied to any components
- `Button` can be composed with a different loading for different scenarios
- Smaller function/file size
- Observing separation of concerns

### Wrapping up

The open-closed principle allows for easier extension while reducing time spent adapting existing code. By designing your modules into composable parts, you promote a flexible and scalable application.

More on SOLID principles:

- [Single-Responsibility Principle](https://alexnault.dev) _(upcoming!)_
- Open-Closed Principle
- [Liskov Substitution Principle](https://alexnault.dev) _(upcoming!)_
- [Interface Segregation Principle](https://alexnault.dev) _(upcoming!)_
- [Dependency Inversion Principle](https://alexnault.dev) _(upcoming!)_
