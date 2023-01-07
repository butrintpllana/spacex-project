import React from 'react';
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading";

export default function Launches() {
    const [data] = useFetch('https://api.spacexdata.com/v3/launches');
    

  return <>
  {!data ? <Loading /> : <section class="py-32 max-width">
        <h1 class="heading text-center mb-10">Launches</h1>

        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">

            {data.map(({flight_number, mission_name, links, details }) => (
                <Link to={`/launches/${flight_number}`} key={flight_number} className='p-5 bg-gray-800 rounded'>
                 
                    <img src={links.mission_patch} alt={mission_name} />
                    <h2 className='font-bold text-white mt-5 mb-3 text-xl '>{mission_name}</h2>
                    {details && <p className='text-white opacity-50'>{`${details.substring(0,50)}...`}</p>}
                    

                </Link>
            ))}
        </div>
    </section>
    }
    
  </>
}
