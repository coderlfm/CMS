
const devBaseURL = "https://www.fastmock.site/mock/94a0f2047d1702f65cd162e1a272f080/api/";
const proBaseURL = "http://127.0.0.1:8888/";


export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT = 10000;

export const devTestBaseURL = 'http://119.27.178.70:9511/'
