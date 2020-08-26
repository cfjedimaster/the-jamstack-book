---
title: Variable Types
weight: 5
---

*(updated from 1.1)*

The variable types that LOLCODE currently recognizes are: strings (YARN), integers (NUMBR), floats (NUMBAR), and booleans (TROOF) (Arrays (BUKKIT) are reserved for future expansion.) Typing is handled dynamically. Until a variable is given an initial value, it is untyped (NOOB). ~~Casting operations operate on TYPE types, as well.~~

### Untyped

The untyped type (NOOB) cannot be implicitly cast into any type except a TROOF. A cast into TROOF makes the variable FAIL. Any operations on a NOOB that assume another type (e.g., math) results in an error.

Explicit casts of a NOOB (untyped, uninitialized) variable are to empty/zero values for all other types.

### Booleans

The two boolean (TROOF) values are WIN (true) and FAIL (false). The empty string (""), an empty array, and numerical zero are all cast to FAIL. All other values evaluate to WIN.

### Numerical Types

A NUMBR is an integer as specified in the host implementation/architecture. Any contiguous sequence of digits outside of a quoted YARN and not containing a decimal point (.) is considered a NUMBR. A NUMBR may have a leading hyphen (-) to signify a negative number.

A NUMBAR is a float as specified in the host implementation/architecture. It is represented as a contiguous string of digits containing exactly one decimal point. Casting a NUMBAR to a NUMBR truncates the decimal portion of the floating point number. Casting a NUMBAR to a YARN (by printing it, for example), truncates the output to a default of two decimal places. A NUMBAR may have a leading hyphen (-) to signify a negative number.

Casting of a string to a numerical type parses the string as if it were not in quotes. If there are any non-numerical, non-hyphen, non-period characters, then it results in an error. Casting WIN to a numerical type results in "1" or "1.0"; casting FAIL results in a numerical zero.

### Strings

String literals (YARN) are demarked with double quotation marks ("). Line continuation and soft-command-breaks are ignored inside quoted strings. An unterminated string literal (no closing quote) will cause an error.

Within a string, all characters represent their literal value except the colon (:), which is the escape character. Characters immediately following the colon also take on a special meaning.

* :) represents a newline (\n)
* :> represents a tab (\t)
* :o represents a bell (beep) (\g)
* :" represents a literal double quote (")
* :: represents a single literal colon (:)

The colon may also introduce more verbose escapes enclosed within some form of bracket.

* :(`<hex>`) resolves the hex number into the corresponding Unicode code point.
* :{`<var>`} interpolates the current value of the enclosed variable, cast as a string.
* :[`<char name>`] resolves the `<char name>` in capital letters to the corresponding Unicode [normative name](http://www.unicode.org/Public/4.1.0/ucd/NamesList.txt).

### Arrays

*Array and dictionary types are currently under-specified. There is general will to unify them, but indexing and definition is still under discussion.*

### Types

The TYPE type only has the values of TROOF, NOOB, NUMBR, NUMBAR, YARN, and TYPE, as bare words. They may be legally cast to TROOF (all true except for NOOB) or YARN.

*TYPEs are under current review. Current sentiment is to delay defining them until user-defined types are relevant, but that would mean that type comparisons are left unresolved in the meantime.*