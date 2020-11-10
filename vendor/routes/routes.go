package routes

import (
	// "encoding/json"
	// "io/ioutil"
	"fmt"
	"net/http"
	 "github.com/mtslzr/pokeapi-go"
	_ "github.com/joho/godotenv/autoload"
)

func Start(r *http.Request) string {
	return "API Running"
}

type PokemonList struct{
	Id		int 		`json:"id"`
	Name 	string		`json:"name"`
	Sprite	string		`json:"sprite"`
}

func PokemonPicker() {
	r, err := pokeapi.Resource("pokemon", 0, 151)
	if err != nil {
			fmt.Println(err) 
	}
	fmt.Println(r.Results[0])
}