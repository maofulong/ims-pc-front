import * as HomeCommonApi from '../services/HomeCommonApi';

export default {
    namespace: 'homeCommon',
    state: {

    },
    reducers: {

    },
    effects: {
        *userLogin({ payload },{ call }){
            return yield call(HomeCommonApi.getUserLogin,payload)
        }
    }
}