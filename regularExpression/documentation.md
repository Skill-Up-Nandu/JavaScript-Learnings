################################# R E G U L A R  E X P R E S S I O N' S ##################################



********************************************** M E T H O D S *********************************************
# STRING METHOD

match(regexp)	Returns an Array of results
matchAll(regexp)	Returns an Iterator of results
replace(regexp, s)	Returns a new String
replaceAll(regexp, s)	Returns a new String
search(regexp)	Returns the index of the first match
split(regexp)	Returns an Array of results

# REGEX METHODS

regex.exac(string)  returns an iterator of results
regex.test(string)  returns true or false


************************************** C H A R A C T E R  C L A S S E S **********************************
# CHARACTER CLASSES

\d	    Matches Digits
\D	    Matches None Digits
\w	    Matches alphanumeric Word characters
\W	    Matches None alphanumeric Word characters
\s	    Matches Spaces
\S	    Matches None Spaces
\ddd	Matches characters by the Octal numer ddd
\xhh	Matches characters by the HexadecimaL number hh
\uhhhh	Matches Unicode characters by the hex number hhhh


*************************************** F L A G S ( M O D I F I E R S) **********************************
# FLAGS ( MODIFIERS )

g - globally check each word of a string
i - ignore the case // case insensitive
m - multiline // pattern will work for each line in a string
s - dotAll // . also matches newline \n
y - stucky // Matches only at exact position of lastIndex (compare with global)


**************************************** A S S E R T I O N S ********************************************
# ASSERTIONS

Syntax      Name	            Description
---------------------------------------------------------------------
^	        String boundary	    Matches the beginning of a string
$	        String boundary	    Matches the end of a string
\b	        Word boundary	    The beginning or end of a word
\B	        Word boundary	    Matches NOT the beginning or end of a word

 Pattern   | Meaning                      | Example Match |
| --------- | ---------------------------- | ------------- |
| `\bcat\b` | Exact word `cat`             | `"my cat"`    |
| `\bcat`   | Word starts with `cat`       | `"catfish"`   |
| `cat\b`   | Word ends with `cat`         | `"wildcat"`   |
| `\Bcat`   | `cat` not at start of a word | `"scatter"`   |

(?=...)	    Lookahead	        Matches the subsequent string
(?!...)	    Lookahead	        NOT the subsequent string
(?<=...)	Lookbehind	        Matches the previous string
(?<!...)	Lookbehind	        Matches NOT the previous string


**************************************** Q U A N T I F I E R S *******************************************
# QUANTIFIERS

*       0 or more times
+       1 or more times
?       0 or 1
.       wildcard (any one character)
.+      at least one character total
{n}     exact count
{n,}    minimum n times
{n,m}   range count => between n and 
