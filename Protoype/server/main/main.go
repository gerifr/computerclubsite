package main

import (
	"fmt"

	_ "github.com/gin-gonic/gin"
)

type shape interface {
	area() float32
	perimeter() float32
}

type rect struct {
	width, height float32
}

func (r rect) area() float32 {
	return r.height * r.width
}

func (r rect) perimeter() float32 {
	return r.height + r.width
}

func rectarea(a shape) {
	fmt.Println(a.area())
	fmt.Println(a.perimeter())
}

func main() {
	rectr := rect{width: 2.4, height: 2.3}
	rectarea(rectr)
}
