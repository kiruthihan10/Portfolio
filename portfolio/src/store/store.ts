import { topics } from '@/constant';
import { create } from 'zustand'

export interface StoreState {
    currentTopic: topics
    setCurrentTopic: (topic: topics) => void;
}

const useStore = create<StoreState>((set) => ({
    currentTopic: topics.Home,
    setCurrentTopic: (topic) => set({
        currentTopic: topic
    }),
}))

export const useGetters = () => {
    return {
        currentTopic: useStore((state) => state.currentTopic)
    }
}

export const useSetters = () => {
    return {
        setCurrentTopic: useStore((state) => state.setCurrentTopic)
    }
}