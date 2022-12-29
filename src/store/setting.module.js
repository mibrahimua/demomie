import {
    ArticleService, CommentsService
} from "@/common/api.service";
import {FETCH_ARTICLE, FETCH_COMMENTS} from "@/store/actions.type";
import {SET_ARTICLE, SET_COMMENTS} from "@/store/mutation.type";

export const state = {
    article: {},
    comments: []
};

export const actions = {
    [FETCH_ARTICLE](context, articleSlug) {
        return ArticleService.get(articleSlug)
            .then(({data}) => {
                context.commit(SET_ARTICLE, data.article);
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    [FETCH_COMMENTS](context, articleSlug) {
        return CommentsService.get(articleSlug)
            .then(({data}) => {
                context.commit(SET_COMMENTS, data.comments);
            })
            .catch(error => {
                throw new Error(error);
            });
    }
};

export const mutations = {
    [SET_ARTICLE](state, article) {
        state.article = article;
    },
    [SET_COMMENTS](state, comments) {
        state.comments = comments;
    }
};

export default {
    state,
    actions,
    mutations
};