import './List.css'



function List({objects, end_date}) {
  

  return (
    <>
        {objects && objects.map((obj) => (
            <div key={obj.id} className="object-item">
                <h2>{obj.title}</h2>
                <p>ID: {obj.id}</p>
                <p>{obj.gallery_text && 'Description: ' + obj.gallery_text.slice(0,64)+'...'}</p>
                <a href={obj.url} target="_blank">See full object entry here!</a>
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