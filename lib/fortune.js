const fortuneCookies = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужни истоки",
    "Не бойся неведомого",
    "Тебя ждет приятный сюрприз",
    "Будь проще везде, где только можно.",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}