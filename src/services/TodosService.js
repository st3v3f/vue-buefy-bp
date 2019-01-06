import Api from '@/services/Api'

export default {
    getAllTodos (params) {
        return Api().get('/todos')
    },
    getMyTodo (params) {
        return Api().get('/todos/' + params.id) //e.g. 1.
    }
}