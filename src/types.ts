export type axiosConfig = {
    method: string,
    url: string,
    headers:{
        Accept: string, 
        'Content-Type': string,
        "Access-Control-Allow-Origin": boolean
    },
    data: string
};
export type LocalStorageLoginObject = {
    token: String
    username: String
}