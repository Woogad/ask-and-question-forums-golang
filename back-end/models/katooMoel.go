package models

import "gorm.io/gorm"

type Katoo struct {
	gorm.Model
	Title string `json:"title"`
	Body  string `json:"body"`
	Vote  int64  `json:"vote"`
}
