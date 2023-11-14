t1 = False
t2 = False
def ODER(bool2: bool, bool22: bool):
    return bool2 or bool22
def UND(bool2: bool, bool22: bool):
    return bool2 and bool22
def NICHT(bool1 : bool):
    return not bool1
def on_forever():
    global t1, t2
    if input.button_is_pressed(Button.A):
        t1 = True
    else:
        t1 = False
    if input.button_is_pressed(Button.B):
        t2 = True
    else:
        t2 = False
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
