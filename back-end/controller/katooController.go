package controller

import (
	"Woogad/ask-and-question-forums-golang/config"
	"Woogad/ask-and-question-forums-golang/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetKatoo(c *gin.Context) {
	katoo := []models.Katoo{}
	result := config.DB.Find(&katoo)
	if result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, katoo)
}

func CreateKatoo(c *gin.Context) {
	var body struct {
		Title string `json:"title"`
		Body  string `json:"body"`
	}
	if c.BindJSON(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to read body",
		})
		return
	}
	user, _ := c.Get("user")
	userStruct := user.(models.User)

	new_katoo := models.Katoo{
		Title:    body.Title,
		Body:     body.Body,
		UserName: userStruct.Name,
		UserID:   userStruct.ID,
	}

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
	katoo := []models.Katoo{}
	if result := config.DB.Where("id = ?", id).Delete(&katoo); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusNoContent, &katoo)
}

func GetKatooByID(c *gin.Context) {
	id := c.Param("katooID")
	katoo := models.Katoo{}
	if result := config.DB.Where("id = ?", id).Find(&katoo); result.Error != nil {
		c.IndentedJSON(http.StatusInternalServerError,
			gin.H{"Error": result.Error.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, &katoo)
}
