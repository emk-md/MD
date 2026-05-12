import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
  clearSesi: false, // trash cleaner sessions
  clearTmp: true, // tmp trash cleaner
  addReply: true, // create with thumbnail in message
  idgc: '120363315668824185@g.us' // id gc buat join only
}

global.info = {
  nomerbot: '212786946506',
  pairingNumber: '212786946506',
  figlet: 'EMK LITE', // create a start console display
  nomorwa: '212786946506',
  nameown: 'KIM SUN OO',
  nomerown: '33759850405',
  packname: 'sticker by ',
  author: 'EMK AI',
  namebot: 'EMK AI',
  wm: 'EMK LITE.',
  stickpack: 'Whatsapp',
  stickauth: 'EMK LITE',
  jid: '@s.whatsapp.net'
}

// Thumbnail
global.media = {
  ppKosong: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
  didyou: 'https://telegra.ph/file/e40219cc8d472025f18b6.jpg',
  rulesBot: 'https://telegra.ph/file/7cd8985216ffd3c376238.jpg',
  thumbnail: 'https://files.catbox.moe/sqgfyy.jpg',
  thumb: 'https://files.catbox.moe/sqgfyy.jpg',
  logo: 'https://files.catbox.moe/sqgfyy.jpg',
  unReg: 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
  registrasi: 'https://files.catbox.moe/sqgfyy.jpg',
  confess: 'https://telegra.ph/file/bfef7e33bc60dd2608ac6.jpg',
  access: 'https://telegra.ph/file/5c35d4a180b9074a9f11b.jpg',
  tqto: 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg',
  spotify: 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
  weather: 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg',
  gempaUrl: 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg',
  akses: 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
  wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
  good: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
  sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}

// Social media
global.url = {
  sig: 'https://wa.me/qr/FFA4RBEQZQG6O1',
  sgh: 'https://wa.me/qr/FFA4RBEQZQG6O1',
  sgc: 'https://whatsapp.com/channel/0029VajvgNv30LKQQnapiq02'
}

// Donasi
global.payment = {
  psaweria: 'https://saweria.co/mamad',
  ptrakterr: '-',
  pdana: '0823427570'
}

// Info Wait
global.msg = {
  wait: '⏳ _Please wait a moment_\n> We are working on fulfilling your request...',
  eror: '🤖 _Information Bot_\n> Sorry for the inconvenience in using _EMK BOT_. There was an error in the system while executing the command.'
}

// api_id web suntik
global.apiId = {
  smm: '4524',
  lapak: '300672'
}

// Apikey
global.api = {
  user: '-', // api_id antinsfw
  screet: '-', // api_secret nsfw
  uptime: '-',
  xyro: '-',
  lol: 'GataDiosV2',
  smm: '-',
  lapak: '-',
  prodia: '-',
  bing: 'YOUR_BING_API_KEY'
}

global.APIs = {
  xyro: 'https://api.xyroinee.xyz',
  nightTeam: 'https://api.tioxy.my.id',
  lol: 'https://api.lolhumaan.xyz',
  smm: 'https://smmnusantara.id',
  lapak: 'https://panel.lapaksosmed.com'
}

// API Keys
global.APIKeys = {
  'https://api.xyroinee.xyz': 'vRFLiyLPWu',
  'https://api.lolhumaan.xyz': 'GataDiosV2'
}

// Auto reload file
const file = fileURLToPath(import.meta.url)

watchFile(file, async () => {
  unwatchFile(file)

  console.log(chalk.redBright("Update 'settings.js'"))

  await import(`${file}?update=${Date.now()}`)
})
