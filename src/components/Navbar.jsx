import Menu from "./Menu";

export default function Navbar(props) {
    return (
        <div className={`flex`}>
            {props.title} {props.subtitle}
            <Menu />
        </div>
    )
}