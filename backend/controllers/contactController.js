import Contact from "../models/Contact.js";

export const createContactMessage = async (req,res)=>{
  try{
    const {name,email,message} = req.body;

    if(!name || !email || !message){
      
      return res.status(400).json({
        success:false,
        message:"please fill all fields",
      });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email",
  });
}

if (message.trim().length < 10) {
  return res.status(400).json({
    success: false,
    message: "Message must be at least 10 characters",
  });
}

  const contactMessage = await Contact.create({
    name,
    email,
    message
  });

  res.status(201).json({
    success:true,
    message:"Message sent successfully",
    data:contactMessage,
  });
}catch(error){
  res.status(500).json({
    success:false,
    message:"Server Error",
  });
}
};