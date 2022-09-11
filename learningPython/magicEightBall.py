import random

random_number = random.randint(1, 11)
# print(random_number)

name = "Daric"

question = "Whats my name"

answer = ''

if name == "":
  print("Question: " + question)
else:
  print(name + " asks: " + question)

if random_number == 1:
  answer = 'Yes - definetly.'
elif random_number == 2:
  answer = 'It is decidedly so.'
elif random_number == 3:
  answer = 'Without a doubt.'
elif random_number == 4:
  answer = 'Reply hazy, try again.'
elif random_number == 5:
  answer = 'Ask again later.'
elif random_number == 6:
  answer = 'Better not tell you now.'
elif random_number == 7:
  answer = 'My sources say no.'
elif random_number == 8:
  answer = 'Outlook not so good.'
elif random_number == 9:
  answer = 'Very doubtful.'
elif random_number ==10:
  answer = 'Most Def'
elif random_number == 11:
  answer = 'Yassss.'
else:
  answer = 'Error'
# print(name + ' asks: ' + question)
# print('Magic 8-Ball\'s answer:' + ' ' + answer)
if question == "":
  print("The Magic 8-Ball cannot provide a fortune unless you ask it something.")
else:
  # print(name + " asks: " + question)
  print("Magic 8-Ball's answer: " + answer)
