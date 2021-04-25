import React from 'react'
import { AuthProvider } from './AuthHook'
import { ToastProvider } from './ToastContext'


const AppProvider: React.FC = ({children}) => {
  return(
      <AuthProvider>
        <ToastProvider>
          {children}
        </ToastProvider>
      </AuthProvider>
  );
}

export default AppProvider;