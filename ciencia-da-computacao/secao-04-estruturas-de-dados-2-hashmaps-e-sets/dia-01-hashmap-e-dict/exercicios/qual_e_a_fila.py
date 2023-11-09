# Exercício feito na 'aula ao vivo' do conteúdo na plataforma (gravada)

# A cantina da sua escola está ficando um caos com as filas.
# Um dia resolveram distribuir senhas.
# Ocorre que perderam o controle de quais senhas já haviam distribuído.
# A única informação que a cantina tem agora é qual pessoa
# vem imediatamente após a outra.
# Seu trabalho é remontar completamente a fila à partir dessas informações.

# Input:
orders = [
    ("fernanda", "rafa"),
    ("fran", "daniel"),
    ("mirian", "gabriel"),
    ("matheus", "yasmin"),
    ("giovanni", "fernanda"),
    ("rafa", "fran"),
    ("daniel", "mirian"),
    ("gabriel", "matheus"),
]

# Output:
# [
#     "giovanni",
#     "fernanda",
#     "rafa",
#     "fran",
#     "daniel",
#     "mirian",
#     "gabriel",
#     "matheus",
#     "yasmin",
# ]


def get_order_using_list(orders):
    people_in_front = [pair[0] for pair in orders]
    people_behind = [pair[1] for pair in orders]
    first_person = ""

    for person in people_in_front:
        if person not in people_behind:
            first_person = person

    ordered = [first_person]
    while len(ordered) < len(people_in_front) + 1:
        for person in orders:
            if person[0] == ordered[-1]:
                ordered.append(person[1])

    return ordered


def get_order_using_dict(orders):
    order_map = {person[0]: person[1] for person in orders}
    inverted_order_map = {person[1]: person[0] for person in orders}
    person_in_front = ""

    for person in order_map:
        if person not in inverted_order_map:
            person_in_front = person

    ordered = [person_in_front]
    while person_in_front in order_map:
        ordered.append(order_map[person_in_front])
        person_in_front = order_map[person_in_front]

    return ordered


print("Usando listas:")
print(get_order_using_list(orders))
print("\n")
print("Usando dict:")
print(get_order_using_dict(orders))
