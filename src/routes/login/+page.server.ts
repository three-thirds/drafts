import {redirect } from '@sveltejs/kit';
import {auth } from '#lib/server/auth.ts';
import type { Actions } from './$types';

export const actions: Actions = {
    login: async ({ request}) => {
        const res = await auth.api.signInSocial({
            body: { provider: "hackclub", callbackURL: '/dashboard'},
            headers: request.headers
        })
        redirect(302, res.url!, { external: true})
    }
}