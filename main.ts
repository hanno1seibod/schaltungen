let t1 = false
let t2 = false
function ODER (bool2: boolean, bool22: boolean) {
    return bool2 || bool22
}
function NICHT (bool1: boolean) {
    return !(bool1)
}
function UND (bool2: boolean, bool22: boolean) {
    return bool2 && bool22
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        t1 = true
    } else {
        t1 = false
    }
    if (input.buttonIsPressed(Button.B)) {
        t2 = true
    } else {
        t2 = false
    }
})
basic.forever(function () {
	
})
