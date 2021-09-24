let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.populer)}”`, m)
}
handler.help = ['populer']
handler.tags = ['game']
handler.command = /^(populer)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.populer = [
'Populer Level : 1%\n\nSiapa kamu Aku nggak kenal!',
'Populer Level : 5%\n\nKasihan nggak ada yang kenal',
'Populer Level : 10%\n\nSabar bro',
'Populer Level : 20%\n\nKamu berjuang aja',
'Populer Level : 30%\n\nKamu lumayan populer kok',
'Populer Level : 40%\n\nKamu kenalan aja ama semua anggota grup nanti kamu jadi populer kok',
'Populer Level : 50%\n\nNah ini banyak yang kenal kamu udah jadi populer',
'Populer Level : 60%\n\nKamu hebat banget',
'Populer Level : 70%\n\nKamu itu populer tapi kamu malu',
'Populer Level : 80%\n\nAdmin itu kalah populer sama kamu Kamu hebat',
'Populer Level : 90%\n\nKamu orang populer itu kan',
'Populer Level : 100%\n\nGuys ke sini guys ada orang populer',
]
