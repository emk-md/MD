import './function/settings/settings.js'
import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

// =========================
// CONFIG DATA
// =========================

const info = {
  nomerbot: '212786946506',
  pairingNumber: '212786946506',
  nomorwa: '212786946506',
  nameown: 'KIM SUN OO',
  nomerown: '212773608927',
  packname: 'Sticker',
  author: 'KIM SUN OO',
  namebot: 'WhatsApp Bot',
  wm: 'KIM SUN OO',
  stickpack: 'Sticker',
  stickauth: 'KIM SUN OO'
}

const media = {
  ppKosong: '',
  didyou: '',
  rulesBot: '',
  thumbnail: '',
  thumb: '',
  logo: '',
  unReg: '',
  registrasi: '',
  confess: '',
  access: '',
  tqto: '',
  spotify: '',
  weather: '',
  gempaUrl: '',
  akses: '',
  wel: '',
  good: ''
}

const url = {
  sig: '',
  sgh: '',
  sgc: ''
}

const payment = {
  pdana: ''
}

const msg = {
  wait: 'Processing...',
  eror: 'Error occurred'
}

const api = {
  uptime: '',
  xyro: '',
  lol: ''
}

// =========================
// OWNER
// =========================

global.owner = [
  ['33759850405', 'KIM SUN OO', true],
  ['212773608927', 'KIM SUN OO', true]
]

global.mods = []
global.prems = []
global.multiplier = 69

// =========================
// RPG
// =========================

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()

    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }

    let results = Object.keys(emot)
      .map(v => [v, new RegExp(v, 'gi')])
      .filter(v => v[1].test(string))

    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

// =========================
// INFORMATION
// =========================

global.nomerbot = info.nomerbot
global.pairingNumber = info.pairingNumber
global.nomorwa = info.nomorwa
global.nameown = info.nameown
global.nomerown = info.nomerown
global.packname = info.packname
global.author = info.author
global.namebot = info.namebot
global.wm = info.wm
global.stickpack = info.stickpack
global.stickauth = info.stickauth

// =========================
// THUMBNAIL
// =========================

global.ppKosong = media.ppKosong
global.didyou = media.didyou
global.rulesBot = media.rulesBot
global.thumbnail = media.thumbnail
global.thumb = media.thumb
global.logo = media.logo
global.unReg = media.unReg
global.registrasi = media.registrasi
global.confess = media.confess
global.access = media.access
global.tqto = media.tqto
global.spotify = media.spotify
global.weather = media.weather
global.gempaUrl = media.gempaUrl
global.akses = media.akses
global.wel = media.wel
global.good = media.good

// =========================
// SOCIAL MEDIA
// =========================

global.sig = url.sig
global.sgh = url.sgh
global.sgc = url.sgc

// =========================
// PAYMENT & API
// =========================

global.pdana = payment.pdana
global.wait = msg.wait
global.eror = msg.eror
global.uptime = api.uptime
global.xyro = api.xyro
global.lol = api.lol

// =========================
// AUTO RELOAD
// =========================

let file = fileURLToPath(import.meta.url)

watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
