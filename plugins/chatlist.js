let handler = async (m, { conn }) => {
	
  let txt = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v =>`${conn.getName(v.jid)}\n${v.jid} `).join`\n\n`
  conn.reply(m.chat, 'List chat:\n' + txt, m)
}
handler.help = ['chatlist']
handler.tags = ['info']
handler.command = /^(chat(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

