import profileReducer, {addPostActionCreator, deletePostById} from "./profile-reducer";

//1. test data
let state = {
    postsData: [
        {id: 1, post: 'Hello', likesCount: 15},
        {id: 2, post: 'How is your level?', likesCount: 9},
        {id: 3, post: 'Hey!!!', likesCount: 51}
    ]
};

it('length of posts should ', () => {

    let action = addPostActionCreator("it-samurai");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(4);
});

it('message of new post should be correct ', () => {

    let action = addPostActionCreator("it-samurai");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData[3].post).toBe("it-samurai");
});

it('length of after deleting length of messages should be decrement', () => {

    let action = deletePostById(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(2);
});

it("after deleting length should't be decrement if id is incorrect", () => {

    let action = deletePostById(10000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});
