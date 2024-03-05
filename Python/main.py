import re

def decimal():
    num = int(input("Digite um número Decimal para transformar em Binário: "))
    translate = bin(num)
    res = re.sub ('0b', "0", translate)
    print(print(f"O número Decimal {(num)} convertido para Binário é {res}"))



def binario():
        num = int(input("Digite um número Binário para transformar em Decimal: "))
        translate = int(str(num), 2)
        print(f"O número Binário {(num)} convertido para Decimal é {translate}")


num = str(input('Escolha entre Binário e Decimal: '))

if num == "Binário":
    binario()
elif num == "Decimal":
    decimal()
else:
    print("Valor digitado invalido")
