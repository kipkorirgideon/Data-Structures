
my_arr = [21,54,1,0,35,23,21,19,45,87,11] # random data len -> 11


def bubble_sort(arr):
    temp = None
    swap = False
    for i in range(len(arr), -1, -1):
        for j in range(0, i - 1, 1):
            if (arr[j] > arr[j + 1]):
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = True
        if not swap: break
        
    return arr

# results = bubble_sort(my_arr)
# print("Bubble Sort: ", results)

def selection_sort(arr):
    lowest = None
    temp = None
    for i in range(0, len(arr), 1):
        lowest = i 
        for j in range(i + 1, len(arr), 1):
            if arr[lowest] > arr[j]:
                lowest = j
        if (lowest != i):
            temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
    return arr

# results = selection_sort(my_arr)
# print("Selection Sort: ", results)


def insertion_sort(arr):
    temp = None
    j = None
    for i in range(1, len(arr), 1):
        j = i - 1
        temp = arr[i]
        while j >= 0 and arr[j] > temp:
            arr[j + 1] = arr[j]
            j-=1
        arr[j + 1] = temp      
    return arr

results = insertion_sort(my_arr)
print("Insertion Sort: ", results)