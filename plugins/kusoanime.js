let fetch = require('node-fetch')
let limit = 30
let handler = async function (m, { text, isPrems, isOwner }) {
	
    if (!text) throw 'yg dicari apa'
  let res = await fetch('https://tobz-api.herokuapp.com/api/kuso?q=' + text + '&apikey=BotWeA')
let json= await res.json()
  const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  const jwban =  `➸ *info:* ${json.info}\n\n➸ *link download:* ${json.link_dl}➸ *sinopsis:* ${json.sinopsis}\n\n➸ *judul* ${json.title}`
            
            
			await this.reply(m.chat, 'mengupload .......' ,m)
			await sleep(10000)
            this.sendFile(m.chat,json.thumb, 'image.jpg', jwban, m)
}
handler.tags = ['fun']
handler.command = /^kusonime$/i

module.exports = handler
