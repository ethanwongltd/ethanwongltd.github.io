const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 连接数据库
mongoose.connect('mongodb://localhost/chat_history');

// 定义聊天记录模型
const ChatSchema = new Schema({
    userId: String,
    chatId: String,
    messages: Array,
    title: String,
    createdAt: Date
});

const Chat = mongoose.model('Chat', ChatSchema);

// API 接口
app.post('/api/login', async (req, res) => {
    const { email } = req.body;
    // 验证邮箱并返回 token
});

app.get('/api/chats', async (req, res) => {
    const { userId } = req.user;
    const chats = await Chat.find({ userId });
    res.json(chats);
});

app.post('/api/chats', async (req, res) => {
    const { userId } = req.user;
    const { messages, title } = req.body;
    const chat = new Chat({
        userId,
        messages,
        title,
        createdAt: new Date()
    });
    await chat.save();
    res.json(chat);
}); 