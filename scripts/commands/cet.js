const fs = require("fs");
module.exports.config = {
	name: "sad06",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["рж╣рзНржпрж╛ ржмрж▓рзЛ ржЖржорж┐ рж╢рзБржиржЫрж┐ЁЯШМ","ржХрж┐ рж╣ржпрж╝рзЗржЫрзЗ","ржмржЯ ржмржЯ ржХрж░рж┐рж╕ ржХрзЗржи"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "kamon asen") || (event.body.toLowerCase() == "love u bot")) {
     return api.sendMessage("Hmm bhalo asi apniЁЯЩВЁЯдЦ", threadID);
   };

    if ((event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("рж▓рзБржЪрзНржЪрж╛ ржЪрзБржорзНржорж╛ ржЪрзБржорзНржорж┐ ржХрж░рзЛрж╕ ржХрзЗржиЁЯе╡", threadID);
   };
   
    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("ржЖржорж╛ржХрзЗ ржирж╛ ржЖржорж╛рж░ ржмрж╕ ржЖржмржжрзБрж▓рзНрж▓рж╛рж╣ ржХрзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рзЛЁЯШ╗ЁЯеА", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("ржХрж┐рж░рзЗ ржЖржорж╛ржХрзЗ ржЧрж╛рж▓рж┐ ржжрзЗрж╕ ржХрзЗржирзЛ рждрзЛржХрзЗ ржХрж┐ржирзНрждрзБ ржмрзЗржи ржХрж░рзЗ ржжрж┐ржорзБЁЯШа", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("ржЖржорж┐ ржнрж╛рж▓рзЛ рждрзБржорж┐ ржкржБржЪрж╛ЁЯШМ", threadID);
   };

   if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("ржПржЗ рждрзЛ ржЖржорж┐ ржПржЦрж╛ржирзЗЁЯЩЛтАНтЩВя╕П", threadID);
   };

  if ((event.body.toLowerCase() == "ki koro") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("তোমার জন্য অপেক্ষা করতেছি ", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামু আলাইকুম ") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("ওয়ালাইকুম সালাম ", threadID);
   };

   if ((event.body.toLowerCase() == "khayco") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("আমি রোবট আমি খাই না💔 আপনি খাইছেন ", threadID);
   };

   if ((event.body.toLowerCase() == "Hii") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("হাই মারাও কেন! প্রেম করবা ", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("বলদ", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day тЭдя╕П", threadID);
   };


   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("я╕П1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("я╕П1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("я╕П1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("я╕ПSleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("я╕П1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("я╕П1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("я╕ПSwear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("я╕ПSwear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("я╕ПSwear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("я╕П that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("я╕ПSwear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("я╕ПCome on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
