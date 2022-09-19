const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


global.OWNER_REACT = '🧑🏻‍💻'
global.REACT_NUMBER = '2250787737416'

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['22587737416'] //ur owner number
global.ownername = "MADARA UCHIWA" //ur owner name
global.ytname = "YT: Nero" //ur yt chanel name
global.socialm = "GitHub: Nero" //ur github or insta name
global.location = "COTE D'IVOIR" //ur location

//bot bomdy 
global.owner = ['2250787737416']
global.ownertag = '2250787737416' //ur tag number
global.botname = '✫ ✫ ✫MITSURI KANROJI✫ ✫ ✫' //ur bot name
global.linkz = "https://github.com/Kaveeshasithum/DARK-NERO-BOT.git" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/Kaveeshasithum/DARK-NERO-BOT.git" //ur website to be displayed
global.botscript = 'https://github.com/Kaveeshasithum/DARK-NERO-BOT.git' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🐦" //ur theme emoji
global.packname = "MADARA UCHIWA " //ur sticker watermark packname
global.author = "MADARA UCHIWA" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['2250787737416'] //ur premium numbers
global.ntilinkytvid = ['2250787737416']
global.ntilinkytch = ['2250787737416']
global.ntilinkig = ['2250787737416']
global.ntilinkfb = ['2250787737416']
global.ntilinktg = ['2250787737416']
global.ntilinktt = ['2250787737416']
global.ntilinktwt = ['2250787737416']
global.ntilinkall = ['2250787737416']
global.nticall = ['2250787737416']
global.ntwame = ['2250787737416']
global.nttoxic = ['2250787737416']
global.ntnsfw = ['2250787737416']
global.ntvirtex = ['2250787737416']
global.rkyt = ['2250787737416']
global.wlcm = ['2250787737416']
global.gcrevoke = ['2250787737416']
global.autorep = ['2250787737416']
global.ntilink = ['2250787737416']

//omther
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'Cette fonctionnalité est réservée aux administrateurs !🇰',
    botAdmin: 'Bot Must Be Admin First! 🇱🇰',
    owner: 'Le bot doit d abord être administrateur ! 🇱🇰',
    group: 'Fonctionnalité utilisée uniquement pour les groupes ! 🇱🇰',
    private: 'Features Used Only For Private Chat! 🇱🇰',
    bot: 'Cette fonctionnalité est uniquement pour le bot 🇱🇰',
    wait: 'En attente 🇱🇰',
    linkm: 'Où est le lien ? 🇱🇰',
    error: 'Error!!',
    endLimit: 'Votre limite quotidienne a expiré, la limite sera réinitialisée toutes les 12 heures',
    ban: 'Vous avez été banni par le propriétaire, si vous souhaitez être débanni, discutez avec le propriétaire.',
    nsfw: 'La fonctionnalité nsfw n a pas été activée, veuillez contacter l administrateur pour l activer',
    banChat: 'Le bot a été banni dans ce groupe, veuillez contacter le propriétaire pour le débannir'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
