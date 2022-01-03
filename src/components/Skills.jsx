import styles from '../styles/Skills.module.css'

interface SkillsProps {
    text: string
    level: number
}

export default function Skills(props: SkillsProps) {
    return (
        <div className={styles.skills}>
            {props.text} - {props.level}
        </div>
    )
}