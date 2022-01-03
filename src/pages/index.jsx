import Head from 'next/head'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Content from '../components/Content'

export default function Hexglyph() {
  return (
    <div>
      <Head>
        <title>Daniel NieBraz</title>
        <meta name="description" content="Daniel.NieBraz Portfolio " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`flex`}>
        <Navbar title="Daniel.NieBraz" subtitle="Front End Dev" />
        <Content>
          {props.children}
        </Content>

        <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>


        </div>
      </div>

    </div>
  )
}
