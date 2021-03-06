import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const GET_FRIENDS = 'GET_FRIENDS';

export const addFriend = () => {
    // Add the code for this action
    const friendsEndpoint = 'http://localhost:5000/new-friend';
    const friend = {
            name: 'Rashmi',
            age: 29,
            email: 'baheti.rash123@gmail.com',
        }
    const friends = axios.post(friendsEndpoint, friend);

    console.log('friends', friends);
    return {
    	type: ADD_FRIEND,
    	payload: friends,
    };
};

export const getFriends = () => {
    // Add the code for this action
    const friendsEndpoint = 'http://localhost:5000/friends';
    const friends = axios.get(friendsEndpoint);

    console.log('friends', friends);
    return {
    	type: GET_FRIENDS,
    	payload: friends,
    };
};