// app/javascript/actions.js
export const fetchRandomGreeting = () => async (dispatch) => {
    const response = await fetch('/random_greeting'); // Assuming this is your API endpoint
    const data = await response.json();
    dispatch({ type: 'SET_GREETING', payload: data.greeting });
  };
  