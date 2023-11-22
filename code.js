function hasCycle(graph) {
    const visited = new Array(graph.length).fill(false);

    // This function is to Recursively perform depth-first search with detecting cycles 
    function detectCycle(node, parent) {
        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (detectCycle(neighbor, node)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }

        return false;
    }

    for (let node = 0; node < graph.length; node++) {
        if (!visited[node] && detectCycle(node, -1)) {
            return true;
        }
    }

    return false;
}

/*
Sources Used:
https://www.youtube.com/watch?v=9twcmtQj4DU&t=952s
https://www.geeksforgeeks.org/detect-cycle-in-a-graph/
*/
