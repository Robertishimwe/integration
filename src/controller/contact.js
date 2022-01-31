const Message = require("../models/contact")
const {contactFormValidation} = require("../middleware/contactMiddleware")
const verify = require("../middleware/authenticator")
const User = require("../models/users")



exports.sendMessage = async(req,res)=>{

    const {error} = contactFormValidation(req.body)
    if(error){
        res.status(400).send(error.details[0].message)
    }
    else{

    const ContactMessage = new Message({
        "name":req.body.name,
        "email":req.body.email,
        "message":req.body.message
    })
    await ContactMessage.save()
    res.status(200).send(ContactMessage)

}}
exports.GetsingleMessage =  async (req,res)=>{
    try{
    const ContactMessage = await Message.findById(req.params.id)
    res.status(200).json({message:"Message recieved succesfuly",ContactMessage})
    }catch{
        res.status(404).send("message not found")
    }
}
exports.GetAllMessage = async (req,res)=>{

    //verify if users is admin
     let userId = req.user.id
     const loggedUser = await User.findById(userId);
     const userRole = loggedUser.userRole;

     if(userRole == "user") return res.status(401).send("you are not allowed to access this page")


    try{
    const ContactMessage = await Message.find()
    res.status(200).send({ContactMessage})
    }catch{
        res.status(404).send("message not found")
    }
}
exports.DeleteMessage = async (req,res)=>{
    try{
    const ContactMessage = Message.findById(req.params.id)
    await ContactMessage.remove()
    res.status(200).send("message deleted successfully")
    }catch{
        res.status(404).send("message not found")
    }
}