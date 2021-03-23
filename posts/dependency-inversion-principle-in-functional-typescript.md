---
title: "Dependency Inversion Principle in Functional TypeScript"
date: "2020-09-03"
coverImage: "/tim-gouw-He9WQV8e7Kk-unsplash.webp"
excerpt: "A sure way to decouple modules and write testable code."
---

_This is part five of a five-part series about SOLID principles in functional TypeScript._

## What is the Dependency Inversion Principle?

The dependency inversion principle (DIP) is one of the five SOLID principles. It states that:

> "One should depend upon abstractions, not concretions."

Whenever a module relies on an abstraction (`interface` or `abstract class`) as dependency, that dependency can be swapped for another implementation, like a plugin.
Therefore, decoupling the module from its dependency.

Also, **any module that solely uses dependency inversion can be unit tested since its dependencies can be substituted for mocks.**

Let's take a look at an example!

## With Traditional Dependency

Let's build a `SignupService` that uses an `HttpClient` as data source, like so:

![Traditional dependency](traditional-dependency.svg)

Starting with the `HttpClient`:

```ts
// infra/HttpClient.ts
import axios from "axios";

export default {
  createUser: async (user: User) => {
    return axios.post(/* ... */);
  },
  getUserByEmail: async (email: string) => {
    return axios.get(/* ... */);
  },
};
```

And we use it this way in our [domain logic](https://en.wikipedia.org/wiki/Business_logic):

```ts
// domain/SignupService.ts
import HttpClient from "infra/HttpClient"; // ❌ the domain depends on a concretion from the infra

export async function signup(email: string, password: string) {
  const existingUser = await HttpClient.getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already used");
  }

  return HttpClient.createUser({ email, password });
}
```

This isn't ideal. We have just created a dependency from our domain to an implementation detail (HTTP) - crossing an architectural boundary and thus violating the [Dependency Rule](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

Furthermore, **because `signup` is coupled with `HttpClient`, `signup` can't be unit tested.** After all, the `HttpClient` implies HTTP calls...
So, how can we solve this? How can we mock `HttpClient`?

Let's reimplement it with dependency inversion this time!

## With Dependency Inversion

We're going to decouple `SignupService` and `HttpClient`. It's going to look like this:

![Dependency inversion](dependency-inversion.svg)

First, using an `interface`, let's define the abstraction that will act as the dependency between the domain and the infrastructure:

```ts
// domain/ApiClient.ts
export interface ApiClient {
  createUser: (user: User) => Promise<void>;
  getUserByEmail: (email: string) => Promise<User>;
  // ...
}
```

We then implement that `ApiClient` at the infrastructure level:

```ts
// infra/HttpClient.ts
import axios from "axios";
import ApiClient from "domain/ApiClient";

export function HttpClient(): ApiClient {
  return {
    createUser: async (user: User) => {
      return axios.post(/* ... */);
    },
    getUserByEmail: async (email: string) => {
      return axios.get(/* ... */);
    },
  };
}
```

Finally, we can use an `ApiClient` abstraction in our domain logic:

```ts
// domain/SignupService.ts
import ApiClient from "domain/ApiClient"; // ✅ the domain depends on an abstraction of the infra

export function SignupService(client: ApiClient) {
  return async (email: string, password: string) => {
    const existingUser = await client.getUserByEmail(email);

    if (existingUser) {
      throw new Error("Email already used");
    }

    return client.createUser({ email, password });
  };
}
```

With the power of dependency inversion, **our `SignupService` can now use any `ApiClient`**. Let's inject our `HttpClient` for now:

```ts
// index.ts
import SignupService from "domain/signup";
import HttpClient from "infra/HttpClient";

const signup = SignupService(HttpClient());

signup("bob@bob.com", "pwd123");
```

Also, thanks to dependency inversion, `SignupService` is now testable!

## Writing Tests

Let's implement `ApiClient` again but with an in-memory data source instead of a remote one.

```ts
// infra/InMemoryClient.ts
import ApiClient from "domain/ApiClient";

export function InMemoryClient(): ApiClient {
  const users: User[] = [];

  return {
    createUser: async (user: User) => {
      users.push(user);
    },
    getUserByEmail: async (email: string) => {
      return users.find((user) => user.email === email);
    },
  };
}
```

With `InMemoryClient` acting as a mock, let's write some tests:

```ts
// tests/SignupService.spec.ts
import SignupService from "domain/signup";
import InMemoryClient from "infra/InMemoryClient";

let signup: ReturnType<typeof SignupService>;

beforeEach(() => {
  signup = SignupService(InMemoryClient());
});

test("it should signup a user", async () => {
  await expect(signup("john@test.com", "pwd123")).resolves.toBe(undefined);
});

test("it should fail to signup the same email twice", async () => {
  await signup("mark@test.com", "pwd123");
  await expect(signup("mark@test.com", "pwd987")).rejects.toThrow(
    new Error("Email already used")
  );
});
```

How great is this?

Not only did we manage to unit test `SignupSevice` but we allowed it to use any `ApiClient` as data source. Simply by implementing the interface, we could draw from a database instead, or a third-party API.

Dependency inversion is amazing. But, as with anything, it is a tool and not every dependency should be inverted. It would turn our software into an incomprehensible mess of over-abstracted components otherwise. Use it when needed, no more, no less.

## More on SOLID principles

- Single-Responsibility Principle _(upcoming!)_
- [Open-Closed Principle](/open-closed-principle-in-functional-typescript)
- [Liskov Substitution Principle](/liskov-substitution-principle-in-functional-typescript)
- Interface Segregation Principle _(upcoming!)_
- [Dependency Inversion Principle](/dependency-inversion-principle-in-functional-typescript)
