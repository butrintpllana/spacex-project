import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";


export default function SingleLaunches(){
  const [singleLaunch, setSingleLaunch] = useState(null)
  const {flight_number} = useParams()


useEffect (() => {
  const fetchSingleLaunch = async () => {
    const res = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
    const data = await res.json();
    setSingleLaunch(data);
    console.log(res);
  }

  fetchSingleLaunch()
}, [flight_number])

return <>
  {!singleLaunch ? <Loading /> : 
    <section className="py-32 max-width grid grid-cols-1 gap-10 md:grid-cols-3">
      <article>
        <img src={singleLaunch.links.mission_patch} alt={singleLaunch.mission_name} />
      </article>

      <article>
        <h1 className="heading">{singleLaunch.mission_name}</h1>
        <h2 className='text-inherit font-bold text-2xl opacity-75 mt-2'>
          Launch Date: {singleLaunch.launch_date_local}, {" "}
          {singleLaunch.launch_success ? <span className='text-green-500'>Successful</span> : <span className='text-red-600'>Failed</span>}
        </h2>
        <p className="my-7">{singleLaunch.details}</p>

        <ul className="flex flex-wrap items-center justify-start gap-7">
          <li><a href={singleLaunch.links.article_link} target="_blank" rel="noreferrer" class="btn">Read More</a></li>
          <li><a href={singleLaunch.links.video_link} target="_blank"  rel="noreferrer" class="btn">Watch on Youtube</a></li>
        </ul>
      </article>

      <article className='border-t-4 border-indigo-500 my-1'>
        <input type="text" className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 my-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" placeholder="Name"></input>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <button className="btn my-4 float-right">Post Comment</button>
      </article>
    </section>
  }

</>

}
