# Intro to TypeScript

## Marina's Magical Memories

## Objectives

- Learn to add type annotations to variables.
- Create typed arrays and tuples.
- Practice narrowing primitive types to more specific values using unions and literals.
- Create type interfaces and write instances of objects that conform to those interfaces.
- Create type aliases and know when to use them.
- Specify parameter and return types in function signatures.

## Why?

This lab is designed to help provide a quick intro to some of the most important and useful pieces of TypeScript.

TypeScript is a typed language, so if you've worked with Java or Swift before, this will feel really familiar. If you haven't, it might feel like a lot of extra work - TypeScript doesn't _do_ more than vanilla JavaScript, so why bother?

The real rationale here is a concept called type safety, which can be thought of as a way of preventing errors before they happen.
In vanilla JavaScript, the following code is 100% permissible.

```js
// vanilla JavaScript
let price = 5.99;
price = "Ten dollars US";
```

As you can imagine, any functions designed to compare that price to another number are going to have difficulty with the string `"Ten dollars US"`.

TypeScript will alert the developer to any potential type mismatches in your code before they happen.

```ts
// with TypeScript
let price: number = 5.99;
price = "Ten dollars US"; // This will trigger an error!
```

Obviously that example is a bit contrived - it's hard to imagine why someone would write those two lines of code side-by-side. But it _is_ possible that someone might write price as a number in one file (`5.99`) and then two weeks later while working on a different part of the project, write price as a string (`"$5.99"`) somewhere else.

As you'll learn by completing this lab, TypeScript doesn't rob developers of flexibility. We can be as wide or as narrow in our typing as we like. It does however prevent us from shipping potentially buggy code unawares.

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE. Since VSCode and TypeScript are both maintained by Microsoft, it is the recommended configuration.

You'll need the TypeScript compiler to test your code, so before starting, make sure it's installed by running `tsc --version`. If TypeScript is not yet installed, be sure to run `npm install -g typescript` to have access to it.

Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory.
2. You can compile the TypeScript code to regular JavaScript with `tsc exercises.ts` and then run the code with `node exercises.js`. Since these two commands can be cumbersome to repeat over and over, they'e been combined into a single npm command: `npm run play`.
3. You'll know you're ready to start if you see `"Script running"` logged to the console.

Once that's done, you're ready to try to complete the exercises listed in `exercises.ts`. The instructions for each challenge are listed as comments.

At the end of each exercise are some lines of code you can use to see if you've completed the exercises successfully.

We're writing these "tests" inline because the purpose of this activity is to help you learn to read the errors that will come up inline in your editor as you work, so rather than use a testing library like we might on the job, we've written lines of code designed to work, and lines of code designed to throw errors. This allows you to familiarize yourself with the tooltips that appear when you make common TypeScript errors, and hopefully solve your problems before you run the compiler.

Important note: please leave the tests which are supposed to pass uncommented after completing an exercise, and comment the tests which are supposed to trigger errors back out. Some of the earlier positive test cases are used to support with some later test cases.

## Guidance

In this lab, we're helping Marina launch a store with both digital and concrete storefronts. It's an ambitious project, but TypeScript will help us tremendously.

If you've already worked in TypeScript extensively before, you may be able to understand a lot of the implications of each exercise right away, but if this is your first time working in TypeScript, you'll almost certainly want (and need) to consult the documentation.

If you learn best by reading documentation first, then be sure to read the linked resources before attempting the corresponding challenges:

- Exercise 1: [Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean) & [Type Annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)
- Exercise 2: [Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- Exercise 3: [Arrays](https://www.tutorialsteacher.com/typescript/typescript-array) and [Tuples](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
- Exercise 4: [Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)
- Exercise 5: [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) and [Unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- Exercise 6: Combines interfaces & type aliases
- Exercise 7: [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- Exercise 8: Functions that use interfaces or type aliases as parameter types.

## Final Thoughts

We practiced with a lot of potentially new concepts, but didn't talk a lot about best practices for each one of them. Your cohort may review some of the following ideas together, but if not, you should feel free to explore on your own.

If you feel comfortable with everything explored in the exercises listed here, you'll want to explore some of the following topics:

- One really important part of TypeScript not covered here is [type inference](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables). In short, TypeScript will make reasonable default assumptions about what you intend the type of an initialized variable to be and type it accordingly. Once you get used to TypeScript, you'll definitely want to rely on inference more to avoid over-typing your code, but as you first get used to it, go ahead and be overly defensive in your programming by typing anything that could benefit from it for now. Once you get the hang of it, you can (and should) start to rely on inference a lot more.
- At it's best, TypeScript is as specific as possible while still offering all the freedom you need for any given operation. We practiced this in the lab, in particular with the `gradeLevel` challenge. The idea of being exactly as specific as possible while still anticipating all expected scenarios is broadly referred to as "narrowing" - [read more](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) in the docs.
- By default, TypeScript doesn't automatically protect against is `null` or `undefined`. A function that is passed `null` as an argument but is expecting a number won't throw an error until runtime. This is why being more strict about [how to handle undefined and null](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) in TypeScript can be powerful, and the docs even include a configuration you can add to enforce that practice. This configuration should be turned on in your project's tsconfig.json. `strict: true`
