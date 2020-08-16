import update from "react-addons-update";
import { SEND_MESSAGE } from "../Actions/messageActions";
import { ADD_CHAT } from "../Actions/chatActions"

const initialStore = {
    chats: {
        1: {title: "Batman", messageList: [1]},
        2: {title: "Lord Voldemort", messageList: [2]},
        3: {title: "Tony Stark", messageList: []},
        4: {title: "Boogyman", messageList: []},
        5: {title: "Shrek", messageList: []},
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]: {
                    title: store.chats[action.chatId].title,
                        messageList: [...store.chats[action.chatId].messageList, action.messageId]
                }}},
            });
        }
        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: {$merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }
                }},
            });
        }
        default:
            return store;
    }
}