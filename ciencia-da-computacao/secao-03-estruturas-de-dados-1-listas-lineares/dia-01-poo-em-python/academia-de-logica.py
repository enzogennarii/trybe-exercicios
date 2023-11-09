def troco_de_moedas(moedas: list[int], quantia: int) -> int:
    moedas_totais = 0
    moedas_ordenadas = sorted(moedas, reverse=True)

    for moeda in moedas_ordenadas:
        if quantia // moeda >= 1:
            moedas_totais += quantia // moeda
            quantia -= (quantia // moeda) * moeda

    return moedas_totais or -1


print(troco_de_moedas([50, 25, 10, 5, 1], 92))
