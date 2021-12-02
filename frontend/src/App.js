import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Search from "./components/Search"
import "./appStyle.css"

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
  const [word, setWord] = useState("")

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json()) //code executed when promise is resolved
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
    setWord("")
  }
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
