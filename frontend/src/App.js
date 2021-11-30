import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Search from "./components/Search"
import "./appStyle.css"

function App() {
  const [word, setWord] = useState("")
  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log(word)
  }
  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  )
}

export default App
