import People from "./data";
import getImageUrl from './utils';

function List() {
  const listItems = People.map(person =>
    <li key={person.id}>

      <div className='bio'>
          <div className="person">
              <img src={getImageUrl(person)} alt={person.name} />
              <h2>{person.name}</h2>
          </div>

          <div className= 'profession'>
              <h4 >{'' + person.profession + ' '}</h4>
              <p>Known for {person.accomplishment}</p>
          </div>
      </div>

      
    </li>
   );
   return (
      <article>
        <h1>People and their accomplishments</h1>
        <ul>{listItems}</ul>
      </article>
     );
  
}

export default List;
