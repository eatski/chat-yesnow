import styles from "./styles.module.scss";
import button from "@/styles/components.module.css"

export type Props = {
    question: string,
    answer: string,
    onAnswerButtonClicked: () => void
}

export const QuestionResult: React.FC<Props> = (props) => {
    return <section>
        <dl className={styles.container}>
            <dt>あなたの質問</dt>
            <dd className={styles.question}>{props.question}</dd>
            <dt>クイズマスターの回答</dt>
            <dd className={styles.answer}>{props.answer}</dd>
        </dl>
        <div className={styles.buttonContainer}>
            <button className={button.button} onClick={props.onAnswerButtonClicked}>
                謎は解けましたか？
            </button>
        </div>
    </section>
}