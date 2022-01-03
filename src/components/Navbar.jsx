import Menu from './Menu'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <div className={`flex`}>
            {props.title} {props.subtitle}
            <Logo title={props.title} src="/logo.png" />
            <Menu />
        </div>
    )
}