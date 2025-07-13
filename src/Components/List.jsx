import { FixedSizeList as VirtualList } from 'react-window'
import './List.css'



function List({ objects }) {
  const Row = ({ index, style }) => {
    const obj = objects[index];
    return (
      <div key={obj.id} className="object-item" style={style}>
        <h2>{obj.title}</h2>
        <p>ID: {obj.id}</p>
        <p>Description: {obj.gallery_text && obj.gallery_text.slice(0, 64) + '...'}</p>
        <a href={obj.url} target="_blank" rel="noopener noreferrer">See full object entry here!</a>
      </div>
    );
  };

  return (
    <VirtualList
      height={600} // Adjust height as needed
      itemCount={objects.length}
      itemSize={120} // Adjust row height as needed
      width="100%"
    >
      {Row}
    </VirtualList>
  );
}

export default List