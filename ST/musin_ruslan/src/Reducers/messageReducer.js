import update from "react-addons-update";
import { SEND_MESSAGE } from "../Actions/messageActions";

const initialStore = {
    messages: {
        1: { text: " Hello!", author: "'robot'"},
        2: { text: " How are you?", author: "'robot'"},
     },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                messages: { $merge: { [action.addMessageId]: {
                    text: action.text,
                    author: action.author,
                }}},
            });
        }
        default:
            return store;
    }
}