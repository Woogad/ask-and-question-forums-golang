package routes

import (
	"Woogad/ask-and-question-forums-golang/controller"
	"Woogad/ask-and-question-forums-golang/middleware"

	"github.com/gin-gonic/gin"
)

func KatooRotes(router *gin.Engine) {
	router.GET("/katoo", controller.GetKatoo)
	router.POST("/katoo", middleware.RequireAuth, controller.CreateKatoo)
	router.DELETE("/katoo/:id", controller.DeleteKatooByID)
	router.GET("/katoo/:katooID", controller.GetKatooByID)
}
