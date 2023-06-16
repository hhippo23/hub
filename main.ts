radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(0)
    radio.sendNumber(CompNo)
    radio.sendValue("name", Destination)
    radio.setGroup(1)
    basic.showString("S")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I")
    basic.pause(2000)
    basic.clearScreen()
})
let Destination = 0
let CompNo = 0
radio.setGroup(1)
CompNo = 3
Destination = 2
