lista_de_palavras = [
    "Ana",
    "ama",
    "João",
    "que",
    "ama",
    "José",
    "mas",
    "José",
    "não",
    "ama",
    "Ana",
]


def palavras_por_letra(palavras):
    palavras_organizadas = dict()

    for palavra in palavras:
        letra_inicial = palavra[0].lower()
        if letra_inicial not in palavras_organizadas:
            palavras_organizadas[letra_inicial] = list([palavra])
        else:
            palavras_organizadas[letra_inicial].append(palavra)

    return palavras_organizadas


print(palavras_por_letra(lista_de_palavras))
