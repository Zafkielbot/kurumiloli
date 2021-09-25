let fs = require('fs')
global.owner = ['628998512588','628112958665','6283175998566'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'apikey lu',
  'https://neoxr-api.herokuapp.com': 'apikey lu',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'apikey lu',
  'https://zahirr-web.herokuapp.com': 'apikey lu',
  'https://api.zeks.xyz': 'apikey lu',
  'https://api.lolhuman.xyz': 'apikey lu',
  'https://api.vhtear.com': 'apikey lu',
  'https://fxc7-api.herokuapp.com': 'apikey lu',
  'https://api.justaqul.xyz': 'apikey lu'
}

// Sticker WM
global.packname = 'Kurumiloli'
global.author = 'Rafli'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '*Server Error*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&backgroundColor=%23101820&fillTextPattern=Warning!&text='
global.watermark = '® Kurumiloli'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

// masukin apikey lu yang ada tulisan 'apikey lu' nya
