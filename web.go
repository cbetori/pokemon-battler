package main

import (
	"controller"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
	_ "github.com/joho/godotenv/autoload"
)

func main() {
	// Init Router
	r := mux.NewRouter()

	// Set port/company name from env file
	port := os.Getenv("PORT")

	r.HandleFunc("/api/start", controller.Start).Methods("GET")
	r.HandleFunc("/api/pokemon", controller.PokemonPicker).Methods("GET")

	// r.HandleFunc("/api/default/data={date}", controller.HandleDefaultQuery).Methods("GET")

	spa := spaHandler{staticPath: "client/dist", indexPath: "index.html"}
	r.PathPrefix("/").Handler(spa)

	//Start Server and Listen
	fmt.Println("Server Running!")
	log.Fatal(http.ListenAndServe(":"+port, r))

}

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		// if we failed to get the absolute path respond with a 400 bad request
		// and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// prepend the path with the path to the static directory
	path = filepath.Join(h.staticPath, path)

	// check whether a file exists at the given path
	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		// if we got an error (that wasn't that the file doesn't exist) stating the
		// file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}
