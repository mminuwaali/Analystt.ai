# A Node is a value and a next.
class Node:
    def __init__(self, value: any = None) -> None:
        self.value, self.next = value, None


# The Linked class is a wrapper for a linked list that allows you to add nodes to the list.
# It creates a linked list.
class Linked:
    def __init__(self, head: Node | None = None) -> None:
        self.head, self.current = head, None

    def add(self, data: Node):
        if self.current:
            self.current.next = data
            self.current = self.current.next
        else:
            self.current = self.head = data
        return self


def to_linked(arr: list[any], pos: int | None = None) -> Linked:
    """
    It takes an array and an optional position, and returns a linked list with a cycle at the position

    :param arr: list[any]
    :type arr: list[any]
    :param pos: the position of the node that will be the start of the cycle
    :type pos: int | None
    :return: A linked list with a cycle
    """
    llist, cycle = Linked(), None
    for i, data in enumerate(arr):
        llist.add(Node(data))
        if pos == i:
            cycle = llist.current
    if cycle:
        llist.add(cycle)
    return llist


def cyclic(head: Node) -> bool:
    """
    If the node is in the set, return True, otherwise add it to the set and continue.

    :param head: the head of the linked list
    :type head: Node
    :return: the value of the node.
    """
    sets, node = set(), head.head
    while True:
        if not node:
            return False
        if node in sets:
            return True
        sets.add(node)
        node = node.next
    return False


# Example 1
arr, pos = [3, 2, 0, -1], 1
llist = to_linked(arr, pos)
print(cyclic(llist))

# Example 2
arr, pos = [1, 2], 0
llist = to_linked(arr, pos)
print(cyclic(llist))

# Example 3
arr, pos = [1], -1
llist = to_linked(arr, pos)
print(cyclic(llist))

#  try out more to problems to test it out
