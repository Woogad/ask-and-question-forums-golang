package controller

import (
	"Woogad/ask-and-question-forums-golang/config"
	"Woogad/ask-and-question-forums-golang/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetKatoo(c *gin.Context) {
	katoo := models.Katoo{}
	result := config.DB.Find(&katoo)
	if result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, katoo)
}

func CreateKatoo(c *gin.Context) {
	new_katoo := models.Katoo{}
	c.BindJSON(&new_katoo)
	result := config.DB.Create(&new_katoo)
	if result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusCreated, &new_katoo)
}

func DeleteKatooByID(c *gin.Context) {
	id := c.Param("id")
	idea_post := []models.Katoo{}
	if result := config.DB.Where("id = ?", id).Delete(&idea_post); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &idea_post)
}
