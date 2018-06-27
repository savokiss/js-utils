import Matrix from '@/Matrix'

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const model = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14]
]

describe('Matrix', () => {
  var matrix = new Matrix(data, 5, 6)
  it('members', () => {
    expect(matrix.rows).toBe(5)
    expect(matrix.cols).toBe(6)
    expect(matrix.model).toEqual(model)
  })
  it('getRow', () => {
    expect(matrix.getRow(0)).toEqual(model[0])
    expect(matrix.getRow(1)).toEqual(model[1])
    expect(matrix.getRow(2)).toEqual(model[2])
  })
  it('getCol', () => {
    expect(matrix.getCol(0)).toEqual([1, 7, 13])
    expect(matrix.getCol(1)).toEqual([2, 8, 14])
    expect(matrix.getCol(2)).toEqual([3, 9])
    expect(matrix.getCol(3)).toEqual([4, 10])
    expect(matrix.getCol(4)).toEqual([5, 11])
    expect(matrix.getCol(5)).toEqual([6, 12])
  })
})
