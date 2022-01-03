import Head from 'next/head'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import useAppData from '../data/hook/UseAppData'

export default function Hexglyph() {
  const { theme } = useAppData()
  return (
    <div className={`${theme} `}>
      <Head>
        <title>Daniel.NieBraz</title>
        <meta name="description" content="Daniel.NieBraz Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <div className={`flex bg-slate-800 `}>
        <Navbar title="Daniel.NieBraz" subtitle="Front End Dev" />
        <Content>
          <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
            <Hero />
            <Projects />


          </div>
        </Content>
      </div>
    </div>
  )
}
