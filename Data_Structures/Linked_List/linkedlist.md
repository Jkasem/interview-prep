https://en.wikipedia.org/wiki/Linked_list

Think of a linked list like a choose your own adventure. You start on page one and then it tells you to go to page 30.. and then page 12.. and then page 70. The items are not contiguous in space but have a pointer to where the next item is. This means it is pretty effecient if you want to walk down the whole list of items, but what if you want to read something in the middle? You would have to start and the beginning and keep walking down until you find what you were looking for. _sequential access_

Good for: frequent insert/deletes
Not so good for: frequent reads

| Operation          | Big O |
| ------------------ | ----- |
| Search             | O(n)  |
| Insert/Delete head | O(1)  |
| Insert/Delete tail | O(n)  |
| Space              | O(n)  |

https://en.wikipedia.org/wiki/Doubly_linked_list

| Operation          | Big O |
| ------------------ | ----- |
| Search             | O(n)  |
| Insert/Delete head | O(1)  |
| Insert/Delete tail | O(1)  |
| Space              | O(n)  |
