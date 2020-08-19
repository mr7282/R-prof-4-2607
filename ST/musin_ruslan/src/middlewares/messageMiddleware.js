import { SEND_MESSAGE, sendMessage } from "../Actions/messageActions";
import { addMessage } from "../Actions/addMessage";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === "'mr7282'") {
                // console.log(store.getState());
                // setTimeout(() => store.dispatch(sendMessage( 1, 2)), 0);
                // // store.dispatch(addMessage(action.chatId, action.addMessageId))
                // console.log(store.getState());
                // console.log(6655);
            }
    }
    return next(action)
}