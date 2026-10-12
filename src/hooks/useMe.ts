import { fetchMeQuery } from '../queries/allQueries'

const useMe = () => {
    const {isLoading,isPending, isSuccess, data} = fetchMeQuery()
    return {isLoading,isPending,isSuccess,data}
}

export default useMe