# https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/71d9c50f-d743-4f5f-8b2f-aae2d52d69f2/day/e51bdf24-63b9-4180-8429-97e33c120393/lesson/f8877fba-c0fe-41c5-93b8-f9535d135aa1

subordinados = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}


def calcula_score(pessoa: int):
    if len(subordinados[pessoa]) == 0:
        return 1

    score = 1
    for subordinado in subordinados[pessoa]:
        score += calcula_score(subordinado)

    return score


print(calcula_score(1))
print(calcula_score(2))
print(calcula_score(3))
print(calcula_score(4))
print(calcula_score(5))
print(calcula_score(6))
print(calcula_score(7))
