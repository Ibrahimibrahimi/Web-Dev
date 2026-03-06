import os 

def creatFile(text,filePath):
    """
    createFile(textToCreate,FilePath) -> None
    """
    with open(filePath,"w") as newFile :
        newFile.write(text)
    print("File created successfuly")

def readFile(filePath):
    """
    readFile(FilePath) -> str 
    -> make sure about the file path that exist or no
    """
    data = ""
    try :
        with open(filePath,"r") as newFile :
            data = newFile.read()
            
    except FileNotFoundError as e:
        print("File not found !")
    return data
# creatFile("this is a file ","text.txt")
# print(readFile("text.txt"))
