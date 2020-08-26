---
title: Formatting
weight: 1
---

### Whitespace

* Spaces are used to demarcate tokens in the language, although some keyword constructs may include spaces.

* Multiple spaces and tabs are treated as single spaces and are otherwise irrelevant.

* Indentation is irrelevant.

* A command starts at the beginning of a line and a newline indicates the end of a command, except in special cases.

* A newline will be Carriage Return (/13), a Line Feed (/10) or both (/13/10) depending on the implementing system. This is only in regards to LOLCODE code itself, and does not indicate how these should be treated in strings or files during execution.

* Multiple commands can be put on a single line if they are separated by a comma (,). In this case, the comma acts as a virtual newline or a soft-command-break.

* Multiple lines can be combined into a single command by including three periods (...) or the unicode ellipsis character (u2026) at the end of the line. This causes the contents of the next line to be evaluated as if it were on the same line.

* Lines with line continuation can be strung together, many in a row, to allow a single command to stretch over more than one or two lines. As long as each line is ended with three periods, the next line is included, until a line without three periods is reached, at which point, the entire command may be processed.

* A line with line continuation may not be followed by an empty line.
Three periods may be by themselves on a single line, in which case, the empty line is "included" in the command (doing nothing), and the next line is included as well.

* A single-line comment is always terminated by a newline. Line continuation (...) and soft-command-breaks (,) after the comment (`BTW`) are ignored.

* Line continuation and soft-command-breaks are ignored inside quoted strings. An unterminated string literal (no closing quote) will cause an error.