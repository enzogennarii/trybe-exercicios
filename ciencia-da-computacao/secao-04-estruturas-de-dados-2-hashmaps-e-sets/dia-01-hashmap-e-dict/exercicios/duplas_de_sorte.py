# Exercício feito na 'aula ao vivo' do conteúdo na plataforma (gravada)

# Em jogos de tabuleiro que precisam de dois dados de seis lados,
# é muito comum que quando a soma dos números dá 7 algo especial aconteça.
# Isso porque 7 é a soma mais provável.
# Você vai receber uma lista de números que representam
# várias jogadas de um dado de seis lados.
# Sua missão é combinar as jogadas que somam 7.
# Ou seja, descubra todas as duplas que é possível
# formar para chegar ao resultado 7.
# Cada jogada só pode ser combinada uma única vez com outra dupla.

# Input:
rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]

# Output:
# [
#     (5, 2),
#     (1, 6),
#     (3, 4),
#     (1, 6),
# ]


def get_sevens_using_list(rolls):
    pass


def get_sevens_using_dict(rolls):
    seen_before = dict()
    combinations = list()

    for roll in rolls:
        if 7 - roll in seen_before:
            combinations.append((7 - roll, roll))
            del seen_before[7 - roll]
        else:
            seen_before[roll] = True

    return combinations


print("Usando listas:")
print(get_sevens_using_list(rolls))
print("\n")
print("Usando dict:")
print(get_sevens_using_dict(rolls))
