# Template Engine Kata

## The Problem

Develop a templating library which replaces certain marked text using a dictionary of variables. The function takes two arguments, the template text and the dictionary. Expecting that the output will be the replaced text.

### Example 1:

Text input:
```
"This is a template with one ${variable}"
```

Dictionary input:
```
{ "variable": "value" }
```

**Output:**
```
"This is a template with one value"
```

### Example 2:

Text input:
```
"This is a text with a ${variable} to be replaced. \n" +
"And this is another text with ${other-variable} to be replaced. \n" +
"And this is another text with ${another-variable} to be replaced."
```

Dictionary input:
```
{ 
  "variable": "value", 
  "other-variable": "other-value", 
  "another-variable": "another-value"
}
```

**Output:**
```
"This is a text with a value to be replaced. \n" +
"And this is another text with other-value to be replaced. \n" +
"And this is another text with another-value to be replaced."
```

### Edge cases

One of the more interesting aspects of this kata are the edge cases. This is going to be an open source library, potentially used for a wide variety of problems. We can't anticipate all the possible scenarios, so it's important to handle all cases. Please consider de cases of nulls, empties, variables not found in the dictionary, variables not used int the dictionary... 

Consider the case of empty string as a key in the dictionary, and the case of values that are not convertible to string (not serializable)...

How would you design the library in a way that is resilient, intuitive, and comfortable to use?

## Source

Sustainable Coding Training Course - Template Engine Kata <https://github.com/lean-mind/sustainable-coding-training-course/tree/main/template-engine-kata>
