def maior_substring_sem_repeticao(string: str):
    substrings = set()
    letras_substring = set()
    substring = ""

    for index, letra in enumerate(string):
        if letra not in letras_substring:
            letras_substring.add(letra)
            substring += letra
        else:
            substrings.add(substring)
            substring = "" + letra
            letras_substring.clear()
            letras_substring = {letra}
        if index == len(string) - 1:
            substrings.add(substring)

    maior_substring = 0
    for s in substrings:
        if len(s) > maior_substring:
            maior_substring = len(s)

    print(substrings)
    return maior_substring


string = "serdevemuitolegalmasehprecisoestudarbastante"
print(maior_substring_sem_repeticao(string))

a = set([1, 2])
b = set([3, 4, 5])
print(a.isdisjoint(b))
