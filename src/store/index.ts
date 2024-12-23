import { create } from 'zustand'

const POINTS_PER_MATCHING_PAIR = 10

interface GameState {
  gameStarted: boolean
  setGameStarted: () => void
  stage: number
  setStage: () => void
  score: number
  setScore: (array: number[][], streak: number) => void
  reset: () => void
}

export const useStore = create<GameState>()((set) => ({
  gameStarted: false,
  setGameStarted: () => set((state) => ({ gameStarted: !state.gameStarted })),
  stage: 0,
  setStage: () => set((state) => ({ stage: state.stage + 1 })),
  score: 0,
  setScore: (array, streak) => {
    const matchedPairPoints = array.length * POINTS_PER_MATCHING_PAIR
    const streakBonus = streak >= 2 ? Math.floor(streak / 2) * 5 : 0 // added 5 points for every 2 streak
    const totalScore = matchedPairPoints + streakBonus

    set(() => ({
      score: totalScore
    }))
  },
  reset: () => set(() => ({ stage: 0, streak: 0, score: 0, gameStarted: false }))
}))
