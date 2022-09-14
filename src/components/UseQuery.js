import  {useEffect, useState} from'react'

function useQuery(url){

    const[data, setData] = useState([])

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setData(data));
      }, [url]);

      return{
        data,
        setData
      }

}
export default useQuery;