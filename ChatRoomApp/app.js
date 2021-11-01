const express = require('express')
const app = express()
//set the template engine ejs
app.set('view engine', 'ejs')
//middlewares
app.use(express.static('public'))
//routes
app.get('/', (req, res) => {
    res.render('index')
    })
//Listen on port 3000
server = app.listen(3000)
//socket.io instantiation
const io = require("socket.io")(server)
//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')
    //default username
    socket.username = "Anonymous"
    //listen on change_username
    socket.on('change_username', (data) => {
    socket.username = data.username
    })
    //listen on new_message
    socket.on("new_message", (data) => {
    feedback.html('');
    message.val('');
    chatroom.append("<p class='message'>" + data.username + ": " +
    data.message + "</p>")
    })
    //Emit typing
message.bind("keypress", () => {
    socket.emit('typing')
    })
    //Listen on typing
    socket.on('typing', (data) => {
    feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
    })
    
})
