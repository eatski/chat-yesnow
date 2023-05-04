import { trpc } from "@/libs/trpc";
import { useState } from "react";
import { Feed } from "./ui/feed";
import styles from "./styles.module.scss";
import { QuestionForm } from "./ui/questionForm";
import { AnswerForm } from "./ui/answerForm";
import { Answer } from "@/server/model/types";
import { QuestionResult } from "./ui/questionResult";
import { AnswerResult } from "./ui/answerResult";

type Props = {
    storyId: string;
}

const AnswerFormContainer: React.FC<{storyId: string,onCancel: () => void}> = ({storyId,onCancel}) => {
    const {mutate,isLoading,data,reset} = trpc.truth.useMutation();
    return data ? <AnswerResult reasoning={data.input} onBackButtonClicked={reset} result={({
        Covers: "正解",
        Wrong: "間違いがあります",
        Insufficient: "説明が不十分です。",

    } as const satisfies Record<typeof data.result,string>)[data.result]} truth={data.truth} />
    : <AnswerForm isLoading={isLoading} onCancel={onCancel} onSubmit={(input) => {
        mutate({
            storyId,
            text: input
        })
    }}/>
}

const QuestionFormContainer: React.FC<{storyId: string,onAnswered: (arg: {input: string,result: Answer}) => void}> = ({storyId,onAnswered}) => {
    const {mutate,isLoading} = trpc.question.useMutation();
    return <QuestionForm isLoading={isLoading} onSubmit={(input) => {
        mutate({
            storyId,
            text: input
        },{
            onSuccess: (data) => {
                onAnswered({
                    input,
                    result: data
                })
            }
        })
    }}/>
}

export function Chat(props: Props) {
    const [history,setHistory] = useState<{id: number,input: string,result: string}[]>([]);
    const latest = history.at(-1);
    const [isAnswerMode,setIsAnswerMode] = useState(false);
     return <>
        {
            !isAnswerMode && latest && 
                <div className={styles.sectionWrapper}>
                    <QuestionResult 
                        question={latest.input} 
                        answer={latest.result} 
                        onAnswerButtonClicked={() => {
                            setIsAnswerMode(true);
                        }}
                    /> 
                </div>
        }
        {
            isAnswerMode && 
            <div className={styles.sectionWrapper}>
                <AnswerFormContainer 
                    storyId={props.storyId} 
                    onCancel={() => {
                        setIsAnswerMode(false);
                    }}
                />
            </div>
        }
        {
            !isAnswerMode && <div className={styles.sectionWrapper}>
                <QuestionFormContainer storyId={props.storyId} onAnswered={(arg) => {
                    setHistory((prev) => {
                        return [...prev,{
                            id: prev.length,
                            input: arg.input,
                            result: ({
                                "FALSE": "いいえ",
                                "TRUE": "はい",
                                "UNKNOWN": "わからない",
                                "INVALID": "不正な質問"
                            } as const satisfies Record<Answer,string>)[arg.result],
                        }]
                    })
                }} />
            </div>
        }
        {
            history.length > 0 && <div className={styles.sectionWrapper}>
                <Feed items={history.map(({id,input,result}) => ({
                    id: id.toString(),
                    question: input,
                    answer: result
                }))} />
            </div>
        }
     </>
}