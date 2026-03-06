

# tri numbers 

# numbers = [0,120,44,98,325,4,587,-78]

# tried = []

# temp1 = temp2 = 0

# for i in  range(len(numbers)): # tri numbers under a list 
#     temp1 = numbers[i]
#     for j in range(len(numbers)):
#         if numbers[j] > temp1:
#             numbers[i],numbers[j] = numbers[j],numbers[i]
        
# print(numbers)


import pywhatkit
from datetime import datetime

now = datetime.now()

chour = now.strftime("%H")
mobile = "+212605497580"
message = "hhh"
hour = "1"
minute = "15"
pywhatkit.sendwhatmsg(mobile,message,hour,minute)