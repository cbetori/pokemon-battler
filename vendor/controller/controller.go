package controller

import (
	"fmt"
	"net/http"
	"routes"

	// "github.com/gorilla/mux"
)

func Start(w http.ResponseWriter, r *http.Request) {
	x := routes.Start(r)
	fmt.Println(x)
}

func PokemonPicker(w http.ResponseWriter, r *http.Request) {
	routes.PokemonPicker()
}

// func HandleDefaultQuery(w http.ResponseWriter, r *http.Request) {
// 	start := time.Now()
// 	vars := mux.Vars(r)
// 	data := routes.CountriesDate(vars["date"])
// 	dataStruct := routes.CreateDataStruct(data)
// 	totals, countries := routes.HandleTotalsObj(dataStruct)
// 	jsonCountries, _ := json.Marshal(countries)
// 	jsonData, err := json.Marshal(dataStruct)
// 	if err != nil {
// 		fmt.Println("Controller-HandleDefaulQuery: Unable to convert dataStruct into json")
// 	}

// 	x := `{"totals":` + string(totals) + `,"data":` + string(jsonData) + `,"countries":` + string(jsonCountries) + `}`
// 	fmt.Fprintf(w, x)
// 	duration := time.Since(start)
// 	fmt.Println(duration)
// }
