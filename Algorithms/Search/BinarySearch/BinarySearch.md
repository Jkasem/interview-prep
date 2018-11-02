As opposed to a "simple search" which would be starting at one side and searching index by index, Binary Search increases the efficiency by halving the total input each iteration.

The classic example is a dictionary. If you were looking up the word "Search" a human would naturally flip toward the middle of the dictionary and then choose to keep searching a smaller chunk of the book.

A key point of Binary Search is that the input needs to be sorted.

I am thinking of a number between 1 and 100. Each guess I will tell you if the number is "higher" or "lower". How would you quickly guess the number?

1 ... 50 ... 100
Guess 50 -> Higher
50 ... 75 .. 100
Guess 75 -> Lower
50 ... 62 .. 75
Guess 62 -> Higher

.. until you find the number.
Each time the input halves.

This leaves us with a (log n) worst case run complexity.
