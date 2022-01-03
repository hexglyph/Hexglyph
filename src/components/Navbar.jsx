import Menu from './Menu'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <div className={`flex`}>
            <Logo title={props.title} src="/logo.png" />
            <h1 className='text-4xl text-cyan-400'>{props.title}</h1>
            <h2>{props.subtitle}</h2>

            <Menu />
        </div>
    )
}