def blefe(rodada: dict):
    p1_jogadas = set(rodada["Clara"])
    p2_jogadas = set(rodada["Marco"])
    p1_dif = p1_jogadas - p2_jogadas
    p2_dif = p2_jogadas - p1_jogadas
    p1_pontos = max(p1_dif) - min(p1_dif)
    p2_pontos = max(p2_dif) - min(p2_dif)

    if p1_pontos > p2_pontos:
        return "Clara ganhou!"
    elif p1_pontos < p2_pontos:
        return "Marco ganhou!"
    else:
        return "Empate!"


entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

print(blefe(entrada))
