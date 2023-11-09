import json
import random


def reveal_letter(pokemon, pokemon_to_guess):
    pokemon_letters = [letter for letter in pokemon]
    to_guess_letters = [letter for letter in pokemon_to_guess]

    for i in range(len(pokemon_letters)):
        if to_guess_letters[i] != pokemon_letters[i]:
            to_guess_letters[i] = pokemon_letters[i]
            break
        else:
            continue

    return "".join(to_guess_letters)


def main():
    with open("pokemons.json", "r") as file:
        results = json.load(file)["results"]
        pokemons = [pokemon["name"] for pokemon in results]

    pokemon = random.choice(pokemons)
    pokemon_to_guess = "-" * len(pokemon)

    game_running = True

    while game_running:
        answer = input(f"Adivinhe o pokemon: {pokemon_to_guess}\n")

        if answer == pokemon:
            game_running = False
            print("Parabéns, você acertou!")
        elif pokemon == pokemon_to_guess:
            game_running = False
            print("Você perdeu!")
        elif answer == "exit":
            game_running = False
            print("Jogo cancelado!")
        else:
            pokemon_to_guess = reveal_letter(pokemon, pokemon_to_guess)


main()
