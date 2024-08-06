import create from 'zustand';

const useStore = create((set) => ({
  user: { name: 'Guest' }, 
  tasks: [],
  projects: [],
  setUser: (user) => set({ user }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
}));

export default useStore;
