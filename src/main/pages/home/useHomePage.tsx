export type UseHomePageState = {
  todos: any[]
}

export const useHomePage = (): UseHomePageState => {
  return {
    todos: [],
  }
}
