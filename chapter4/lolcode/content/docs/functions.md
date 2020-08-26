---
title: Functions
weight: 10
---

### Definition

A function is demarked with the opening keyword `HOW IZ I` and the closing keyword `IF U SAY SO`. The syntax is as follows:

```
HOW IZ I <function name> [YR <argument1> [AN YR <argument2> …]]
  <code block>
IF U SAY SO
```

Currently, the number of arguments in a function can only be defined as a fixed number. The `<argument>`s are single-word identifiers that act as variables within the scope of the function's code. The calling parameters' values are then the initial values for the variables within the function's code block when the function is called.

*Currently, functions do not have access to the outer/calling code block's variables.*

### Returning

Return from the function is accomplished in one of the following ways:

* `FOUND YR <expression>` returns the value of the expression.
* `GTFO` returns with no value (NOOB).
* in the absence of any explicit break, when the end of the code block is reached (`IF U SAY SO`), the value in `IT` is returned.

### Calling

A function of given arity is called with:

```
I IZ <function name> [YR <expression1> [AN YR <expression2> [AN YR <expression3> ...]]] MKAY
```

That is, an expression is formed by the function name followed by any arguments. Those arguments may themselves be expressions. The expressions' values are obtained before the function is called. The arity of the functions is determined in the definition.