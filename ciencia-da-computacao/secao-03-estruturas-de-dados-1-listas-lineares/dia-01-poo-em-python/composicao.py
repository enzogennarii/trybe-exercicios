# Exercício de fixação 1 - Composição


class Ventilador:
    def __init__(self, marca, preco):
        self.marca = marca
        self.preco = preco


class Pessoa:
    def __init__(self, nome, dinheiro):
        self.nome = nome
        self.dinheiro = dinheiro
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if self.dinheiro >= ventilador.preco:
            self.dinheiro -= ventilador.preco
            self.ventilador = ventilador
        else:
            print("Sem dinheiro para a compra!")

    def __str__(self) -> str:
        if self.ventilador is None:
            return f"{self.nome} não tem um ventilador."
        else:
            return f"{self.nome} tem um ventilador {self.ventilador.marca}"


pessoa = Pessoa("Gennari", 3000)
ventilador = Ventilador("Ventisol", 250)

print(f"{pessoa.nome} tem {pessoa.dinheiro} reais")
print(pessoa)
pessoa.comprar_ventilador(ventilador)
print(
    f"""Comprou um ventilador de {ventilador.preco}
    e agora tem {pessoa.dinheiro} reais"""
)
print(pessoa)
