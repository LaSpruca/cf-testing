import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';

// optional
export const createContext = () => {
	// ...
	return {
		/** context data */
	};
};

// optional
export const responseMeta = () => {
	// ...
	return {
		// { headers: ... }
	};
};

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>>()
	// queries and mutations...
	.query('time', {
		resolve: () => {
			return { date: new Date() };
		}
	});

export type Router = typeof router;
