class Employee:
    def __init__(self, id_num: int, name: str):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num: int) -> int:
        return id_num % 10

    def insert(self, employee: Employee) -> None:
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num: int) -> str:
        address = self.get_address(id_num)
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                return employee.name
        return None

    def has(self, id_num: int) -> bool:
        address = self.get_address(id_num)
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                return True
        return False

    def update_value(self, id_num: int, new_name: str) -> None:
        address = self.get_address(id_num)
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                employee.name = new_name


if __name__ == "__main__":
    employees = [
        (14, "name1"),
        (23, "name2"),
        (10, "name3"),
        (9, "name4"),
        (24, "name24"),
    ]

    hashmap = HashMap()
    for id, name in employees:
        hashmap.insert(Employee(id, name))

    print(hashmap._buckets)
    print(hashmap.get_value(14))
    print(hashmap.get_value(24))
    hashmap.update_value(24, "24name")
    print(hashmap.get_value(24))
    print(hashmap.has(11))
