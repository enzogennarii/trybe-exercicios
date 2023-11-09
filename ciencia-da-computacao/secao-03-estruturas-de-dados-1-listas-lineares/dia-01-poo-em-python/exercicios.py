from collections import Counter
from abc import ABC, abstractmethod

# Exercício 1


class TV:
    def __init__(self, tamanho) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    @canal.setter
    def canal(self, canal):
        if canal >= 1 and canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Canal inválido.")

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Canal inválido.")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


# Exercício 2


class Estatistica:
    def __init__(self, numbers=[1, 2, 3, 4, 5]) -> None:
        self.__numbers = numbers

    @property
    def numbers(self):
        return self.__numbers

    def media(self):
        total = 0

        for num in self.__numbers:
            total += num

        return total / len(self.__numbers)

    def mediana(self):
        sorted_numbers = sorted(self.__numbers)
        length = len(sorted_numbers)

        if length % 2 == 0:
            first = sorted_numbers[length // 2]
            second = sorted_numbers[length // 2 - 1]
            return (first + second) / 2
        else:
            return sorted_numbers[length // 2]

    def moda(self):
        contagem = Counter(self.__numbers)
        max_contagem = max(contagem.values())
        modas = []
        for numero, contagem in contagem.items():
            if contagem == max_contagem:
                modas.append(numero)

        return modas[0]


# Exercício 3


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        self.__lado = lado

    @property
    def lado(self):
        return self.__lado

    def area(self):
        return self.__lado**2

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.__base = base
        self.__altura = altura

    @property
    def base(self):
        return self.__base

    @property
    def altura(self):
        return self.__altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return (self.__base + self.__altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.__raio = raio

    @property
    def raio(self):
        return self.__raio

    def area(self):
        return 3.14 * (self.__raio**2)

    def perimetro(self):
        return 2 * 3.14 * self.__raio
