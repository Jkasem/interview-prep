https://en.wikipedia.org/wiki/Hash_table

Hash function - put in input and get a fixed length output

Run through a hash function and store at that index. Whenever you want to lookup just run through the same hash function to get the index.

Good for: modeling relationships, filtering duplicates, caching

Use a good hash function for even distribution. Low load factor (Items / total slots).

Collision handling:

1. linked list if item in bucket

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Search    | O(1)    | O(n)  |
| Insertion | O(1)    | O(n)  |
| Deletion  | O(1)    | O(n)  |

Load factors over 0.7 need to be resized. Resizing is expensive.
