import React, { useEffect, useLayoutEffect, useState } from "react";
import { Slot, Stack } from "expo-router";
import { AuthProvider } from "../context/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
