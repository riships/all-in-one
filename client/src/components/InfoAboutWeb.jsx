import React, {useState} from 'react';
import {Button} from "react-bootstrap";

// import validator from "validator";

function InfoAboutWeb() {

    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: ""
    });

    const [step, setstep] = useState(1);

    const submitFormData = (e) => {
        e.preventDefault();


    };

    // function for going to next step by increasing step state by 1
    const nextStep = () => {
        setstep(step + 1);
    };

    // function for going to previous step by decreasing step state by 1
    const prevStep = () => {
        setstep(step - 1);
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
                    first step
                    <Button variant="primary" type="submit"
                            onClick={nextStep}
                    >
                        Continue
                    </Button>
                </>
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