// LIFFの初期化
function liffInitialize () {
    liff.init(
        data => {
            console.log('Initialize Success')
        },
        err => {
            console.log('LIFF initialization failed')
        }
    )
}

//Messageの送付
function sendTextMessage (msg) {
    liff.sendMessages([
        {
            type:'text',
            text:msg
        }
    ])
    .then(() => {
        console.log('message sent')
        liff.closeWindow()
    })
    .catch((err) => {
        console.log('error', err)
    })
}
