"""
This program will pick a random number between 1 and 10, and have Tracy draw a
"YES" or a "NO" depending on whether or not you choose the correct number.
"""

speed(10)
def yes():
    penup()
    backward(100)
    color("green")
    pensize(5)
    #letter Y
    left(90)
    pendown()
    forward(50)
    left(25)
    forward(50)
    backward(50)
    right(25)
    right(25)
    forward(50)
    backward(50)
    left(25)
    backward(50)
    right(90)
    #letter E
    penup()
    forward(100)
    pendown()
    forward(50)
    backward(50)
    left(90)
    forward(50)
    right(90)
    forward(50)
    backward(50)
    left(90)
    forward(50)
    right(90)
    forward(50)
    backward(50)
    right(90)
    forward(100)
    left(90)
    penup()
    #letter S
    forward(100)
    pendown()
    circle(25, 180)
    right(180)
    circle(25, -180)
    penup()
    setposition(0, 0)

def no():
    penup()
    backward(100)
    pendown()
    color("red")
    pensize(5)
    #letter N
    left(90)
    forward(100)
    right(150)
    forward(115)
    left(150)
    forward(100)
    right(90)
    penup()
    setposition(-100, 0)
    forward(200)
    #letter O
    pendown()
    circle(50)
    penup()
    setposition(0, 0)

# Choosing the number user will have to guess
import random
Number = random.randint(1,10)
Guess = int(input("I am thinking of a number between 1 and 10, what is it?"))

# Making sure the player chooses a number between 1 and 10
if Guess > 10:
    print("Whoops! You need to pick a number between 1 and 10!")
    exit()
    
if Guess < 1:
    print("Whoops! You need to pick a number between 1 and 10!")
    exit()

# Outputting "YES" or "NO" depending on if the player guessed the number correctly
if Guess == Number:
    yes()
    print("Correct! The number was " + str(Number) + "!")

if Guess != Number:
    no()
    print("Incorrect, the correct answer was " + str(Number) + "!")