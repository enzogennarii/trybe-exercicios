class Conjunto:
    def __init__(self, length=1000) -> None:
        self._data = [False for i in range(length + 1)]
        self.last_element = 0

    def add(self, item: int):
        if not self._data[item]:
            self._data[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self) -> str:
        string = "{"

        for index, item in enumerate(self._data):
            if item:
                string += str(index)
            if item and index < self.last_element:
                string += ", "
            elif item and index == self.last_element:
                break

        return string + "}"
