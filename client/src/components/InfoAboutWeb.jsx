import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import validator from "validator";
import Favicon from "./Head/HeadPart";
import Modules from "./Head/AddYourModules";

function InfoAboutWeb() {
    const [error, setError] = useState(false);
    const [info, setInfo] = useState({
        title: "",
        file: "",
        age: "",
        email: ""
    });
    const errors = {
        title: "Please enter title",
        icon: "Please upload your icon"
    };

    const [step, setStep] = useState(1);

    const submitFormData = (e) => {
        e.preventDefault();


        // checking if value of first name and last name is empty show error else take to step 2
        if (
            validator.isEmpty(info.title)
        ) {
            setError(true);
        } else {
            document.title = info.title;
            nextStep();
        }
    };


    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
        console.log("nextStep called", step);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setStep(step - 1);
        console.log("prevStep called", step);
    };

    // handling form input data by taking onchange value and updating our previous form data state
    const handleInputData = input => e => {
        // input value from the form
        const {value} = e.target;

        //updating for data state taking previous state and then adding new value to create new object
        setInfo(prevState => ({
            ...prevState,
            [input]: value
        }));
    }


    // javascript switch case to show different form in each step
    switch (step) {
        case 1:
            return (
                <>

                    <form>
                        <div className="input-container">
                            <label>Title</label>
                            <input
                                type="text"
                                name="Title"
                                value={info.title}
                                onChange={handleInputData("title")}
                                required
                            />

                            {error && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                    </form>
                    <Button variant="primary" type="submit" onClick={submitFormData}>
                        Continue
                    </Button>
                </>

            );
        case 2:
            return (
                <>
                    <form>
                        <div className="input-container">

                            <Favicon/>
                            {/*{renderErrorMessage("title")}*/}
                        </div>
                    </form>
                    <Button variant="primary" type="submit"
                            onClick={prevStep}
                    >
                        Previous
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitFormData}>
                        Continue
                    </Button>
                </>
            );
        case 3:
            return (
                <>
                    <form>
                        <div className="input-container">
                            <label>Add Your Modules</label>
                            <Modules/>
                            {/*{renderErrorMessage("title")}*/}
                        </div>
                    </form>

                    <Button variant="primary" type="submit"
                            onClick={prevStep}
                    >
                        Previous
                    </Button>
                    <Button variant="primary" type="submit"
                            onClick={submitFormData}>
                        Submit
                    </Button>
                </>
            )
        default:
            return (
                <></>
            )
    }


};
export default InfoAboutWeb;