const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
	let user = global.DATABASE._data.users[m.sender]
  if (user.registered === false) throw `Lu blm daftar bego ketik #daftar dulu`
    if (!text) return conn.reply(m.chat, 'Masukkan yang dicari', m)
    new Promise((resolve, reject) => {
        axios.get(`https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=` + encodeURIComponent(text))
            .then((res) => {
                        // console.log(res.data.result.nabi)
                const teks = `• *nama :* ${res.data.nabi.nama}\n• *lahir :* ${res.data.nabi.lahir}\n• *umur :* ${res.data.nabi.umur}\n• *tempat :* ${res.data.nabi.tempat}\n• *kisah :* ${res.data.nabi.kisah}`
                conn.reply(m.chat, teks, 'username',m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['kisahnabi <nama>']
handler.tags = ['internet']
handler.command = /^(kisahnabi|nabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
