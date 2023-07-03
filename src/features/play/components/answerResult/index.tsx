import styles from "./styles.module.scss";
import components from "@/styles/components.module.scss";

export type Props = {
	title: string | null;
	solution: string | null;
	truth: string | null;
	distance: string | null;
	onBackButtonClicked: () => void;
};

export const AnswerResult: React.FC<Props> = ({
	title: result,
	solution,
	truth,
	onBackButtonClicked,
	distance,
}) => {
	return (
		<div className={styles.container} data-truth={truth !== null}>
			{result && <h3>{result}</h3>}
			{distance && <p>惜しい度: {distance}</p>}
			<dl>
				{truth && (
					<>
						<dt>真相</dt>
						<dd>{truth}</dd>
					</>
				)}
				{solution && (
					<>
						<dt>あなたの推理</dt>
						<dd>{solution}</dd>
					</>
				)}
			</dl>
			{
				<div className={styles.buttonContainer}>
					<button
						type={"button"}
						onClick={onBackButtonClicked}
						className={components.button}
					>
						戻る
					</button>
				</div>
			}
		</div>
	);
};
