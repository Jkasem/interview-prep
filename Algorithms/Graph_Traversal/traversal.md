### Dijkstra's

Tells you the fastest path or used when you want to minimize the cost. Only works for directed graphs with positive weights.

- Find the cheapest node
- Check neighbors for a cheaper path, if so change total
- Repeat for every node
- Calculate the final path

### Bellman Ford

Can use negative weights.

### A

### DFS:

### BFS:

Run time: O(V+E) where V = verticies and E = edges

Tells you the shortest path.

Once you check a vertex you need to mark it was checked otherwise you can infinite loop.

```
const BFS = (node, val) => {
    const queue = [node];
    const searched = {};
    while (queue.length > 0) {
        const current = queue.shift();
        if (!searched[node.id]) {
            if (current.val === val) return true;
            for (const neighbor of node.neighbors) {
                queue.push(neighbor);
            }
        }
    }
    return false;
}
```
