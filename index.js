const { Database } = require("nukleon");
const express = require('express')
const app = express()
const zerotwo02 = require("aoi.js")
const bot = new zerotwo02.Bot({
token: "token",
prefix: "*", 
intents: "all" 
})

const loader = new zerotwo02.LoadCommands(bot);
loader.load(bot.cmd,'./komutlar/')

/*------------Site-Paneli------------*/
var path = require("path");
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "./html"));
app.set("view engine", "ejs")
app.use(express.static("public"));
const ejs = require('ejs');
let db = new Database("./data/zuzia1.json");
let sdb = new Database("./data/zuzia2.json");
let adb = new Database("./data/zuzia3.json");
let zt = new Database("./data/gelistirici.json");

var sunucu = db.get("sunucu");
var uye = sdb.get("uye");
var kanal = adb.get("kanal");
app.get('/',function(req,res){
  res.render("anasayfa",{"sunucu": sunucu,
 "uye": uye, 
 "kanal": kanal,
 "db": db,
 "sdb": sdb,
 "adb": adb,
}) 
  })
app.get('/hakkinda',function(req,res){
res.render("hakkinda",{"sunucu": sunucu,
 "uye": uye, 
 "kanal": kanal,
 "db": db,
 "sdb": sdb,
 "adb": adb,
 "zt": zt,

})
})
app.get('/komutlar',function(req,res){
  res.render("komutlar",{"sunucu": sunucu,
 "uye": uye, 
 "kanal": kanal,
 "db": db,
 "sdb": sdb,
 "adb": adb,
}) 
  })
app.get('/davet',function(req,res){
res.sendFile("./html/davet.html",{root: __dirname})
})
app.get('/destek',function(req,res){
res.sendFile("./html/destek.html",{root: __dirname})
})

app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + sunucu))




bot.loopCommand({
  code: `$djsEval[const { Database } = require("nukleon");
let db = new Database("./data/zuzia1.json");
let sdb = new Database("./data/zuzia2.json");
let adb = new Database("./data/zuzia3.json");
let zt = new Database("./data/gelistirici.json");
zt.set('zuzitag', "$usertag[$botOwnerID]")
zt.set('zuzipp', "$userAvatar[$botOwnerID]")
zt.set('zuzidrm', "$replaceText[$getCustomStatus[$botOwnerID];none;$get[zuzi]]")
zt.set('zuzist', "$replaceText[$replaceText[$replaceText[$replaceText[$get[zuzi];Çevrimiçi;00c93f;-1];Boşta;e6b502;-1];Rahatsız Etmeyin;c90000;-1];Çevrimdışı;a0a0a0;-1]")

zt.set('wironatag', "$usertag[840138092798935061]")
zt.set('wironapp', "$userAvatar[840138092798935061]")
zt.set('wironadrm', "$replaceText[$getCustomStatus[840138092798935061];none;$get[wirona]]")
zt.set('wironast', "$replaceText[$replaceText[$replaceText[$replaceText[$get[wirona];Çevrimiçi;00c93f;-1];Boşta;e6b502;-1];Rahatsız Etmeyin;c90000;-1];Çevrimdışı;a0a0a0;-1]")

zt.set('cheftag', "$usertag[839246711284564018]")
zt.set('chefpp', "$userAvatar[839246711284564018]")
zt.set('chefdrm', "$replaceText[$getCustomStatus[839246711284564018];none;$get[chef]]")
zt.set('chefst', "$replaceText[$replaceText[$replaceText[$replaceText[$get[chef];Çevrimiçi;00c93f;-1];Boşta;e6b502;-1];Rahatsız Etmeyin;c90000;-1];Çevrimdışı;a0a0a0;-1]")

zt.set('parzitag', "$usertag[771311848993587210]")
zt.set('parzipp', "$userAvatar[771311848993587210]")
zt.set('parzidrm', "$replaceText[$getCustomStatus[771311848993587210];none;$get[parzi]]")
zt.set('parzist', "$replaceText[$replaceText[$replaceText[$replaceText[$get[parzi];Çevrimiçi;00c93f;-1];Boşta;e6b502;-1];Rahatsız Etmeyin;c90000;-1];Çevrimdışı;a0a0a0;-1]")



db.set('sunucu', "$serverCount");
sdb.set('uye', "$allMembersCount");
adb.set('kanal', "$allChannelsCount");

;no]

$let[zuzi;$replaceText[$replaceText[$replaceText[$replaceText[$status[$botOwnerID];online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1];offline;Çevrimdışı;-1]]
$let[wirona;$replaceText[$replaceText[$replaceText[$replaceText[$status[840138092798935061];online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1];offline;Çevrimdışı;-1]]
$let[chef;$replaceText[$replaceText[$replaceText[$replaceText[$status[839246711284564018];online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1];offline;Çevrimdışı;-1]]
$let[parzi;$replaceText[$replaceText[$replaceText[$replaceText[$status[771311848993587210];online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1];offline;Çevrimdışı;-1]]

`,
channel: "891935985485619200",
executeOnStartup: true,
every: 3000
})
