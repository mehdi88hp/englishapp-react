import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import Sidebar from '../layouts/sidebar'


const Home: NextPage = () => {

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const [diretion, setDirection] = useState('ltr');

  return (
    <div dir={diretion} className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className='container mx-auto'>
        {/* Sidebar */}
        <Sidebar currentPage={"home"}/>

        {/* Main */}
        
      </div>

      


      {/* <select data-choose-theme>
        <option value="">Default</option>
        <option value="dark">Dark</option>
        <option value="hp">hp</option>
        <option value="cupcake">mytheme</option>
      </select>
      <div className="group flex items-center">
        <div>sdfsdf</div>
        <div className="ltr:ml-20 rtl:mr-3">
          <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">hosseinhp</p>
          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">hosseinppppppppppppppppp</p>
        </div>
      </div>

      <button onClick={() => { diretion === 'ltr' ? setDirection("rtl") : setDirection("ltr") }}>change direction</button> */}
    </div>
  )
}

export default Home
