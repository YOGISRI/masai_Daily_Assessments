import { useReducer } from "react";
const initialState = {
    step: 1,
    isSubmitted: false,
    formData: {
        name: "",
        email: "",
        username: "",
        password: ""
    }
};
function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value
                }
            };

        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };

        case "PREVIOUS_STEP":
            return { ...state, step: state.step - 1 };

        case "SUBMIT_FORM":
            return { ...state, isSubmitted: true };

        case "RESET_FORM":
            return initialState;

        default:
            return state;
    }
}
export default function MultiStepForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { step, formData, isSubmitted } = state;
    const renderStep1 = () => (
        <>
            <h3>Step 1: Personal Details</h3>

            <input
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_FIELD",
                        field: "name",
                        value: e.target.value
                    })
                }
            />

            <input
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_FIELD",
                        field: "email",
                        value: e.target.value
                    })
                }
            />

            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
                Next
            </button>
        </>
    );
    const renderStep2 = () => (
        <>
            <h3>Step 2: Account Details</h3>

            <input
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_FIELD",
                        field: "username",
                        value: e.target.value
                    })
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE_FIELD",
                        field: "password",
                        value: e.target.value
                    })
                }
            />

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
            </button>

            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
                Next
            </button>
        </>
    );
    const renderStep3 = () => (
        <>
            <h3>Step 3: Review & Submit</h3>

            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Username: {formData.username}</p>
            <p>Password: {formData.password}</p>

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
            </button>

            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
                Submit
            </button>
        </>
    );
    if (isSubmitted) {
        return (
            <>
                <h2>Form Submitted Successfully ✅</h2>
                <button onClick={() => dispatch({ type: "RESET_FORM" })}>
                    Reset Form
                </button>
            </>
        );
    }
    return (
        <div>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
        </div>
    );
}
