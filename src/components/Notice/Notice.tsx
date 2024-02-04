import styles from './Notice.module.scss'

interface Notice{
    result: string
    clickStartAgain: () => void
}
const Notice: React.FC<Notice> = ({result,clickStartAgain}) =>{


    return (
        <div className={styles.modal}>
            <div className={styles.wrapper}>
                <div className={styles.title}>{result}</div>
                <button onClick={clickStartAgain}>Начать игру заново</button>
            </div>
        </div>
    )
}
export default Notice;