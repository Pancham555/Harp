import Navbar from '../Components/Navbar'
import Loading from '../Components/loader/loading'
import Card from '../Components/card'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const arr = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 },
    { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },
    { id: 16 }, { id: 17 }, { id: 18 }
  ]
  const [display, setDisplay] = useState(false)
  const [grow, setGrow] = useState(6)
  useEffect(() => {
    router.push('/blogpage') // For temporary purpose
    document.onscroll = () => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      if (scrolled > 95) {
        setDisplay(true)
        setGrow(grow + 3)
      }
      else {
        setDisplay(false)
      }
    }
  }, [grow, router])

  return (
    <main>
      <Head>
        <title>Harp Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div style={{ minHeight: "100vh", maxHeight: "100%", height: "100%" }} className='flex flex-col'>
        <Navbar />
        <div className="flex flex-wrap justify-evenly">
          {arr.slice(0, grow).map(({ id }) => {
            return (
              <div key={id} onClick={() => router.push('/chat')}>
                <Card alt={`card ${id}`} />
              </div>
            )
          })}
        </div>
      </div>

      <Loading visibility={display} />

    </main>
  )
}