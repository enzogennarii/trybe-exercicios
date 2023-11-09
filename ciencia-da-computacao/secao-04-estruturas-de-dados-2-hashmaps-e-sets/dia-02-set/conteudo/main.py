from Conjunto import Conjunto

if __name__ == "__main__":
    conjunto = Conjunto()

    for item in [0, 10, 100, 1000]:
        conjunto.add(item)

    print(conjunto)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)
