import { useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext<any>(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  const [user, setUser] = useState<string | undefined>("");

  useEffect(() => {
    if (user === undefined) return;

    if (!user && rootSegment !== "(auth)") {
      router.replace("/(auth)/auth");
    } else if (user && rootSegment === "(main)") {
      router.replace("/");
    }
  }, [user, rootSegment]);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn: () => {
          console.log("Sign In kkk");
          setUser("user");
        },
        signOut: () => {
          setUser("");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
