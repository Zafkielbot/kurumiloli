let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.keren)}”`, m)
}
handler.help = ['kerencek']
handler.tags = ['game']
handler.command = /^(kerencek)$/i
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

global.keren = [
'Keren Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'Keren Level : 7%\n\nSerius ya Bro,, Lu ampir mirip kayak Setan!',
'Keren Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'Keren Level : 22%\n\nMungkin karna lo sering liat berbuat maksiat😂',
'Keren Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'Keren Level : 35%\n\nYang sabar ya ayang',
'Keren Level : 41%\n\nSemoga diberkati mendapat jodoh',
'Keren Level : 48%\n\nDijamin cewek susah deketin lo',
'Keren Level : 56%\n\nLu Setengah Keren :v',
'Keren Level : 64%\n\nCukuplah',
'Keren Level : 71%\n\nLumayan Keren juga lu ya',
'Keren Level : 1%\n\nAWOAKAK Gk Keren Lu Bro!!!',
'Keren Level : 1%\n\nAWOAKAK Gk Keren Lu Bro!!!!',
'Keren Level : 1%\n\nAWOAKAK Gk Keren Lu Bro!!!!',
'Keren Level : 1%\n\nAWOAKAK Gk Keren Lu Bro!!!!',
'Keren Level : 77%\n\nGak akan Salah Lagi dah Om',
'Keren Level : 83%\n\nDijamin Cewek gak akan kecewa Om',
'Keren Level : 89%\n\nCewek2 pasti bakalan pingsan klo ngeliat lo!',
'Keren Level : 94%\n\nAARRGGHHH!!!',
'Keren Level : 100%\n\nLU EMANG COWOK TERKEREN YANG PERNAH GW LIAT!!!',
]
