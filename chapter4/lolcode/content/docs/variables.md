---
title: Variables
weight: 4
---

### Scope

*(to be revisited and refined)*

All variable scope, as of this version, is local to the enclosing function or to the main program block. Variables are only accessible after declaration, and there is no global scope.

### Naming

*(from 1.1)*

Variable identifiers may be in all small or lowercase letters (or a mixture of the two). They must begin with a letter and may be followed only by other letters, numbers, and underscores. No spaces, dashes, or other symbols are allowed. Variable identifiers are CASE SENSITIVE – "cheezburger", "CheezBurger" and "CHEEZBURGER" would all be different variables.

### Declaration and Assignment

*(modified from 1.1)*

To declare a variable, the keyword is `I HAS A` followed by the variable name. To assign the variable a value within the same statement, you can then follow the variable name with `ITZ <value>`.

Assignment of a variable is accomplished with an assignment statement, `<variable> R <expression>`

```
I HAS A VAR            BTW VAR is null and untyped
VAR R "THREE"          BTW VAR is now a YARN and equals "THREE"
VAR R 3                BTW VAR is now a NUMBR and equals 3
```

See [variable types](/docs/variable-types/) for more information.