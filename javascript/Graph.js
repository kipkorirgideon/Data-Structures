class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
        return this
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v != vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) =>  v != vertex1)
    }

    removeVertex(vertex){
        if (!this.adjacencyList[vertex]) return undefined
        let vertex2;
        while (this.adjacencyList[vertex].length){
            vertex2 = null;
            vertex2 = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, vertex2)
        }
        delete this.adjacencyList[vertex]
        return this.adjacencyList
    }

    breadFirstTraversal(start){
        // uses QUEUES (FIFO) - Push/shift
        let queue = [start]
        let result = []
        let currentVertex;
        let visited = {}
        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach((n) =>{
                if(!visited[n]){
                    visited[n] = true
                    queue.push(n)
                }
            })
        }
        return result
    }

    DFS_Iteratively(start){
        // uses Stack - LIFO (Push/Pop)
        let stack = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((n) => {
                if (!visited[n]){
                    visited[n] = true
                    stack.push(n);
                }
            })
        }
        return result; 
    }

    DFS_Recursively(start){
        let result = []
        let adjacencyList = this.adjacencyList
        let visited = {}
        visited[start] = true

        function dfs(vertex) {
            if(!vertex) return
            visited[vertex] = true
            result.push(vertex)

            adjacencyList[vertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
                
            })    
        }
        dfs(start)
        return result
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')
