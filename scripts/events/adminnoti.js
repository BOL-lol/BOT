module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname","log:thread-icon","log:thread-color"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Update team information quickly",
    envConfig: {
        sendNoti: true,
    }
};

module.exports.run = async function ({ event, api, Threads,Users }) {
	const fs = require("fs");
	var iconPath = __dirname + "/emoji.json";
	if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["adminUpdate"] != "undefined" && thread["adminUpdate"] == false) return;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗┬╗ ЁЯМ║ржирзЛржЯрж┐рж╢ЁЯМ║ ┬л┬л ржмрж╛рж▓ржкрж╛ржХржирж╛ржорж┐рж░ ржЬржирзНржп  ${logMessageData.TARGET_ID} ржХрзЗ Admin ржжрзЗржУрзЯрж╛ рж╣рж▓рзЛЁЯШК `, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗┬╗ ЁЯМ║ржирзЛржЯрж┐рж╢ЁЯМ║ ┬л┬л ржЕрждрж┐рж░рж┐ржХрзНржд ржмрж╛рж▓ржкрж╛ржХржирж╛ржорж┐рж░ ржХрж╛рж░ржирзЗ ${logMessageData.TARGET_ID} ржХрзЗ ржЖржорж╛рж░ ржорзЗржорзНржмрж╛рж░ ржХрж░рж╛ржирзЛ рж╣рж▓рзЛ ЁЯЩВ `, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }

            case "log:thread-icon": {
            	let preIcon = JSON.parse(fs.readFileSync(iconPath));
            	dataThread.threadIcon = event.logMessageData.thread_icon || "ЁЯСН";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗ [ ржЧрзНрж░рзБржк ржЖржкржбрзЗржЯ ] y.replace("emoji", "icon")}\n┬╗ Original icon: ${preIcon[threadID] || "unknown"}`, threadID, async (error, info) => {
                	preIcon[threadID] = dataThread.threadIcon;
                	fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
            case "log:thread-color": {
            	dataThread.threadColor = event.logMessageData.thread_color || "ЁЯМд";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗ [ ржЧрзНрж░рзБржк ржЖржкржбрзЗржЯ ]\n┬╗ ${event.logMessageBody.replace("Theme", "color")}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
          
            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗┬╗ ЁЯМ║ржирзЛржЯрж┐рж╢ЁЯМ║ ┬л┬л ржЗрж╕ ржмрж╛рж▓ржкрж╛ржХржирж╛рзЯ ржЖржорж╛рж░ ржирж┐ржХ ржирзЗржо рж▓рж╛ржЧрж╛рзЯ ЁЯдг ${logMessageData.participant_id} to: ${(logMessageData.nickname.length == 0) ? "ржЖржЧрзЗрж░ ржирж╛ржо ржЫрж┐рж▓рзЛЁЯСЙ": logMessageData.nickname}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || "No name";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`┬╗┬╗ ржирзЛржЯрж┐рж╢ ┬л┬л ржЕрждрж┐рж░рж┐ржХрзНржд ржмрж╛рж▓ржкрж╛ржХржирж╛ржорж┐ ржХрж░рзЗ ржЧрзНрж░рзБржкрзЗрж░ ржирж╛ржо ржЪрзЗржЮрзНржЬ ржХрж░рзЗржЫрзЗ ЁЯШ╢ЁЯШС ${dataThread.threadName}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}
