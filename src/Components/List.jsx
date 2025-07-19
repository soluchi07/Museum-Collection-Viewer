import './List.css'
import { Link } from "react-router-dom"



function List({objects, end_date}) {
  

  return (
    <>
        {objects && objects.map((obj) => (
            <div key={obj.id} className="object-item">
                <Link
                  to={`/details/${obj.id}`}
                  key={obj.id}
                  style={List.css}
                >

                  <h2>{obj.title}</h2>
                </Link>
                <p>ID: {obj.id}</p>
                <p>Medium: {obj.medium}</p>
                <p>{obj.gallery_text && 'Description: ' + obj.gallery_text.slice(0,64)+'...'}</p>
                <p>Click on the title for more details!</p>
            </div>
        )

        )}

        { end_date === '' && 
        <> 
            <h2>Give it a few seconds please😅</h2>
            <img src='src/assets/loading.webp' alt='loading gif'/>
        </>}
        {objects.length === 0 && end_date !== '' && <h2 id='no-item'>Item Not Found</h2>}
    </>
  )
}

export default List