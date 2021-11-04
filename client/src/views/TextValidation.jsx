import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import useLocalStorage from "../components/hooks/useLocalStorage";

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const TextValidation = () => {
  const [textValue, setTextValue] = useLocalStorage("textValue", "");
  const [validation, setValidation] = useState({
    valid: true,
    message: "",
  });

  let history = useHistory();

  const handleValueUpdate = (event) => {
    setTextValue(event.target.value);
    setValidation({ valid: true, message: "" });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.create().post(`${baseURL}/validate`, {
        textValue,
      });

      if (response.status === 200) {
        history.push("/success");
      }
    } catch (ex) {
      if (axios.isAxiosError(ex)) {
        const error = ex?.response?.data;
        setValidation({ valid: false, message: error.validationMessage });
        const errorElem = document.querySelector(`.error-summary`);
        errorElem.style.display = "block";
      }
    }
  };

  return (
    <>
      <form className="form wrapper">
        <label for="textValue">Please enter your details</label>
        <input
          type="text"
          name="textValue"
          value={textValue}
          onChange={handleValueUpdate}
          maxLength={10}
        />
        <button
          type="button"
          disabled={!validation.valid}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div
          class="error-summary"
          aria-labelledby="error-summary-title"
          role="alert"
          tabindex="-1"
        >
          <h2 class="error-summary__title" id="error-summary-title">
            There is a problem
          </h2>
          <p>{validation.message}</p>
          <div class="error-summary__body">
            <ul class="error-summary__list">
              <li>You must enter your details in numeric format</li>
              <li>Number must not exceed 10 characters</li>
            </ul>
          </div>
        </div>
      </form>
    </>
  );
};

export default TextValidation;
