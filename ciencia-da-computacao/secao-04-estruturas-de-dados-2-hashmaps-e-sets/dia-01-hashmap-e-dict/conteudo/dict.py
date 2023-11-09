dobros = {num: num * 2 for num in range(3, 21)}


def conta_letras(palavra: str):
    qtt_caracteres = dict()
    for letra in palavra:
        if qtt_caracteres.get(letra) is None:
            qtt_caracteres[letra] = 1
        else:
            qtt_caracteres[letra] += 1
    return qtt_caracteres


for num in dobros.keys():
    if num % 2 != 0:
        dobros[num] = num * 3
print(dobros)
