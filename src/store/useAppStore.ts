import { create } from 'zustand'

interface AppState {
  // Add your app-wide state here
}

export const useAppStore = create<AppState>()((_set) => ({
  // Add your initial state and actions here
}))
