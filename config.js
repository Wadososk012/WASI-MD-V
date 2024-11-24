//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923247116683";
global.sudo = process.env.SUDO || "923247116683";
global.owner = process.env.OWNER_NUMBER || "923247116683";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpTTjFtR2tzTWFwZmd0VFRtdVFLOGtvN0QzbEpRMFdJNkRLNU1rakNtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXptcXlqWml4aWdZL3FyQ1VobGhLaGQ2MkwzNFpLTkVoL09mY2p0Vk9HYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQjlCbkE4NXpDa2hsVEc4d3dNeEFVT2lLN1NHb1VXa3FUS1VZS1ZIbldVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5V2lnMG5NbjduOGhxMTMzQzFKdVZIb3JoRWtYbDhudS9mS01vOWlWQTAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNDWHU0R3MzWDZHQlZ0QmFjVGdVbHFFTFRTRThGRnlKTkZCbHBpY2c3VVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBBeldDUHA2ZTcra2RmV3k5Wmt5S2tCQlRBU2VaaWpQWEJBd3hDbEJ4aUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZDbUhMK1p1azI1STgrbGhnK3dMaTV0RmVkUkxxUzl2YlRHMjJiZE5VRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlM1VnNkeFZNbk5xY3JjU01kZHB5L2NXelZVN3BubHhMVFVoc3RNMUJUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNnQnhkeXNWTnBHTjFiczBUZVdZc0hCNkEwMC9sUkhJd1E1aGtQRngxVldRbFhTbXFYemxJQmV2dzBDc2hyNW9kb3RRczdRN3JqSWdIelVGdVFYM0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJJMFVNaklZbU92WnpFbTl3akRpZ2g5bEhiZDJDcUhmMW5waG1LTlNRRkc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoSGJ1R0JpQVFPYWFFa0JjZFg5bVF3IiwicGhvbmVJZCI6IjkzOTkxYjcyLWUyOWMtNDkzNi1iMWY4LTdkMDBmYWYyMGY4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzZEFBVUZOa2FIY2pMMUlNWlZKeU9XZHpDcEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEFUTXlnZ2c5WGNxVnFLeDNFakhGa3Rkdk1rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRQSkZXQjVOIiwibWUiOnsiaWQiOiI5MjMyNDA4MDYyMTA6NzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0vigorMtuG3pOKCicy2zaXigoLMtuG3nuKCg8y2zaTigoLMtuG3oeKChMy2za3igoDMtsy24aqz4oKIzLbht5zigoDMts2l4oKGzLbht57igoLMtuG3nuKCgcy2zaTigoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUK204d0ZFUHpQaXJvR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InViQkpBb3Q4ZjYza0ZHSWpadkR6SDNZV1NqNWIvYWZjRjZxc3hpS3FTV2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktyRHR4ZzB6b0hVUU80MnpxZWV5N2lHV1RuallxUi9BdnBLa0l6OHNLRUQwSVdodkxMZkRFWENUeUZ1U2tHQTBpbnR1bGdWQ2RDM0lGc3ZpWmZEREJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBcVdNQy9OdHBWNkhhQVczbmd6RUJPdzQyTnhxejIxcFdwZWFJbW0zVVNjRTlQQTd1MEFhUTEyd3dsT3JHR2hxNTdoVFFxOWx3V3JTcC9raTRIaXdCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI0MDgwNjIxMDo3N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJibXdTUUtMZkgrdDVCUmlJMmJ3OHg5MkZrbytXLzJuM0JlcXJNWWlxa2xuIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNDIxNjQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1ZMSJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ZiDi-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "ZiDi",
  packname: process.env.PACK_NAME || "012",
  botname: process.env.BOT_NAME || "ZiDi-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "ZiDi-Malik",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
