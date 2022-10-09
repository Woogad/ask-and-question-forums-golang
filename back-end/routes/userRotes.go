package routes

import (
	"Woogad/ask-and-question-forums-golang/controller"
	"Woogad/ask-and-question-forums-golang/middleware"

	"github.com/gin-gonic/gin"
)

func User(router *gin.Engine) {
	router.GET("/users", controller.GetUser)
	router.POST("/create-user", controller.CreateUser)
	router.POST("/login", controller.Login)
	router.GET("/vaildate", middleware.RequireAuth, controller.Vaildate)
}
