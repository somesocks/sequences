

export type Iterator<T> = {
  next: () => ({
    done: boolean,
    value?: T
  })
}
