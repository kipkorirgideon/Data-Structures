import json
class Graph:
    def __init__(self):
        self.adjacency_list = {}

    def print_result(self):
        print(self.adjacency_list)

    def add_vertex(self,vertex):
        if self.adjacency_list.get(vertex, ''):
            return None
        self.adjacency_list[vertex] = []
        return self.adjacency_list

    def add_edge(self, vertex1, vertex2):
        if vertex2 not in self.adjacency_list[vertex1]:
            self.adjacency_list[vertex1].append(vertex2)
        if vertex1 not in self.adjacency_list[vertex2]:
            self.adjacency_list[vertex2].append(vertex1)
        return self.adjacency_list

    def remove_edge(self, vertex1, vertex2):
        self.adjacency_list[vertex1] = list(filter(lambda v: v != vertex2, self.adjacency_list[vertex1]))
        self.adjacency_list[vertex2] = list(filter(lambda v: v != vertex1, self.adjacency_list[vertex2]))
        return self.adjacency_list

    def remove_vertex(self, vertex):
        if self.adjacency_list.get(vertex, None):
            for vertex1 in self.adjacency_list[vertex]:
                self.remove_edge(vertex, vertex1)
            del self.adjacency_list[vertex]
            return self.adjacency_list
        return None

    def bread_first_traversal(self, start):
        #  uses Queues -> FIFO - Push/Shift (pop(0))
        #  keep track of visited
        # visit sibling
        results = []
        visited = {}
        queue = [start]
        current_vertex = None
        visited[start] = True

        while queue:
            current_vertex = queue.pop(0)
            results.append(current_vertex)
            list(map(lambda n: (visited.__setitem__(n, True), queue.append(n)) if not visited.get(n, None) else None, self.adjacency_list[current_vertex]))
        return results

    def dsf_iteratively(self, start):
        #  uses Stack - LIFO push/pop
        result = []
        stack = [start]
        visited = {}
        visited[start] = True
        current_vertex = None

        while stack:
            current_vertex = stack.pop()
            result.append(current_vertex)
            list(map(lambda n: (visited.__setitem__(n, True), stack.append(n)) if not visited.get(n, None) else None, self.adjacency_list[current_vertex]))
        return result

    def dfs_recursively(self, start):
        result = []
        adjacency_list = self.adjacency_list
        visited = {vertex: False for vertex in adjacency_list}
        visited[start] = True
        # add helper function
        def dfs(vertex):
            visited[vertex] = True
            result.append(vertex)
            for neighbor in adjacency_list[vertex]:
                if not visited.get(neighbor, False):
                    print("Neighbor: ", neighbor)
                    return dfs(neighbor)
        dfs(start)
        print(visited)
        return result





    
graph = Graph()
graph.add_vertex('A')
graph.add_vertex('B')
graph.add_vertex('C')
graph.add_vertex('D')
graph.add_vertex('E')
graph.add_vertex('F')
graph.add_edge('A', 'B')
graph.add_edge('A', 'C')
graph.add_edge('B', 'D')
graph.add_edge('C', 'E')
graph.add_edge('D', 'E')
graph.add_edge('D', 'F')
graph.add_edge('E', 'F')
graph.print_result()

# bfs = graph.bread_first_traversal('A')
# print("BFS: ", bfs)
dfs_iter = graph.dsf_iteratively('A')
print("ITE: ", dfs_iter)
dfs_rec = graph.dfs_recursively('A')
print("REC: ", dfs_rec)
    