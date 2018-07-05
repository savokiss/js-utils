import poller from '@/poller'

describe('poller', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('basic', () => {
    poller(retry => {}, 1000)
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  })

  it('invoke retry', () => {
    poller(retry => {
      retry()
    }, 2000)
    jest.runOnlyPendingTimers() // just retry once
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000)
  })

  it('multiplier', () => {
    let retryFn = null
    poller(retry => {
      retryFn = retry
    }, 1000, 2)

    jest.advanceTimersByTime(1000) // make retryFn avaliable

    retryFn()
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)

    retryFn()
    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000)

    retryFn()
    expect(setTimeout).toHaveBeenCalledTimes(4)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 8000)
  })
})
