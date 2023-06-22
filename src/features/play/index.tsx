import { trpc } from "@/libs/trpc";
import { useState } from "react";
import { Feed } from "./components/feed";
import styles from "./styles.module.scss";
import { QuestionForm } from "./components/questionForm";
import { AnswerForm } from "./components/answerForm";
import { QuestionResult } from "./components/questionResult";
import { AnswerResult } from "./components/answerResult";
import { useQuestion } from "./useQuestion";
import { gtag } from "@/common/util/gtag";
import { CLIENT_KEY, getRecaptchaToken } from "@/common/util/grecaptcha";
import Script from "next/script";

type Props = {
	storyId: string;
};

const AnswerFormContainer: React.FC<{
	storyId: string;
	onCancel: () => void;
}> = ({ storyId, onCancel }) => {
	const { mutate, isLoading, data, reset, isError } = trpc.truth.useMutation();
	return data ? (
		<AnswerResult
			reasoning={data.input}
			onBackButtonClicked={reset}
			result={
				(
					{
						Covers: "正解",
						Wrong: "間違いがあります",
						Insufficient: "説明が不十分です。",
					} as const satisfies Record<typeof data.result, string>
				)[data.result]
			}
			truth={data.truth}
		/>
	) : (
		<AnswerForm
			isLoading={isLoading}
			onCancel={onCancel}
			isError={isError}
			onSubmit={async (input) => {
				gtag("click_submit_answer");
				mutate({
					storyId,
					text: input,
					recaptchaToken: await getRecaptchaToken(),
				});
			}}
		/>
	);
};

export function Play(props: Props) {
	const question = useQuestion(props.storyId);
	const [isAnswerMode, setIsAnswerMode] = useState(false);
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.google.com/recaptcha/api.js?render=${CLIENT_KEY}`}
			/>
			{!isAnswerMode && (
				<div className={styles.sectionWrapper}>
					<QuestionForm
						onSubmit={question.onSubmit}
						isLoading={question.isLoading}
					/>
				</div>
			)}
			{!isAnswerMode && question.latest && (
				<div className={styles.sectionWrapper}>
					<QuestionResult
						question={question.latest.input}
						answer={question.latest.result}
						onAnswerButtonClicked={() => {
							setIsAnswerMode(true);
						}}
					/>
				</div>
			)}
			{isAnswerMode && (
				<div className={styles.sectionWrapper}>
					<AnswerFormContainer
						storyId={props.storyId}
						onCancel={() => {
							setIsAnswerMode(false);
						}}
					/>
				</div>
			)}

			{question.history.length > 0 && (
				<div className={styles.sectionWrapper}>
					<Feed
						items={question.history.map(({ id, input, result }) => ({
							id: id.toString(),
							question: input,
							answer: result,
						}))}
					/>
				</div>
			)}
		</>
	);
}
