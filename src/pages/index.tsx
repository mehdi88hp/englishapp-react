import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import Sidebar from '../layouts/sidebar'
import { BookCard, Search } from '../components/modules'
import { Toggle } from '../components/elements'
import BrowseBook from '../layouts/browse-book'
import requests from '../../utils/requests'


const Home: NextPage = (props) => {
  console.log("result", props)

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


      <div className='container mx-auto flex-row flex'>
        {/* Sidebar */}
        <Sidebar currentPage={"home"} />

        {/* Main */}
        <div className='pl-14 pt-4 w-4/5'>
          <div className='flex flex-row gap-6'>
            <Search />
            <div className='gap-6 flex flex-row'>
              <div className="dropdown dropdown-hover z-10 relative">
                <label className="btn rounded-2xl bg-base-100 text-base-content hover:bg-secondary border-2 h-15 relative z-10 mb-4">theme</label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 w-52 border-2 rounded-2xl border-neutral">
                  <li><a data-set-theme="light">Light</a></li>
                  <li><a data-set-theme="dark">Dark</a></li>
                  <li><a data-set-theme="cupcake">Item 2</a></li>
                </ul>
                <div className='flex-none w-full mb-10 absolute t border-2 border-neutral rounded-2xl h-15 top-2 left-2 bg-secondary'>
                </div>
              </div>
              <Toggle />
            </div>
          </div>
          <div className='flex flex-row'>
            <BrowseBook />
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context: any) {

  const genre = context.query.genre

  const request = await fetch(requests[genre]?.url || requests.fetchTerending.url).then((res) => res.json())
  

  return {
    props: request
  }
}