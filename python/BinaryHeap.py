import math
class MaxBinaryHeap:
    def __init__(self):
        self.values = []

    def insert(self, value):
        self.values.append(value)
        self.bubble_up()

    def get_values(self):
        return self.values

    def bubble_up(self):
        idx = len(self.values) - 1
        element = self.values[idx]
        parentIdx = None
        parent = None

        while idx > 0 : # edge case for idx > 0 to eliminate undefined (comparing with negative index)
            parentIdx = math.floor((idx - 1)/2)
            parent = self.values[parentIdx]

            if element <= parent: break
            self.values[idx] = parent
            self.values[parentIdx] = element
            idx = parentIdx

    def extract_max(self):
        idx = 0
        max = self.values[0]
        end = self.values.pop()
        #  edge case if len > 1
        if len(self.values) > 1:
            self.values[0] = end 
            self.pupple_down()
        return max
        
    def pupple_down(self):
        idx = 0
        element = self.values[0]
        length = len(self.values)
        left_child_idx = None
        right_child_idx = None
        left_child = None
        right_child = None
        swap_idx = None

        while True:
            left_child_idx = 2 * idx  + 1
            right_child_idx = 2 * idx  + 2
            swap_idx = None

            if left_child_idx < length:
                left_child = self.values[left_child_idx]
                if left_child > element:
                    swap_idx = left_child_idx
            
            if right_child_idx < length:
                right_child = self.values[right_child_idx]
                if (swap_idx == None and right_child > element) or (swap_idx is not None and right_child > left_child):
                    swap_idx = right_child_idx

            if swap_idx is None: break
            self.values[idx] = self.values[swap_idx]
            self.values[swap_idx] = element
            idx = swap_idx



# max_binary_heap = MaxBinaryHeap()
# max_binary_heap.insert(50)
# max_binary_heap.insert(40)
# max_binary_heap.insert(60)
# max_binary_heap.insert(30)
# max_binary_heap.insert(70)
# max_binary_heap.insert(20)
# max_binary_heap.insert(80)
# max_binary_heap.insert(10)
# max_binary_heap.insert(90)
# max_binary_heap.insert(110)
# max_binary_heap.extract_max()

# values = max_binary_heap.get_values()
# print(values)
# max = max_binary_heap.extract_max()
# print(max)
# max = max_binary_heap.extract_max()
# print(max)
# print(max)
# max = max_binary_heap.extract_max()
# print(max)
# values = max_binary_heap.get_values()
# print(values)
