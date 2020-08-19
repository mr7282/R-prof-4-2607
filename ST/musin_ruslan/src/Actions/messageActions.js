export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (text, author, addMessageId, chatId) => ({
    type: SEND_MESSAGE,
    text,
    author,
    addMessageId,
    chatId,
});