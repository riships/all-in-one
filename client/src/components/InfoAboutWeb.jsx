import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import validator from "validator";

function InfoAboutWeb() {
    const [error, setError] = useState(false);
    const [info, setInfo] = useState({
        title: "",
        lastName: "",
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
        }else if(
            validator.isEmpty(info.title)
        ){}
        else {
            document.title = info.title;
            nextStep();
        }
    };


    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setStep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setStep(step - 1);
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

                <form onSubmit={submitFormData}>
                    <div className="input-container">
                        <label>Title</label>
                        <input
                            type="text"
                            name="Title"
                            value={info.title}
                            onChange={handleInputData("title")}
                            required
                        />

                        {/*{renderErrorMessage("title")}*/}
                    </div>
                    <Button variant="primary" type="submit">
                        Continue
                    </Button>
                </form>

            );
        case 2:
            return (
                <>
                    second step
                    <Button variant="primary" type="submit"
                            onClick={prevStep}
                    >
                        Previous
                    </Button>
                    <Button variant="primary" type="submit"
                            onClick={nextStep}
                    >
                        Continue
                    </Button>
                </>
            );
        case 3:
            return (
                <>
                    final step
                    <Button variant="primary" type="submit"
                            onClick={submitFormData}
                    >
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