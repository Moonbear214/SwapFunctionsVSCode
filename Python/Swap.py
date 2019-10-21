# Variables
inita = 5
initb = 7

# Functions

def Printing(msg, a, b):
    print(msg + ": a = " + str(a) + ", b = " +  str(b) + "\n")


def Swap(a, b):
    temp = a
    a = b
    b = temp

    Printing("Temp", a, b)
    a = inita 
    b = initb

    a = a + b
    b = a - b
    a = a - b

    Printing("Math", a, b)
    a = inita 
    b = initb

    a, b = b, a

    Printing("Tuple", a, b)
    a = inita 
    b = initb

    a ^= b
    b ^= a
    a ^= b

    Printing("XOR", a, b)
    a = inita 
    b = initb


# Call Functions
Printing("Original", inita, initb)

Swap(inita, initb)


