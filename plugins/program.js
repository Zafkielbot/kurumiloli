let handler = async m => m.reply(`
[Sebagian program telah error mohon perbaiki]

`.trim()) // Tambah sendiri kalo mau
handler.help = ['program']
handler.tags = ['program']
handler.command = /^(program)$/i

handler.owner = true

module.exports = handler