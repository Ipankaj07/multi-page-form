import React from "react";

const initState = {
    name: "",
    age: "",
    dateOfBirth: "",
    stateOfResidence: "",
    address: "",
    pinCode: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "UPDATE_AGE":
            return {
                ...state,
                age: action.payload
            }
        case "UPDATE_DOB":
            return {
                ...state,
                dateOfBirth: action.payload
            }
        case "UPDATE_STATE":
            return {
                ...state,
                stateOfResidence: action.payload
            }
        case "UPDATE_ADDRESS":
            return {
                ...state,
                address: action.payload
            }
        case "UPDATE_PIN":
            return {
                ...state,
                pinCode: action.payload
            }
        case "CLEAR_STATE":
            return {
                ...state,
                name: "",
                age: "",
                dateOfBirth: "",
                stateOfResidence: "",
                address: "",
                pinCode: "",
            }

        default:
            throw new Error("Unhandled action type: " + action.type);
    }
}

const UserDetailsContext = React.createContext(initState);

const UserDetailsProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initState);

    const { name, age, dateOfBirth, stateOfResidence, address, pinCode } = state;

    return (
        <UserDetailsContext.Provider value={{ name, age, dateOfBirth, stateOfResidence, address, pinCode, dispatch }}>
            {children}
        </UserDetailsContext.Provider>
    );
}

export { UserDetailsContext, UserDetailsProvider };