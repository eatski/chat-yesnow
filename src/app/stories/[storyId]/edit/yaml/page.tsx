import { EditStoryYaml } from "@/components/editStoryYaml";
import { getUserSession } from "@/server/serverComponent/getUserSession";
import { getStoryPrivate } from "@/server/services/story";
import { updateStory } from "@/server/services/story/updateStory";
import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";
import { z } from "zod";

const paramsSchema = z.object({
	storyId: z.string(),
});

export default async function StoryEditPage({ params }: { params: unknown }) {
	const { storyId } = paramsSchema.parse(params);
	const user = await getUserSession();
	if (!user) {
		notFound();
	}
	const story = await getStoryPrivate({
		storyId,
		authorId: user.userId,
	});
	if (!story) {
		notFound();
	}
	return (
		<EditStoryYaml
			initialStory={story}
			onSubmit={async (input) => {
				"use server";
				await updateStory({
					storyId,
					input: input,
					userId: user.userId,
				});
				revalidateTag(`/stories/${storyId}`);
			}}
		/>
	);
}
