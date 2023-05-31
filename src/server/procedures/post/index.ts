import { procedure } from "@/server/trpc";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { storyInit } from "@/server/model/schemas";
import { generateId } from "@/common/util/id";

export type Input = z.infer<typeof storyInit>;

export const post = procedure
	.input(storyInit)
	.mutation(async ({ input, ctx }) => {
		const prisma = new PrismaClient();
		const { questionExamples, ...storyData } = input;

		// create story and associated questionExamples
		const story = await prisma.story.create({
			data: {
				...storyData,
				id: generateId(),
				questionExamples: JSON.stringify(questionExamples),
				authorEmail: await ctx.getUser().then((user) => user.email),
			},
		});
		return story;
	});
