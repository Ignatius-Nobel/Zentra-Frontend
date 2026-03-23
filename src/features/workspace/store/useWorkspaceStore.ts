import { create } from 'zustand'

interface WorkspaceState {
  currentWorkspaceId: string | null
  setCurrentWorkspaceId: (id: string) => void
}

/**
 * Feature-specific store for Workspace features.
 * Keep this separate from global app state.
 */
export const useWorkspaceStore = create<WorkspaceState>()((set) => ({
  currentWorkspaceId: null,
  setCurrentWorkspaceId: (id) => set({ currentWorkspaceId: id }),
}))
