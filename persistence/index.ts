import { supabase } from "persistence/supabase";
import { SupabaseArticleRepository } from "persistence/SupabaseArticleRepository";

const articleRepository = SupabaseArticleRepository(supabase);

export { articleRepository };
