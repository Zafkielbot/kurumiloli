let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: ??
║
╠➥ Github: _*PRIVATE BY OWNER*_
╠➥ Link Gc¹ : https://bit.ly/39aaDdR
╠➥ Link Gc² : http://bit.ly/2Pp7CQp
╠➥ Link Gc³ : http://bit.ly/3d3rDnj
╠➥ Link Gc⁴ : http://bit.ly/3mqRqKJ
╠➥ YouTube: http://bit.ly/3tQpS3I
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Khoirul
╠➥ Dll.
╠➥ Dan kawan yang lain :)
║
║╭──❉ *DONASI BOS* ❉─────
║│➸ *PULSA*: _085693602003_
║│➸ *PULSA*: _085693596312_
║│➸ *PULSA*: _08998512588_
║│➸ *DANA*: _085693596312_
║│➸ *DANA*: _085693602003_
║│➸ *DANA*: _08998512588_
║│➸ *GOPAY*: _085693602003_
║│➸ *SAWERIA*: _http://bit.ly/3rksIwk_
║─────❉ *DONASI BOS* ❉─────
║
║>Request? Wa.me/6285693602003
║
╠═〘 Zafkiel BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
