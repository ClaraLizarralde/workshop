import Head from 'next/head'
import React from 'react'


export default function Page() {
    return (
        <>
            <Head>
                <title>Workshop -ws-3</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
            </Head>
            <main className="">
               <div className='sarasa'>
                <div className='sarasita'> </div> </div>
                <button className='buttonLikes'></button>
            </main>
        </>
    )
}
/*
export const button  = () => {
    //const initialLikes = 1
   
    const likes = () => {
         const [likes, setLikes] = React.useState (0 // initialLikes); 
        return <button onClick={() => setLikes ++}><p>{likes} likes</p> </button>
    

    }

} */