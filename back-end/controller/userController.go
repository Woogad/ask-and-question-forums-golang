package controller

import (
	"Woogad/ask-and-question-forums-golang/config"
	"Woogad/ask-and-question-forums-golang/models"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

func GetUser(c *gin.Context) {
	users := []models.User{}
	config.DB.Find(&users)
	c.JSON(http.StatusOK, users)
}

func CreateUser(c *gin.Context) {
	var body struct {
		Name     string
		Email    string
		Password string
	}
	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to read body",
		})
		return
	}
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to hash password",
		})
		return
	}

	user := models.User{Name: body.Name, Email: body.Email, Password: string(hash)}
	resutl := config.DB.Create(&user)
	if resutl.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to create user",
		})
		return
	}
	c.JSON(http.StatusCreated, gin.H{})
}

func Login(c *gin.Context) {
	var body struct {
		Email    string
		Password string
	}
	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to read body",
		})
		return
	}

	user := models.User{}
	config.DB.First(&user, "email = ? ", body.Email)

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "worng email or password",
		})
		return
	}
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "worng email or password",
		})
		return
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	// Sign and get the complete encoded token as a string using the secret

	tokenString, err := token.SignedString([]byte(os.Getenv("SECERET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "fail to create token",
		})
		return
	}
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"token": tokenString,
	})
}
func Vaildate(c *gin.Context) {
	user, _ := c.Get("user")

	c.JSON(http.StatusOK, gin.H{
		"Data in user ": user,
	})
}
