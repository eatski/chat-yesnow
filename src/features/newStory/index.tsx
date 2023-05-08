import { trpc } from "@/libs/trpc";
import { Input } from "@/server/procedures/post"
import { useForm, useFieldArray } from "react-hook-form"
import styles from './styles.module.scss';
import components from "@/styles/components.module.scss"

export const NewStory = () => {
    const { register, control, handleSubmit, reset } = useForm<Input>();
    const { mutate,isLoading } = trpc.post.useMutation();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "questionExamples",
    });

    const onSubmit = (data: Input) => {
        mutate(data);
        reset();
    };
    if(isLoading){
        return <div>loading...</div>
    }

    return <div className={styles.container}>
        <h2>新しいストーリーを作成する</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} placeholder="タイトル" />
            <input {...register("quiz")} placeholder="クイズ" />
            <input {...register("truth")} placeholder="真相" />
            <input {...register("simpleTruth")} placeholder="真相を最低限にしたもの" />

            <div className="questionExamples">
                {fields.map((field, index) => (
                    <div key={field.id} className="questionExample">
                        <input {...register(`questionExamples.${index}.question`)} placeholder="質問" />
                        <input {...register(`questionExamples.${index}.supplement`)} placeholder="補足" />
                        <select {...register(`questionExamples.${index}.answer`)}>
                            <option value="True">True</option>
                            <option value="False">False</option>
                            <option value="Unknown">Unknown</option>
                            <option value="Invalid">Invalid</option>
                        </select>
                        <button onClick={() => remove(index)}>削除</button>
                    </div>
                ))}
            </div>

            <button type="button" className={components.button} onClick={() => append({ question: '', supplement: '', answer: 'True' })}>
                新しい質問を追加する
            </button>

            <button type="submit" className={components.button} >送信</button>
        </form>
    </div>
}

