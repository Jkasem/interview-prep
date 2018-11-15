dijkstra's
A\*

### DFS:

### BFS:

Run time: O(V+E) where V = verticies and E = edges

Tells you if there is a shortest path.

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
