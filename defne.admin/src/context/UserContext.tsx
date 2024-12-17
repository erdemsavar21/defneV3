import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  email: string | null;
  setEmail: (email: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Sayfa yenilendiğinde email'i localStorage'dan yükle
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const updateEmail = (newEmail: string | null) => {
    if (newEmail) {
      localStorage.setItem('userEmail', newEmail); // LocalStorage'a kaydet
    } else {
      localStorage.removeItem('userEmail'); // Kullanıcı çıkış yaparsa sil
    }
    setEmail(newEmail); // Context'i güncelle
  };

  return (
    <UserContext.Provider value={{ email, setEmail: updateEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};