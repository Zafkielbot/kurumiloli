let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, *${conn.user.name}* diundang oleh @${m.sender.split`@`[0]}
    
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), '© Kurumiloli', 'MENU', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.tags = ['owner']

handler.command = /^join2$/i

handler.owner = true

module.exports = handler