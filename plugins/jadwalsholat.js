const axios = require('axios')

let handler = async(m, { conn, text }) => {

    new Promise((reject) => {
        if (!text) return conn.reply(m.chat, 'kota apa', m)

        axios.get('https://tobz-api.herokuapp.com/api/jadwalshalat?q='+ text +'&apikey=BotWeA')
            .then((res) => {
                // console.log(res.data.result)
                const teks = `_Jadwal sholat untuk wilayah ${text} dan sekitarnya_\n\n╭─ ❏ *Imsak:* ${res.data.result.imsak}\n├─ ❏ *Subuh:* ${res.data.result.subuh}\n├─ ❏ *Matahari terbit:* ${res.data.result.sunrise}\n├─ ❏ *dzuhur:* ${res.data.result.dzuhur}\n├─ ❏ *ashar:* ${res.data.result.ashar}\n├─ ❏ *matahari terbenam:* ${res.data.result.sunset}\n├─ ❏ *maghrib:* ${res.data.result.maghrib}\n├─ ❏ *isya:* ${res.data.result.isha}\n├─ ❏ *tengah malam:* ${res.data.result.midnight}\n└──`
                conn.reply(m.chat, teks, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}



handler.command = /^jadwalsholat$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
