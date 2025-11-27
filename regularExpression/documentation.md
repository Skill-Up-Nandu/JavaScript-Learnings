
# R E G U L A R  E X P R E S S I O N


## M E T H O D S

### STRING METHOD

- match(regexp)	Returns an Array of results
- matchAll(regexp)	Returns an Iterator of results
- replace(regexp, s)	Returns a new String
- replaceAll(regexp, s)	Returns a new String
- search(regexp)	Returns the index of the first match
- split(regexp)	Returns an Array of results

### REGEX METHODS

- regex.exac(string)  returns an iterator of results
- regex.test(string)  returns true or false


## CHARACTER CLASSES

- \d	    Matches Digits
- \D	    Matches None Digits
- \w	    Matches alphanumeric Word characters
- \W	    Matches None alphanumeric Word characters
- \s	    Matches Spaces
- \S	    Matches None Spaces
- \ddd	Matches characters by the Octal numer ddd
- \xhh	Matches characters by the HexadecimaL number hh
- \uhhhh	Matches Unicode characters by the hex number hhhh


## FLAGS ( MODIFIERS )

- g - globally check each word of a string
- i - ignore the case // case insensitive
- m - multiline // pattern will work for each line in a string
- s - dotAll // . also matches newline \n
- y - stucky // Matches only at exact position of lastIndex (compare with global)

## QUANTIFIERS

- '*'       0 or more times
- '+'       1 or more times
- ?       0 or 1
- .       wildcard (any one character)
- .+      at least one character total
- {n}     exact count
- {n,}    minimum n times
- {n,m}   range count => between n and 

## ASSERTIONS


 Syntax     |  Name                 | Description                               |
| --------- | --------------------- | ------------------------------------------|
| ^         | String Boundary       | Matches the beginning of a string         |
| $         | String Boundary       | Matches the end of a string               |
| \b        | Word Boundary         | The beginning or end of a word            |
| \B        | Word Boundary         | Matches NOT the beginning/end of a word   |
| (?=...)   | Lookahead	            | Matches the subsequent String             |
| ?!...	    | Lookahead	            | NOT the subsequent String                 |
| ?<=...    | Lookbehind	        | Matches the previous String               |
| ?<!...    | Lookbehind	        |  Matches NOT the previous string          |
	   
 ### example of word boundary      
 Pattern    | Meaning                      | Example Match |
| --------- | ---------------------------- | ------------- |
| `\bcat\b` | Exact word `cat`             | `"my cat"`    |
| `\bcat`   | Word starts with `cat`       | `"catfish"`   |
| `cat\b`   | Word ends with `cat`         | `"wildcat"`   |
| `\Bcat`   | `cat` not at start of a word | `"scatter"`   |


