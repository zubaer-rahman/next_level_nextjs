export const getAllUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        return new Error("Something went wrong");
    }
    return await res.json();
};
export const getUserDetail = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!res.ok){
        return new Error("Something went wrong");
    }
    return await res.json();
}
export const getUserPosts = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if(!res.ok){
        return new Error("Something went wrong");
    }
    const data = await res.json();

    return await new Promise((resolve)=> setTimeout(()=> resolve(data), 3000));
}