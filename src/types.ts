export type axiosConfig = {
    method: string,
    url: string,
    headers:{
        Accept: string, 
        'Content-Type': string,
        "Access-Control-Allow-Origin": boolean
    },
    data: string
}