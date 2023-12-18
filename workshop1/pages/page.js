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
                <HeaderBar></HeaderBar>
                <SectionPinterest></SectionPinterest>
                <SectionPinterest reversed={true}></SectionPinterest>
                <SectionPinterest></SectionPinterest>
            </main>
        </>
    )
}


export const HeaderBar = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
    const checkIfMenuIsActive = () => {
        if (menuActive == true) {
            return 'active'
        } else {
            return ''
        }
    }
    
    const options = [
        { name: 'Opcion 1', link: '/' },
        { name: 'Opcion 2', link: '/' },
        { name: 'Opcion 3', link: '/' },
        { name: 'Opcion 3', link: '/' },
        { name: 'Opcion 3', link: '/' },
        { name: 'Opcion 3', link: '/' },

    ]

    return (
        <div className='HeaderBar'>
            <div className='left'>
                <div className='logo' ></div>
                <div className='titulo' >
                    <p>Hola Mundo</p>
                </div>
            </div>
            <div className='right'>
                <div className='ProfileMenu'  onClick={toggleMenu}>
        {menuActive ? 'cerrar' : 'Abrir'}
</div>
                <div className={"MenuOptions " + checkIfMenuIsActive()}>
                    {options.map((option,index) => {
                        return (
                            <div key={"option-key-"+index} className='option' onClick={() => setMenuActive(false)} ><p>{option.name}</p></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const SectionPinterest = ( {reversed}) => {
    const obj = {
        title: 'Hola Mundo',
        description: 'Lorem ipsum dolor sit',
        cta: 'Ver más',
    }
    return (
        <div className='SectionPinterest'>
            <div className='container'> 
                <div className={` row full-height  ${(reversed) ? 'reversed' : '' }`}>
                    <div className='col-12 col-md-4 centered'>
                        <div className='info-box'>
                           <div className='title'><p className='mb-0'>{obj.title}</p></div>
                           <div className='description'><p className='mb-0'>{obj.description}</p></div>
                           <div className='cta'><p className='mb-0'>{obj.cta}</p></div>

                        </div>
                    </div>
                    <div className='col-12 col-md-8 relative'>
                        <div className='img-box img-1'></div>
                        <div className='img-box img-2'></div>
                        <div className='img-box img-3'></div>
                        <div className='img-box img-4'></div>
                
                        </div>    
                </div> 
            </div>

        </div>
    )
}