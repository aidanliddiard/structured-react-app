import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { signInUser, signOutUser, signUpUser } from '../services/user';

export const userAuth = () => {
  const context = useContext(UserContext);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  if (context === undefined) {
    throw new Error('userAuth must be used within a UserProvider');
  }

  const { user, setUser } = context;

  const handleAuth = async (authType) => {
    try {
      if (authType === 'login') {
        const data = await signInUser({ email, password });
        setUser(data);
        history.push('/');
      } else {
        const data = await signUpUser({ email, password });
        setUser(data);
        history.push('/');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const logOut = async () => {
    await signOutUser();
    setUser({ id: '', email: '' });
    history.replace('/auth');
  };

  return {
    user,
    handleAuth,
    email,
    setEmail,
    password,
    setPassword,
    error,
    logOut,
  };
};
