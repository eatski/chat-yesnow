// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
	interface Session {
		custom?: {
			userId: string;
		};
	}
}
