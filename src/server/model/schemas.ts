import { z } from "zod";

const NON_EMPTY_MESSAGE = "この項目は必須です";

export const answer = z.enum(["True", "False", "Unknown", "Invalid"]);

export const questionExample = z.object({
	question: z.string().nonempty(NON_EMPTY_MESSAGE),
	answer,
	supplement: z.string().optional(),
	customMessage: z.string().optional(),
});

export const story = z.object({
	id: z.string(),
	authorId: z.string(),
	title: z.string(),
	quiz: z.string(),
	truth: z.string(),
	simpleTruth: z.string(),
	questionExamples: z.array(questionExample),
	publishedAt: z.date().nullable(),
	published: z.boolean(),
	createdAt: z.date(),
});

export const storyInit = z.object({
	title: z.string().nonempty(NON_EMPTY_MESSAGE),
	quiz: z.string().nonempty(NON_EMPTY_MESSAGE),
	truth: z.string().nonempty(NON_EMPTY_MESSAGE),
	simpleTruth: z.string().nonempty(NON_EMPTY_MESSAGE),
	questionExamples: z
		.array(questionExample)
		.min(3, "3つ以上の質問を入力してください")
		.refine((data) => {
			const answers = data.map((question) => question.answer);
			return (
				answers.includes("True") &&
				answers.includes("False") &&
				answers.includes("Unknown")
			);
		}, "AIの精度を上げるため、回答がはい、いいえ、わからないをそれぞれ1つ以上入力してください"),
});

export const questionLog = z.object({
	question: z.string(),
	answer,
	storyId: z.string(),
});

export const truthCoincidence = z.enum(["Covers", "Wrong", "Insufficient"]);
