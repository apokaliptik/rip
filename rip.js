const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
WAMessageProto,
relayWAMessage,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
processTicksAndRejections,
ECONNABORTED,
apikey,
WA_DEAFULT_EPHEMERAL,
DataView,
TypedArray,
device,
Browser
} = require('@adiwajshing/baileys')
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require('fs')
const moment = require('moment-timezone')
const qrcode = require("qrcode-terminal")
const util = require('util')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const gcrevoked = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
const { spawn, exec, execSync } = require("child_process")
const { color, bgcolor } = require('./lib/color')
const clc = require('chalk')
const { version, bugs } = require('./package.json')

require('./root.js')
nocache('./root.js', module => console.log(`${module} has been changed!`))
require('./rip.js')
nocache('./rip.js', module => console.log(`${module} has been changed!`))
require('./setting.json')
nocache('./setting.json', module => console.log(`${module} has been changed!`))

const starts = async (root = new WAConnection()) => {
root.logger.level = 'warn'
root.version = [2, 2143, 3]
root.browserDescription  = [" ItsMeArip ","EDGE","18.04"]
console.log(banner.string) 
root.on('qr', () => {
console.log(color('[','red'), color('☭','red'), color(']','red'), color(' Please scan the QR code to whatsapp web \n'))
})

fs.existsSync('./skiuwers.json') && root.loadAuthInfo('./skiuwers.json')
root.on('connecting', () => {
start('2', 'Connecting . . .')
})
root.on('open', () => {
success('2' ,'[■■■■■■■■■■■■■■■] Connected') 
setTimeout( () => {
console.log(color(`\nSucces login to whatsapp web\n`, 'yellow'))
console.log(color(`================================================`, 'red'))
console.log(color(`[ ☭ ]        Made With Creator BotWea      [ ☭ ]` ,'yellow'))
console.log(color(`================================================`, 'red'))
console.log(color(`[•]`, 'yellow'), color(`Creator : ${setting.ownername}`, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Number : ${setting.ownerNumber} `, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Status : Online`, 'green'))
console.log(color(`[•]`, 'yellow'), color(`Note : Subscribe youtube ItsMeArip`, 'green'))
console.log(color(`================================================`, 'red'))
console.log(color(`  ${setting.fake}`, 'green'))
console.log(color(`================================================`, 'red'))
}, 1000)    		    	     	
}) 
await root.connect({timeoutMs: 30*1000})
fs.writeFileSync('./skiuwers.json', JSON.stringify(root.base64EncodedAuthInfo(), null, '\t'))
//root.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`,`\n\n====================================\n\nBot Telah Aktif Dan Berhasil Terhubung. \n\n====================================\n\n${JSON.stringify(root.user, null, 2)}\n`, MessageType.text, {contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{title: "© All Creator BotWea || ItsMeArip",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./image/fakethumb.jpg'),sourceUrl:"https://wa.me/6287776101997?text=Assalamu'alaikum, user bot verified."}}})
root.on('chat-update', async (message) => {
require('./root.js')(root, message)
})

root.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
root.sendMessage(call, `Maaf , Bot tidak menerima panggilan apapun [ ! ] \nNlpn | Vc | Spam | Sarkas = Block permanen`, MessageType.text)
setTimeout(() => {
root.blockUser(call, "add")
}, 10000)
})
root.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
isBattre = 'Not Detect' 
isCharge = 'Not Detect' 
root.on (`CB:action,,battery`, json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
isBattre = batterylevel + "%"
isCharge = json[2][0][1].live
})

root.on('group-participants-update', async (anu) => {
console.log(anu)
if (welcome == false) return
try {
rip = {"key": { "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6285945300923-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷  ${setting.botname}\n▷    ${setting.ownername} `, orderTitle: 'root', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const mdata = await root.groupMetadata(anu.jid)
console.log(anu)
const jamnyy = moment.tz('Asia/Jakarta').format('HH:mm')
const groupMet = await root.groupMetadata(anu.jid);
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);
memeg = mdata.participants.length;
num = anu.participants[0];
if (anu.action == "add" && !num.includes(root.user.jid)) {
let v = root.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = v.vname || v.notify || num.split("@")[0];
let p2 = await root.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ WELCOME IN GROUP ❳
│
├⊙ Group : ${mdata.subject}
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ Enjoy your life | Just fun >_<
`
//root.sendMessage(mdata.id, teks, MessageType.text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
root.sendMessage(mdata.id, teks, MessageType.text,{contextInfo :{text: 'hi',
"forwardingScore": 999,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${setting.fake}`,
"body": `${mdata.subject}`,
"mediaType": "2",
"thumbnailUrl": "https://telegra.ph/file/d3836b4e06b8714dea0e8.jpg",
"mediaUrl": "https://youtu.be/Xo98LeXoU1g",
"thumbnail": fs.readFileSync('./image/fake.jpg'),
"sourceUrl": `${setting.grub}`,
},mentionedJid:[num]}, quoted : rip})
}
if (anu.action == "remove" && !num.includes(root.user.jid)) {
let w = root.contacts[num] || { notify: num.replace(/@.+/, "") };
anu_user = w.vname || w.notify || num.split("@")[0];
let p2 = await root.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ LEAVE FROM GROUP ❳
│ 
├⊙ Group : ${mdata.subject}
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ Goodbye | Don't back again >_<
`
//root.sendMessage(mdata.id, teks, MessageType.text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
root.sendMessage(mdata.id, teks, MessageType.text,{contextInfo :{text: 'hi',
"forwardingScore": 999,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${setting.fake}`,
"body": `${mdata.subject}`,
"mediaType": "2",
"thumbnailUrl": "https://telegra.ph/file/d3836b4e06b8714dea0e8.jpg",
"mediaUrl": "https://youtu.be/Xo98LeXoU1g",
"thumbnail": fs.readFileSync('./image/fake.jpg'),
"sourceUrl": `${setting.grub}`,
},mentionedJid:[num]}, quoted : rip})
}
else if (anu.action == 'promote') {
const mdata = await root.groupMetadata(anu.jid)
num = anu.participants[0]
let p2 = await root.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ PROMOTE DETECTED ❳
│
├⊙ Group : ${mdata.subject}	
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ You do not believe, please see for yourself. 
`
//root.sendMessage(mdata.id, teks, MessageType.text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
root.sendMessage(mdata.id, teks, MessageType.text,{contextInfo :{text: 'hi',
"forwardingScore": 999,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${setting.fake}`,
"body": `${mdata.subject}`,
"mediaType": "2",
"thumbnailUrl": "https://telegra.ph/file/d3836b4e06b8714dea0e8.jpg",
"mediaUrl": "https://youtu.be/Xo98LeXoU1g",
"thumbnail": fs.readFileSync('./image/fake.jpg'),
"sourceUrl": `${setting.grub}`,
},mentionedJid:[num]}, quoted : rip})
}
else if (anu.action == 'demote') {
num = anu.participants[0]
const mdata = await root.groupMetadata(anu.jid)
let p2 = await root.getStatus(num)
let p3 = `${p2? `${p2.status}` : '-'}`
teks = `
⊙─❲ DEMOTE DETECTED ❳
│
├⊙ Group : ${mdata.subject}	
├⊙ Number : ${num.replace('@s.whatsapp.net', '')}
├⊙ User : wa.me/${num.split('@')[0]}
└⊙ Bio : ${p3}

⊙ You do not believe, please see for yourself.
`
//root.sendMessage(mdata.id, teks, MessageType.text, {quoted:rip, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
root.sendMessage(mdata.id, teks, MessageType.text,{contextInfo :{text: 'hi',
"forwardingScore": 999,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `${setting.fake}`,
"body": `${mdata.subject}`,
"mediaType": "2",
"thumbnailUrl": "https://telegra.ph/file/d3836b4e06b8714dea0e8.jpg",
"mediaUrl": "https://youtu.be/Xo98LeXoU1g",
"thumbnail": fs.readFileSync('./image/fake.jpg'),
"sourceUrl": `${setting.grub}`,
},mentionedJid:[num]}, quoted : rip})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

root.on('group-update', async (anu) => {
skiuuu = {"key": { "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6285945300923-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `▷  ${setting.botname}\n▷    ${setting.ownername} `, orderTitle: 'root', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
  metdata = await root.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = `
「 GROUP OPENED 」

Group telah dibuka oleh admin [ ! ]
`
root.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
}
else if(anu.announce == 'true'){
teks = `
「 GROUP CLOSED 」

Group telah ditutup oleh admin [ ! ]
`
root.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
}
else if(!anu.desc == 'true'){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = `
「 GROUP DESCRIPTION CHANGE 」

Deskripsi group telah diubah oleh admin [ ! ] \n\n${anu.desc}
`
root.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
}
else if(anu.restrict == 'false'){
teks = `
「 GROUP SETTING CHANGE 」

Edit group info telah dibuka untuk member [ ! ]
`
root.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
}
else if(anu.restrict == 'true'){
teks = `
「 GROUP SETTING CHANGE 」

Edit group info telah ditutup untuk member [ ! ]
`
root.sendMessage(metdata.id, teks, MessageType.text, {quoted: skiuuu, contextInfo:{"externalAdReply":{"title": `Arip͘⁴̅⁰͍⁴̵〆︎ (@ItsMeArip) `,"body": `${setting.fake} `,"previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./image/fakethumb.jpg`),"sourceUrl": `${setting.fakereply}`}}})
console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
}
})

root.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

const type = Object.keys(m.message)[0] 
root.sendMessage(m.key.remoteJid, `
⊙─❲ ANTI DELETE TERDETEKSI ❳
│
├⊙ Name : @${m.participant.split("@")[0]}
├⊙ Day : ${week} ${calender}
├⊙ Time :  ${jam}
└⊙ Type : ${type}

`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
root.copyNForward(m.key.remoteJid, m.message)
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}
starts()