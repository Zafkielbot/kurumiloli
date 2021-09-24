let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) return m.reply ("Harap masukkan alamat IP. contoh: #ip 123.12.34.56")
try {
    let res = await fetch(global.API('https://api.ipgeolocation.io','/ipgeo',{apiKey: 'Zafkiel-Bot',ip:text}))
    let json = await res.json()
    let { ip, hostname, continent_code, continent_name, country_code2, country_code3, country_name, country_capital, state_prov, district, city, zipcode, latitude, longitude, is_eu, calling_code, country_tld, languages, country_flag, currency, time_zone } = json
    let pesan = `
            「IP Information」
            IP: ${ip}
            Benua (code): ${continent_code}
            Benua: ${continent_name}
            Negara: ${country_name}
            Negara (code1): ${country_code2}
            Negara (code2): ${country_code3}
            Ibu Kota Negara: ${country_capital}
            Negara Bagian: ${state_prov}
            Provinsi: ${district}
            Kota: ${city}
            Zip Code: ${zipcode}
            Latitude: ${latitude}
            Longitude: ${longitude}
            Eropa: ${is_eu}
            Kode telepon: ${calling_code}
            Kode internet: ${country_tld}
            Bahasa: ${languages}
            Mata uang: ${currency.code}
            Symbol : ${currency.symbol}
            Zona waktu: ${time_zone.name}
            `.trim ()
    conn.reply(m.chat, pesan, m)
}catch (e){
    m.reply("error!, coba lagi atau hububgi *#owner*")
    console.log (e)
}
}
handler.command = /^(ip)$/i
handler.tags = ['internet', 'tools']
handler.help = ['ip'].map(v => v + ' <alamat ip>')

module.exports = handler