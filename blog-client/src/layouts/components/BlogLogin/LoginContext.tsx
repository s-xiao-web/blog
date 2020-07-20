import { createContext } from 'react';

export interface LoginContextProps {
  verifyErrs?:any[];
  changeVerify?:() => void;
};

const LoginContext: React.Context<LoginContextProps> = createContext({});

export default LoginContext;
