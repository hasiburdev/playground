package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func handlerFunc(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if r.URL.Path == "/" {
		fmt.Fprint(w, "<h1>Welcome to my awesome site!</h1>")
	} else {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprint(w, "<h1>Error 404 Page Not Found!</h1>")
	}
}

func main() {
	r := mux.NewRouter()
	http.HandleFunc("/", handlerFunc)
	http.ListenAndServe(":3000", nil)
}
