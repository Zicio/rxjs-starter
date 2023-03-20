import {useEffect, useState} from "react";
import {ajax} from "rxjs/ajax";

function App() {
  const [data, setData] = useState(null);
  useEffect( () => {
    setData(() => {ajax.getJSON('https://api.github.com/search/repositories?q=rxjs').subscribe((value) => console.log(value));})
  }, [])
  return <div>{data}</div>
}

export default App;
