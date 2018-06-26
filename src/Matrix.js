
/**
 * 二维矩阵工具类
 */
export default class Matrix {
  data = []
  rows = 0
  cols = 0
  model = [[]]

  constructor (data, rows, cols) {
    this.data = data
    this.rows = rows
    this.cols = cols
    this.model = this._init(data, rows, cols)
  }

  /**
   * 根据数组和行列生成二维矩阵
   * @param { Array } array
   * @param { number } rows - 最大行数
   * @param { number } cols - 列数
   */
  _init (array, rows, cols) {
    let matrix = [] // 二维数组
    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < cols; j++) {
        let index = i * cols + j
        if (index < array.length) {
          row.push(array[index])
        }
      }
      if (row.length > 0) {
        matrix.push(row)
      }
    }
    return matrix
  }

  /**
   * 获取指定列
   * @param { number } index
   */
  getCol (index) {
    let col = []
    for (let i = 0; i < this.model.length; i++) {
      if (this.model[i] && this.model[i][index]) {
        col.push(this.model[i][index])
      }
    }
    return col
  }

  /**
   * 获取指定行
   * @param { number } index
   */
  getRow (index) {
    return this.model[index]
  }

  getRowCount () {
    return this.model.length
  }
}
