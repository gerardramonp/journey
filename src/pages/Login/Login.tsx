import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { cardBgColor } from '../../assets/styles/colors';
import { StyledTextField } from '../../components/StyledComponents';
import { Routes } from '../../routes/routes';

import { onValue, ref, set } from 'firebase/database';
import { firebaseDb } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

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
  username: string;
  password: string;
}

const initialState: LoginForm = {
  isError: false,
  username: '',
  password: '',
};

const Login: FC = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginForm>(initialState);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
      window.location.pathname = Routes.home;
    }
  }, []);

  const handleUserChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      isError: false,
      username: value,
    });
  };

  const handlePassChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      isError: false,
      password: value,
    });
  };

  const handleSubmit = () => {
    const dbRef = ref(firebaseDb, 'users/' + loginState.username);

    onValue(dbRef, (snapshot) => {
      const user = snapshot.val();

      if (!user) {
        setLoginState({
          ...loginState,
          isError: true,
        });
      } else {
        if (user.password !== loginState.password) {
          setLoginState({
            ...loginState,
            isError: true,
          });
        } else {
          window.localStorage.setItem('isLoggedIn', 'true');
          window.localStorage.setItem('username', loginState.username);
          navigate(Routes.home);
        }
      }
    });
  };

  return (
    <StyledLoginContainer>
      <StyledFromContainer noValidate>
        <StyledFormTitle>Login 😇 </StyledFormTitle>
        <StyledTextField
          helperText={loginState.isError ? 'Fora aquest' : null}
          error={loginState.isError}
          label="Username"
          size="small"
          type="text"
          onChange={handleUserChange}
        />
        <StyledTextField
          helperText={loginState.isError ? 'Fora aquest' : null}
          error={loginState.isError}
          label="Password"
          size="small"
          type="password"
          onChange={handlePassChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Log in
        </Button>
      </StyledFromContainer>
    </StyledLoginContainer>
  );
};

export default Login;
