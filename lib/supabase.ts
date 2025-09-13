import { createClient } from "@supabase/supabase-js"
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = ()=>{
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXt_public_supabase_ANON_KEY!,{
            async accessToken() {
                return ((await auth()).getToken())
            }

        }
    )
}