class Employee:
    def __init__(self, id_num: int, name: str):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num: int) -> int:
        return id_num % 10

    def insert(self, employee: Employee) -> None:
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num: int) -> str:
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num: int) -> bool:
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num: int, new_name: str) -> None:
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

    hashmap = HashMap()
    for id, name in employees:
        hashmap.insert(Employee(id, name))

    print(hashmap.get_value(10))
    hashmap.update_value(10, "name30")
    print(hashmap.get_value(10))
