import {rerenderEntireTree} from "../render";

let state = {
    navbarPage: {
        friendsData: [
            {id: 1, name: "Masha"},
            {id: 2, name: "Sveta"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Yana"}
        ]
    },
    profilePage: {
        postData: [
            {id: 1, message: "Hi", likesCount: 15},
            {id: 2, message: "It`s my first post", likesCount: 23},
            {id: 3, message: "Hello World!!!", likesCount: 8}
        ],
        newPostText: "YO YO YO"
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Yana"},
            {id: 3, name: "Sasha"},
            {id: 4, name: "Valera"},
            {id: 5, name: "Sveta"}
        ],
        messageData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are your?"},
            {id: 3, message: "YO!!!"}
        ]
    }
}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = " "
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export default state