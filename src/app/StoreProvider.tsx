"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Preloader from "@/components/ui/custom/Preloader";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  const persistedStore = persistStore(storeRef.current);

  // delay rehydration so that the loader can be displayed for at least 1 sec
  const handleBeforeLift = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1000); // 1 second delay
    });
  };

  return (
    <Provider store={storeRef.current}>
      <PersistGate
        loading={<Preloader />}
        persistor={persistedStore}
        onBeforeLift={handleBeforeLift}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
