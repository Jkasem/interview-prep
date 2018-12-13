### 10 other common algorithms:

1. Binary Search Tree - used for finding if a user exists
   Faster for insertion and deletion than binary search, but can't use index.
2. Inverted Index - Building a hash table of words on a webpage. Used for search engines.
3. Fourier Transform - given a song can transform it into individual frequencies

Parallel algorithms:

4. MapReduce - parallel algorithm to run large amounts of tasks. Apache Hadoop

Probablisitic data strucutre: answer could be wrong, but it probably right. False positives are possible.

5. Bloom Filters - For large data sets like figuring out if Google has crawled website.. use hash table, but hash table gets big.
6. HyperLogLog - approximates the number of unique items in a set
7. SHA (Secure Hash Algorithm) - useful for telling if two items are the same without needing the items themselves, for example if they are large or if comparing passwords
8. Simhash - similar to SHA, but if the original string changes slightly the hash changes only slightly. Useful for checking for similar items
9. Diffie-Hellman key exchange - Public and Private keypairs. Encrypt with Public key and decrypt with Private key. Succeeded by RSA.
10. Linear programming - maximize given a constraint. Uses the simplex algorithm.
