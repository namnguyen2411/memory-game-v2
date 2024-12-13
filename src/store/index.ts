import { create } from 'zustand'

const POINTS_PER_MATCHING_PAIR = 10

interface GameState {
  gameStarted: boolean
  setGameStarted: () => void
  stage: number
  setStage: () => void
  score: number
  setScore: (stage: number) => void
  reset: () => void
}

export const useStore = create<GameState>()((set) => ({
  gameStarted: false,
  setGameStarted: () => set((state) => ({ gameStarted: !state.gameStarted })),
  stage: 0,
  setStage: () => set((state) => ({ stage: state.stage + 1 })),
  score: 0,
  setScore: (stage: number) => set((state) => ({ score: state.score + POINTS_PER_MATCHING_PAIR * stage })),
  reset: () => set(() => ({ stage: 0, score: 0, gameStarted: false }))
}))
