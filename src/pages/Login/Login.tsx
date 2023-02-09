import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { cardBgColor } from '../../assets/styles/colors';
import { StyledTextField } from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';

const StyledLoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledFromContainer = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cardBgColor};
  border-radius: 1rem;
  box-shadow: 0px 2px 16px 0px rgba(black, 0.08);
  padding: 1rem 1.5rem;
`;

const StyledFormTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

interface LoginForm {
  isError: boolean;
  password: string;
}

const initialState: LoginForm = {
  isError: false,
  password: '',
};

const Login = () => {
  const [loginState, setLoginState] = useState<LoginForm>(initialState);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      window.location.pathname = Routes.home;
    }
  }, []);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      isError: false,
      password: value,
    });
  };

  const handleSubmit = () => {
    if (loginState.password === 'miqueta0102') {
      window.localStorage.setItem('isLoggedIn', 'true');
      window.location.pathname = Routes.home;
    } else {
      setLoginState({
        ...loginState,
        isError: true,
      });
    }
  };

  return (
    <StyledLoginContainer>
      <StyledFromContainer noValidate>
        <StyledFormTitle>Login 😇 </StyledFormTitle>
        <StyledTextField
          helperText={loginState.isError ? 'Fora aquest' : null}
          error={loginState.isError}
          label="Password"
          size="small"
          type="password"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Log in
        </Button>
      </StyledFromContainer>
    </StyledLoginContainer>
  );
};

export default Login;
