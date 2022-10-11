package routes

import (
	"Woogad/ask-and-question-forums-golang/controller"
	"Woogad/ask-and-question-forums-golang/middleware"

	"github.com/gin-gonic/gin"
)

func User(router *gin.Engine) {
	router.GET("/users", controller.GetUser)
	router.GET("/user", middleware.RequireAuth, controller.User)
	router.POST("/register", controller.CreateUser)
	router.POST("/login", controller.Login)
	router.POST("/logout", controller.Logout)
	router.DELETE("/users/:id", controller.DeleteUserByID)
}
