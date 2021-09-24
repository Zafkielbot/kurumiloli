let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.toxic)}”`, m)
}
handler.help = ['toxic']
handler.tags = ['quotes']
handler.command = /^(toxic)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.toxic = [
  "Kontol",
  "Memek",
  "Babi",
  "Ajg",
  "Bngst",
  "Kntl",
  "Kontol",
  "Mmk",
  "Pepek",
  "Pantek",
  "Ngewe yu",
  "Bacot lu gay",
  " gay",
  "anak dajal",
  "pala kontol",
  "Jelek lo kontol",
  "Lo jelek",
  "Kamu jelek, aku gasuka.",
  "Kamu jelek, pantes galaku",
  "Memek kmu pasti lobeh",
  "Kontol kamu pasti kecil",
  "Toxic mulu, astaghfirullah",
  "tobot tolol",
  "Astaghfirullah",
  "Ngewe",
  "BO",
  "Ngentot",
  "Ngewe",
  "Henceut",
  "Baok",
  "Over badword",
  "Lahh ngatur!!",
  "Mek",
  "mak lu tonte",
  "kaga open BO lu tod?",
  "Napa gaseneng bos?",
  "Iri bilang bos",
  "Iri bilang kontol",
  "Yg namanya ardi kayak kontol",
]
