import random,string

"""
this module is to generate using random
"""
# random phone number
# random password

class Randomise :
    letters = string.ascii_letters 
    digits = string.digits
    def __init__(self):
        pass
    def generate_phone_number(length=8,countrySymbol="212"):
        generated = countrySymbol
        for i in range(length):
            generated += random.choice(digits)
        return generated
    def generate_password(length,with_digits=False,with_symbols=False):
        """function structure => 
        generate_password(length,with_digits=False,with_symbols=False)"""
        letters = string.ascii_letters
        if with_digits == True:
            letters += string.digits
        if with_symbols == True:
            letters += string.punctuation
        generated = ""
        for i in range(length):
            generated += random.choice(letters)
        return generated