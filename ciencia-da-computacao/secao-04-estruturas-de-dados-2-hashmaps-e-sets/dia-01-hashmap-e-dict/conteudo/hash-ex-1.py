nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]


def numero_mais_frequente(numeros):
    contagem_numeros = dict()
    mais_frequente = numeros[0]

    for num in numeros:
        if contagem_numeros.get(num) is None:
            contagem_numeros[num] = 1
        else:
            contagem_numeros[num] += 1

        if contagem_numeros[num] > contagem_numeros[mais_frequente]:
            mais_frequente = num

    return mais_frequente


print(numero_mais_frequente(nums))
