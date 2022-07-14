import { useEffect, useState } from 'react'
import { query } from './api'

function App() {
  const [data, setData] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('aku =>', event.target)
  }

  const fetchAllNotes = () => {
    query({
      endpoint: 'notes',
    })
      .then((res) => {
        setData(res?.data)
      })
      .catch((err) => err)
  }

  useEffect(() => {
    fetchAllNotes()
  }, [])

  return (
    <div className="content">
      <h2>Notes</h2>
      <div className="action-submit">
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="title" />
          <input name="content" placeholder="content" />
          <button type="submit">Submit</button>
        </form>
      </div>
      {data &&
        data.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <button className="delete">Delete</button>
          </div>
        ))}
    </div>
  )
}

export default App
