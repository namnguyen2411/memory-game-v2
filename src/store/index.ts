import { create } from 'zustand'

const POINTS_PER_MATCHING_PAIR = 10

interface GameState {
  gameStarted: boolean
  setGameStarted: () => void
  stage: number
  setStage: () => void
  streak: number
  setStreak: (newStreak: number) => void
  score: { current: number; matchingPair: number[][] }
  setScore: (array: number[]) => void
  reset: () => void
}

export const useStore = create<GameState>()((set) => ({
  gameStarted: false,
  setGameStarted: () => set((state) => ({ gameStarted: !state.gameStarted })),
  stage: 0,
  setStage: () => set((state) => ({ stage: state.stage + 1 })),
  streak: 0,
  setStreak: (newStreak) => set(() => ({ streak: newStreak })),
  score: { current: 0, matchingPair: [] },
  setScore: (array) =>
    set((state) => ({
      score: {
        // +10 for each matching pair and +5 for every 2 streak
        current: state.score.current + POINTS_PER_MATCHING_PAIR + (state.streak > 0 && state.streak % 2 === 0 ? 5 : 0),
        matchingPair: [...state.score.matchingPair, array]
      }
    })),
  reset: () => set(() => ({ stage: 0, streak: 0, score: { current: 0, matchingPair: [] }, gameStarted: false }))
}))
