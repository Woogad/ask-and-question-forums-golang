package models

import "gorm.io/gorm"

type Katoo struct {
	gorm.Model
	Title    string `json:"title"`
	Body     string `json:"body"`
	UserName string `json:"username"`
	Vote     uint   `json:"vote"`
	UserID   uint   `json:"userid"`
}
