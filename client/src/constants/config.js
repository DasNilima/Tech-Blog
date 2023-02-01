// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}
// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllBlog: { url: '/blog', method: 'GET', params: true },
    uploadFile: { url: '/file/upload', method: 'POST' },
    createBlog: { url: 'create', method: 'POST' },
    deleteBlog: { url: 'delete', method: 'DELETE', query: true },
    getBlogById: { url: 'blog', method: 'GET', query: true },
    getByUserId :{ url: '/user', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updateBlog: { url: 'update', method: 'PUT', query: true },
    // getProfile: { url: 'profile', method: 'GET',  params: true },
    // updateUser:{ url: 'update', method: 'PUT', query: true },
}