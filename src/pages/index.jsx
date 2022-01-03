import Head from 'next/head'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import useAppData from '../data/hook/UseAppData'

export default function Hexglyph() {
  const { theme } = useAppData() //usando Hook
  return (
    <div className={`${theme}`}>
      <Head>
        <title>Daniel NieBraz</title>
        <meta name="description" content="Daniel.NieBraz Portfolio " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex`}>
        <Navbar title="Daniel.NieBraz" subtitle="Front End Dev" />
        <Content>
          <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
            <h3>Teste</h3>

          </div>
        </Content>


      </div>
    </div>
  )
}
