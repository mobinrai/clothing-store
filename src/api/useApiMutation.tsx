import { useMutation } from "@tanstack/react-query";
import { privateApi } from "./axios";
import type { AxiosRequestConfig } from "axios";

type Payload<TData>={
        methodName: "post" | "patch"| "delete";
        url: string;
        data?: TData;
        axiosConfig?: AxiosRequestConfig
}
const apiMethodName = {
    post: privateApi.post,
    patch: privateApi.patch,
    delete:privateApi.delete
};

type MutationOptions<TData> = {
    cbSuccess?: (data: TData) => void;
    cbError?: (error: Error) => void;
};

const useApiMutation = <TData=any>({cbSuccess,cbError}: MutationOptions<TData>) => {
    return useMutation({
        mutationFn: async (payload: Payload<TData>) => {
            const result = await apiMethodName[payload.methodName](payload.url, payload.data, payload.axiosConfig);
            return result?.data;
        },
        onSuccess(data) {
            cbSuccess?.(data);
        },
        onError(error) {
            cbError?.(error);
        },
    });
};

export default useApiMutation;
