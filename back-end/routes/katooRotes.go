package routes

import (
	"Woogad/ask-and-question-forums-golang/controller"

	"github.com/gin-gonic/gin"
)

func KatooRotes(router *gin.Engine) {
	router.GET("/katoo", controller.GetKatoo)
	router.POST("/katoo", controller.CreateKatoo)
	router.DELETE("/katoo/:id", controller.DeleteKatooByID)
}
