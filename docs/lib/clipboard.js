let clipboardCopy

if (navigator.clipboard) {
    clipboardCopy = (text, cb) => {
        navigator.clipboard.writeText(text).then(() => {
            cb && cb(true)
        }).catch(() => {
            cb && cb(false)
        })
    }
} else {
    const el = document.createElement('textarea')
    el.setAttribute('type', 'hidden')
    el.id = 'clipboardService'
    Object.assign(el.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        'z-index': -10
    })
    document.body.appendChild(el)
    clipboardCopy = (text, cb) => {
        el.innerText = text
        el.select()
        el.setSelectionRange(0, 99999)
        const res = document.execCommand('copy')
        cb && cb(res)
    }
}

export {
    clipboardCopy
}
