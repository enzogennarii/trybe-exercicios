import random

# import json


def ex_1(name):
    for i in range(len(name), 0, -1):
        print(name[:i])


def ex_2():
    with open("words.txt", "r") as file:
        words_list = file.read().splitlines()
    secret_word = random.choice(words_list)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))

    for chance in range(3):
        answer = input(f"Adivinhe a palavra embaralhada: {scrambled_word}\n")
        if answer == secret_word:
            print("Parabéns, você acertou!")
            break
        elif chance == 2:
            print("Você perdeu!")
        else:
            print("Você errou, tente novamente!")


# Terminar
# def ex_4():
#     books = []

#     with open("books.json", "r") as file:
#         books = json.load(file)
#         categories = {
#             category
#             for book in books
#             for category in book["categories"]
#             if category != ""
#         }

#     print(categories)


def ex_5(n):
    numbers = [i for i in range(1, n + 1)]

    for number in numbers:
        if number % 3 == 0 and number % 5 == 0:
            numbers[number - 1] = "FizzBuzz"
        elif number % 3 == 0:
            numbers[number - 1] = "Fizz"
        elif number % 5 == 0:
            numbers[number - 1] = "Buzz"
    return numbers


def ex_6(email: str):
    user, domain = email.split("@")
    a = domain.split(".")[1]
    print(len(a), a)

    if not user[0].isalpha():
        print("Invalid username")

    if len(a) < 1 or len(a) > 3:
        print("Invalid extension")

    print(user, domain)


# ex_6("enzo.gennari02@gmail.com")
