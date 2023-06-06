import { Router } from "express";

const mensajes_router = Router();

mensajes_router.get("/chat", async (req, res, next) => {
  try {
    return res.render("chat", {
      title: "Chat.com",
      script: "/public/chat.js",
    });
  } catch (error) {
    next(error);
  }
});

export default mensajes_router;