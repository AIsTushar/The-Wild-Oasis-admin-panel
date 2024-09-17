import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 2rem;

  & img {
    height: auto;
    width: 300px;
  }

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledErrorFallback>
      <Box>
        <Heading as="h2">Something went wrong 🧐</Heading>
        <p>{error.message}</p>
        <div>
          <Button size="large" onClick={resetErrorBoundary}>
            Try Again
          </Button>
        </div>
        <img src="errorgif.gif" alt="Funny GIF" />
      </Box>
    </StyledErrorFallback>
  );
}

export default ErrorFallback;
