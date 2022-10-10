package models

import (
	"gorm.io/gorm"
)

type Comment struct {
	gorm.Model
	Name   string `json:"name"`
	Body   string `json:"body"`
	UserID uint
}
