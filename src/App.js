import { useEffect, useState } from 'react'
import { query, mutation } from './api'
import { truncate } from './helpers'

function App() {
  const [data, setData] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    mutation({
      endpoint: 'notes',
      method: 'POST',
      payload: {
        title: event.target[0].value,
        content: event.target[1].value,
      },
    })
      .then((res) => {
        if (res?.code === 200) {
          fetchAllNotes()
        }
      })
      .catch((err) => err)
  }

  const handleDelete = (id) => {
    mutation({
      endpoint: 'notes',
      method: 'DELETE',
      id,
    })
      .then((res) => {
        if (res?.code === 200) {
          fetchAllNotes()
        }
      })
      .catch((err) => err)
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

  console.log('length =>', truncate('Paceumar dan ', 5).length)

  return (
    <div className="content">
      <h2>Notes</h2>
      <div className="action-submit">
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="title" />
          <input name="content" placeholder="content" />
          <button className="btn primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="content-item">
        {data &&
          data.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.title}</h3>
              <p>{truncate(item.content, 20)}</p>
              <button
                className="btn danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
