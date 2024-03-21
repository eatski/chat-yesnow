import { InformationParagragh } from "@/designSystem/components/information";
import styles from "./styles.module.scss";
import components from "@/designSystem/components.module.scss";
import { Card } from "@/designSystem/components/card";
import { DefinitionList } from "../definitionList";
import { AiOutlineLike } from "react-icons/ai";
import { Button, ButtonIconWrapper } from "@/designSystem/components/button";
import { gtagEvent } from "@/common/util/gtag";
import { useToast } from "@/components/toast";

export type Props = {
	solution: string;
	isCorrect: boolean;
	truth: string;
	distance: number;
	onBackButtonClicked: () => void;
	onSeeTruthButtonClicked: () => void;
};

type DistanceLevel = "almost" | "close" | "not-bad" | "way-off";

/**
 * 大体0.25あたりが正解であり0.6はかなり遠いためそれを基準に0.25~0.6を0.99~0に変換する。
 * 外れ値はそれぞれ0.99, 0にする。
 *
 * ~0.30 -> 0.99
 * 0.30~0.6 -> 0.99~0
 * 0.6~ -> 0
 *
 * @param distance 0.0 ~ 1.0
 */
const calcDisplayDistanceLebel = (distance: number): DistanceLevel => {
	if (distance <= 0.37) {
		return "almost";
	} else if (distance > 0.37 && distance <= 0.45) {
		return "close";
	} else if (distance > 0.45 && distance <= 0.6) {
		return "not-bad";
	} else {
		return "way-off";
	}
};

const levelToText: Record<DistanceLevel, string> = {
	almost: "かなり惜しい",
	close: "惜しい",
	"not-bad": "悪くはない",
	"way-off": "もう少し質問してみて",
};
export const AnswerResult: React.FC<Props> = ({
	solution,
	truth,
	distance,
	isCorrect,
	onBackButtonClicked,
	onSeeTruthButtonClicked,
}) => {
	const distanceLevel = calcDisplayDistanceLebel(distance);
	const toast = useToast();
	return (
		<div className={styles.container}>
			<Card variant={isCorrect ? "success" : undefined}>
				<h2>{isCorrect ? "正解" : "間違いがあります"}</h2>
				{isCorrect || <p>{levelToText[distanceLevel]}</p>}
				{!isCorrect && distanceLevel === "almost" && (
					<InformationParagragh size="small">
						{
							<div className={styles.infoBody}>
								些細な点で不正解と捉えられている可能性があります。
								<br />
								例えば、主語を省略しない、「〜だから」で終わらず「〜だから〜をした。」といったように最後まで起こったことを書き切る。などで結果が変わるかもしれません。
							</div>
						}
					</InformationParagragh>
				)}
				<DefinitionList>
					{isCorrect && (
						<>
							<dt>真相</dt>
							<dd>{truth}</dd>
						</>
					)}
					<dt>あなたの推理</dt>
					<dd>{solution}</dd>
				</DefinitionList>
				{
					<div className={styles.buttonContainer}>
						{isCorrect && (
							<Button
								type={"button"}
								onClick={() => {
									gtagEvent("like_story", {
										enableAbTesting: true,
									});
									toast("いいねしました！");
								}}
								color="none"
							>
								<ButtonIconWrapper>
									<AiOutlineLike />
								</ButtonIconWrapper>
								いいねする
							</Button>
						)}
						{!isCorrect && (
							<button
								type={"button"}
								onClick={onBackButtonClicked}
								className={components.buttonLink}
							>
								戻る
							</button>
						)}
						{!isCorrect && distanceLevel === "almost" && (
							<button
								type={"button"}
								onClick={onSeeTruthButtonClicked}
								className={components.button2}
							>
								真相を見る
							</button>
						)}
					</div>
				}
			</Card>
		</div>
	);
};
