import Head from 'next/head'
import Skills from '../components/Skills'

export default function Hexglyph() {
  return (
    <div>
      <Head>
        <title>Daniel NieBraz - Hexglyph</title>
        <meta name="description" content="Daniel's Portfolio and Github repository" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Daniel NieBraz - Hexglyph</h1>
      <Skills text='NextJS' level={3} />
    </div>
  )
}
