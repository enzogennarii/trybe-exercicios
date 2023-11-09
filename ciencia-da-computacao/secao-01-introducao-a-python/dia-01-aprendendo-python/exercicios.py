def print_higher_num(a, b):
    if a > b:
        print(a)
    else:
        print(b)


def get_average(values):
    length = len(values)
    summation = 0

    for value in values:
        summation += value

    return summation / length


def print_square(length):
    for i in range(length):
        print("*" * length)


def print_longest_name(names):
    longest_name = ""

    for name in names:
        if len(name) > len(longest_name):
            longest_name = name

    print(longest_name)


def busca_tinta_necessaria(metros):
    litros = metros / 3
    latas = litros // 18 + 1
    preco = latas * 80

    return print(tuple([latas, preco]))


def tipo_de_triangulo(a, b, c):
    nao_e_triangulo = a + b < c or a + c < b or b + c < a

    if nao_e_triangulo:
        print("não é um triângulo")
    elif a == b and b == c:
        print("equilátero")
    elif a == b or b == c or a == c:
        print("isósceles")
    elif a != b and b != c and a != c:
        print("escaleno")
