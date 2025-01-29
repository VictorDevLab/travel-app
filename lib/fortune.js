const fortuneCookies = [
    "Fortune Lorem Cookie One",
    "Fortune Lorem Cookie Two",
    "Fortune Lorem Cookie Three",
    "Fortune Lorem Cookie Four",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}