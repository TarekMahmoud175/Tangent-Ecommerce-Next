'use client'
import React, { ReactNode } from "react";
import { Provider as ProviderWrapper } from "react-redux";
import store from "@/Redux/store";

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return <ProviderWrapper store={store}>{children}</ProviderWrapper>;
}
