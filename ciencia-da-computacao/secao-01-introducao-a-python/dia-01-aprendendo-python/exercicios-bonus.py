import time


def get_lower_num(arr):
    sorted_arr = sorted(arr)
    return sorted_arr[0]


def print_triangle(n):
    for i in range(1, n + 1, 1):
        print("*" * i)


def summation_1_to_n(n):
    summation = (n**2 + n) // 2
    return summation


def calc_price_fuel(qtt, type):
    alcohol_price = 1.90
    gasoline_price = 2.50

    if type == "A - álcool":
        if qtt <= 20:
            return f"R$ {round(qtt * alcohol_price * 0.97, 2)}"
        else:
            return f"R$ {round(qtt * alcohol_price * 0.95, 2)}"
    elif type == "G - gasolina":
        if qtt <= 20:
            return f"R$ {round(qtt * gasoline_price * 0.96, 2)}"
        else:
            return f"R$ {round(qtt * gasoline_price * 0.94, 2)}"

    return "Combustível inválido!"


inicio = time.time()
# print(get_lower_num([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# print_triangle(5)
# print(summation_1_to_n(10000))
print(calc_price_fuel(21, "G - gasolina"))
fim = time.time()
tempo_execucao = round((fim - inicio) * 1000, 2)
print(f"Tempo de execução: {tempo_execucao} ms.")
